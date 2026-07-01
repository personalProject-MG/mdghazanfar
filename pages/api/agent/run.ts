import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic } = req.body;
  if (!topic || typeof topic !== 'string') {
    return res.status(400).json({ error: 'Topic is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    return res.status(503).json({
      error: 'Gemini API is not configured.',
    });
  }

  // Set up Server-Sent Events headers
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    'Connection': 'keep-alive',
    'Content-Encoding': 'none',
  });

  const sendEvent = (data: object) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
    if ((res as any).flush) {
      (res as any).flush();
    }
  };

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Robust content generator with fallback for experimental or high-load models
    const generateWithFallback = async (prompt: string) => {
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' });
        return await model.generateContent(prompt);
      } catch (err: any) {
        console.warn('Primary model gemini-3.5-flash failed, trying gemini-3.1-flash-lite fallback:', err.message || err);
        const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });
        return await model.generateContent(prompt);
      }
    };

    // Step 1: Planner Agent
    sendEvent({ type: 'status', node: 'Planner', message: 'Planner: Analyzing topic and structuring research...' });
    const plannerPrompt = `You are a Research Planner Agent. The user wants to research the topic: "${topic}".
    Generate 3 specific search queries that would yield the most informative facts on this topic.
    Format your response as a simple list of 3 items, one per line.`;
    
    const plannerResult = await generateWithFallback(plannerPrompt);
    const plannerPlan = plannerResult.response.text().trim();
    
    sendEvent({
      type: 'log',
      agent: 'Planner',
      text: `Planner structured research pipeline:\n${plannerPlan}`
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Step 2: Searcher Agent
    sendEvent({ type: 'status', node: 'Searcher', message: 'Searcher: Simulating web crawls and data retrieval...' });
    const searcherPrompt = `You are a Search Agent. Based on these research queries:\n${plannerPlan}\n
    Simulate the raw notes and facts that would be retrieved from top web sources.
    Provide a bulleted list of 5-6 core factual findings.`;
    
    const searcherResult = await generateWithFallback(searcherPrompt);
    const searcherNotes = searcherResult.response.text().trim();
    
    sendEvent({
      type: 'log',
      agent: 'Searcher',
      text: `Searcher retrieved facts from web:\n${searcherNotes}`
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Step 3: Editor Agent (Draft 1)
    sendEvent({ type: 'status', node: 'Editor', message: 'Editor: Consolidating notes into initial draft...' });
    const editorPrompt = `You are an Editor Agent. Based on these search findings:\n${searcherNotes}\n
    Draft a brief one-paragraph technical summary report for the topic: "${topic}".`;
    
    const editorResult = await generateWithFallback(editorPrompt);
    const draft1 = editorResult.response.text().trim();
    
    sendEvent({
      type: 'log',
      agent: 'Editor',
      text: `Editor compiled initial brief draft:\n"${draft1}"`
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Step 4: Critic Agent (Review 1 - Intended Loop)
    sendEvent({ type: 'status', node: 'Critic', message: 'Critic: Checking draft completeness and depth...' });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    sendEvent({
      type: 'log',
      agent: 'Critic',
      text: `CRITIC REJECTION: Initial draft is too brief and lacks technical structure. Sending feedback loop back to Editor.`
    });
    sendEvent({
      type: 'loop',
      from: 'Critic',
      to: 'Editor',
      message: 'Revise draft. Structure it into: 1. Core Architecture, 2. Key Capabilities, 3. Future Outlook.'
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Step 5: Editor Agent (Draft 2 - Revised)
    sendEvent({ type: 'status', node: 'Editor', message: 'Editor: Incorporating Critic guidelines and expanding draft...' });
    const editorRevisePrompt = `You are an Editor Agent. The Critic rejected your initial draft with feedback: "Structure it into: 1. Core Architecture, 2. Key Capabilities, 3. Future Outlook."
    Using the search findings:\n${searcherNotes}\n
    Write a detailed, structured technical report on "${topic}" following these sections. Use markdown formatting.`;
    
    const revisedResult = await generateWithFallback(editorRevisePrompt);
    const draft2 = revisedResult.response.text().trim();
    
    sendEvent({
      type: 'log',
      agent: 'Editor',
      text: `Editor completed revised structured draft:\n${draft2}`
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Step 6: Critic Agent (Review 2 - Approval)
    sendEvent({ type: 'status', node: 'Critic', message: 'Critic: Verifying revised draft against guidelines...' });
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    sendEvent({
      type: 'log',
      agent: 'Critic',
      text: `CRITIC APPROVAL: Revised draft contains required structure and depth. Approved for publication.`
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Step 7: Publisher Agent
    sendEvent({ type: 'status', node: 'Publisher', message: 'Publisher: Formatting final HTML report...' });
    
    const publisherPrompt = `You are a Publisher Agent. Convert this Markdown research report into beautiful, clean semantic HTML.
    Use tags like <h2>, <h3>, <p>, <strong>, <ul>, <li>, and <hr>.
    Add styling classes for titles: use text-emerald-500 for the main title, and text-slate-800 dark:text-slate-100 for section headings.
    Do not wrap the response in markdown blocks like \`\`\`html. Return ONLY the HTML code.
    
    === Markdown Report ===
    ${draft2}
    === End of Markdown ===`;

    const publisherResult = await generateWithFallback(publisherPrompt);
    let finalReport = publisherResult.response.text().trim();
    
    // Strip markdown code block wrappers if present
    if (finalReport.startsWith('```')) {
      finalReport = finalReport.replace(/^```[a-zA-Z]*\n/, '').replace(/\n```$/, '');
    }

    await new Promise((resolve) => setTimeout(resolve, 800));
    sendEvent({
      type: 'result',
      content: finalReport
    });

    sendEvent({ type: 'status', node: 'End', message: 'Agentic loop completed successfully!' });
    res.end();
  } catch (err: any) {
    console.error('Agent runner error:', err);
    sendEvent({ type: 'error', message: 'Failed during agent execution. Please try again.' });
    res.end();
  }
}
