const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  console.log('Testing gemini-3.1-flash-lite JSON mode...');
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-3.1-flash-lite',
      generationConfig: { responseMimeType: 'application/json' }
    });
    const result = await model.generateContent('Generate a JSON object with a single key "status" and value "ok".');
    console.log('Response:', result.response.text().trim());
  } catch (err) {
    console.error('Failed:', err.message || err);
  }
}

main();
