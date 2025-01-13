import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

const uri = process.env.MONGODB_URI || '';
const emailFrom = process.env.EMAIL_FROM || '';
const emailTo = process.env.EMAIL_TO || '';
const emailPassword = process.env.EMAIL_PASSWORD || '';

if (!uri || !emailFrom || !emailTo || !emailPassword) {
  throw new Error(
    'Please define MONGODB_URI, EMAIL_FROM, EMAIL_TO, and EMAIL_PASSWORD in .env.local'
  );
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'All fields are required and email must be valid.' });
    }

    try {
      // MongoDB connection
      const client = await clientPromise;

      // Use or create a new database dynamically
      const db = client.db('dynamicDatabase'); // Replace 'dynamicDatabase' with your desired name
      const collection = db.collection('contacts');

      // Save message to MongoDB
      const result = await collection.insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });

      // Set up Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailFrom,
          pass: emailPassword,
        },
      });

      // Email options
      const mailOptions = {
        from: emailFrom,
        to: emailTo,
        subject: 'New Contact Message',
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return res
        .status(200)
        .json({ message: 'Your message has been saved and email sent!', id: result.insertedId });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
