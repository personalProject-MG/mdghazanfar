import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PROFILE_CONTEXT } from '../ai/chat';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { jobDescription } = req.body;
  if (!jobDescription || typeof jobDescription !== 'string') {
    return res.status(400).json({ error: 'Job description is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    return res.status(503).json({
      error: 'Gemini API is not configured.',
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Robust content generator with fallback for JSON output
    const generateWithFallback = async (prompt: string) => {
      try {
        const model = genAI.getGenerativeModel({
          model: 'gemini-3.5-flash',
          generationConfig: { responseMimeType: 'application/json' },
        });
        return await model.generateContent(prompt);
      } catch (err: any) {
        console.warn('Primary model gemini-3.5-flash failed, trying gemini-3.1-flash-lite fallback:', err.message || err);
        const model = genAI.getGenerativeModel({
          model: 'gemini-3.1-flash-lite',
          generationConfig: { responseMimeType: 'application/json' },
        });
        return await model.generateContent(prompt);
      }
    };

    const prompt = `
You are an expert technical recruiter and resume writer.
Here is the candidate's master resume information:
=== MASTER RESUME ===
${PROFILE_CONTEXT}
=== END OF MASTER RESUME ===

Here is the Job Description (JD) the candidate is applying for:
=== JOB DESCRIPTION ===
${jobDescription}
=== END OF JOB DESCRIPTION ===

Please perform a precise alignment analysis. Tailor the resume content so it perfectly matches the JD while remaining 100% truthful to the candidate's actual experience. Do not invent any new jobs, roles, or certifications.

Generate a structured JSON response containing:
1. "tailoredSummary": A professional summary (3-4 sentences) optimized for the job description. Highlight the candidate's direct matches in Agentic AI, Gen AI, GCP, or full stack engineering.
2. "highlightedSkills": An array of the top 8 skills from the candidate's skills list that are most relevant to the job.
3. "matchedProjects": An array of up to 4 projects from the candidate's resume that are relevant. For each project, provide:
   - "title": Exact title of the project.
   - "role": Role of the candidate.
   - "tech": A string of key technologies used (focusing on those asked in the JD).
   - "highlights": Array of 2-3 tailored bullet points highlighting accomplishments, scale, metrics, or technologies aligned with the JD.
4. "matchedCertifications": An array of up to 3 relevant certifications from the candidate's list.

Return ONLY a valid JSON object matching this structure.
`;

    const result = await generateWithFallback(prompt);
    const responseText = result.response.text();
    const parsedData = JSON.parse(responseText);

    return res.status(200).json(parsedData);
  } catch (err: any) {
    console.error('Tailoring analysis error:', err);
    return res.status(500).json({ error: 'Failed to analyze job description. Please try again.' });
  }
}
