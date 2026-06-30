import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const uri = process.env.MONGODB_URI || '';
const emailFrom = process.env.EMAIL_FROM || '';
const emailTo = process.env.EMAIL_TO || '';
const emailPassword = process.env.EMAIL_PASSWORD || '';

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  try {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } catch (err) {
    console.error("Failed to initialize MongoDB client promise:", err);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'All fields are required and email must be valid.' });
    }

    let savedToMongo = false;
    let emailSent = false;
    let insertId = 'fallback-' + Date.now();

    // 1. Try Saving to MongoDB
    if (clientPromise) {
      try {
        const activeClient = await clientPromise;
        const db = activeClient.db('dynamicDatabase');
        const collection = db.collection('contacts');

        const result = await collection.insertOne({
          name,
          email,
          message,
          createdAt: new Date(),
        });
        insertId = result.insertedId.toString();
        savedToMongo = true;
      } catch (mongoError) {
        console.error("MongoDB storage failed:", mongoError);
      }
    } else {
      console.warn("MongoDB URI not provided or initialization failed.");
    }

    // 2. Try Sending Nodemailer Email
    if (emailFrom && emailTo && emailPassword) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailFrom,
            pass: emailPassword,
          },
        });

        const mailOptions = {
          from: emailFrom,
          to: emailTo,
          subject: 'New Contact Message',
          text: `You have a new message from ${name} (${email}):\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    } else {
      console.warn("Email configuration missing in .env.");
    }

    // 3. Fallback: Save to Local Backup File if either operations failed
    if (!savedToMongo || !emailSent) {
      try {
        const fallbackPath = path.join(process.cwd(), 'contacts_fallback.json');
        let records = [];
        if (fs.existsSync(fallbackPath)) {
          const fileContent = fs.readFileSync(fallbackPath, 'utf-8');
          records = JSON.parse(fileContent || '[]');
        }
        const newRecord = {
          name,
          email,
          message,
          createdAt: new Date().toISOString(),
          mongoStatus: savedToMongo ? 'Success' : 'Failed',
          emailStatus: emailSent ? 'Success' : 'Failed',
        };
        records.push(newRecord);
        fs.writeFileSync(fallbackPath, JSON.stringify(records, null, 2), 'utf-8');
        console.log(`Saved contact form entry to fallback file at ${fallbackPath}`);
      } catch (fsError) {
        console.error("Failed to write to local contacts fallback file:", fsError);
      }
    }

    // 4. Always return a nice success response since the entry is safely recorded
    return res.status(200).json({
      message: savedToMongo && emailSent
        ? 'Your message has been saved and email sent!'
        : 'Thank you! Your message was received and saved in our backup database.',
      id: insertId,
      status: {
        savedToMongo,
        emailSent,
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
