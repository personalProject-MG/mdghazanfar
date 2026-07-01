import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    return res.status(503).json({
      error: 'Gemini API is not configured.',
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    const prompt = `
You are a creative Tech & AI Philosopher.
Generate an inspiring, tech-relevant quote or a deep "AI Insight of the Day".
The quote should focus on artificial intelligence, machine learning, future tech, programming craftsmanship, or human-machine collaboration.
It should be thought-provoking and inspiring for developers and builders.

Generate a structured JSON response matching this exact format:
{
  "text": "The quote text or AI insight goes here.",
  "author": "The author name (e.g., Ada Lovelace, Alan Turing, Steve Jobs, Grace Hopper, or 'AI Orchestrator' if it is a newly generated original insight)",
  "category": "e.g., AI Insight, Tech Wisdom, Innovation, Software Craftsmanship"
}

Return ONLY the JSON string. Do not wrap it in markdown code blocks like \`\`\`json.
`;

    const generateWithFallback = async () => {
      try {
        const model = genAI.getGenerativeModel({
          model: 'gemini-3.5-flash',
          generationConfig: { responseMimeType: 'application/json' },
        });
        return await model.generateContent(prompt);
      } catch (err: any) {
        console.warn('Quote generator primary model gemini-3.5-flash failed, trying gemini-3.1-flash-lite fallback:', err.message || err);
        const model = genAI.getGenerativeModel({
          model: 'gemini-3.1-flash-lite',
          generationConfig: { responseMimeType: 'application/json' },
        });
        return await model.generateContent(prompt);
      }
    };

    const result = await generateWithFallback();
    const responseText = result.response.text().trim();
    const parsedData = JSON.parse(responseText);

    return res.status(200).json(parsedData);
  } catch (err: any) {
    console.error('Quote generation error:', err);
    // Provide a fallback quote locally if the API fails entirely
    const fallbackQuotes = [
      {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        category: "Innovation"
      },
      {
        text: "The union of human intuition and machine intelligence will shape the next era of discovery.",
        author: "AI Orchestrator",
        category: "AI Insight"
      },
      {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
        category: "Software Craftsmanship"
      }
    ];
    const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    return res.status(200).json(randomFallback);
  }
}
