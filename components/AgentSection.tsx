import { useState, useRef, useEffect } from 'react';

interface LogItem {
  agent: string;
  text: string;
  type: 'log' | 'loop' | 'error';
}

const PRESETS = [
  'Google Gemini 2.5 Agent Tooling',
  'Next.js 16 Compiler Performance',
  'Stateful AI Agent Observability Trends',
];

const AgentSection = () => {
  const [topic, setTopic] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [finalReport, setFinalReport] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'console' | 'report'>('console');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const handleRunAgent = async (selectedTopic?: string) => {
    const targetTopic = selectedTopic || topic;
    if (!targetTopic.trim()) return;

    setIsRunning(true);
    setErrorMsg(null);
    setLogs([]);
    setFinalReport(null);
    setActiveTab('console');
    setActiveNode('Planner');

    try {
      const response = await fetch('/api/agent/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: targetTopic }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to agent host.');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error('No readable stream available.');

      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6);
            try {
              const data = JSON.parse(dataStr);

              if (data.type === 'status') {
                setActiveNode(data.node);
                setLogs((prev) => [
                  ...prev,
                  { agent: 'System', text: `>>> Transition to active state: [${data.node}]`, type: 'log' },
                ]);
              } else if (data.type === 'log') {
                setLogs((prev) => [...prev, { agent: data.agent, text: data.text, type: 'log' }]);
              } else if (data.type === 'loop') {
                setLogs((prev) => [
                  ...prev,
                  { agent: 'Orchestrator', text: `Feedback loop triggered: ${data.message}`, type: 'loop' },
                ]);
              } else if (data.type === 'result') {
                setFinalReport(data.content);
                setActiveTab('report');
              } else if (data.type === 'error') {
                setErrorMsg(data.message);
                setLogs((prev) => [...prev, { agent: 'System', text: `ERROR: ${data.message}`, type: 'error' }]);
              }
            } catch (e) {
              console.error('Error parsing stream chunk:', e);
            }
          }
        }
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Stream processing failed.');
    } finally {
      setIsRunning(false);
      setActiveNode(null);
    }
  };

  const getAgentColorClass = (agent: string) => {
    switch (agent) {
      case 'Planner':
        return 'text-orange-400 font-bold';
      case 'Searcher':
        return 'text-sky-400 font-bold';
      case 'Editor':
        return 'text-teal-400 font-bold';
      case 'Critic':
        return 'text-fuchsia-400 font-bold';
      case 'Publisher':
        return 'text-emerald-400 font-bold';
      case 'System':
        return 'text-slate-500 font-semibold italic';
      case 'Orchestrator':
        return 'text-amber-500 font-bold';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <section
      id="agent-sandbox"
      className="relative py-24 bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-4">
            <span>Agentic Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Multi-Agent Trace Visualization
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A stateful agentic sandbox executing live researchers and editor agents. Watch them coordinate search tasks, critique summaries, and run loops to produce refined tech reports in real time.
          </p>
        </div>

        {/* Input area */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-gray-250/20 dark:border-slate-800/80 shadow-md mb-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-250/30 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter a tech topic to research (e.g., Next.js 16 features)..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={isRunning}
            />
            <button
              onClick={() => handleRunAgent()}
              disabled={isRunning || !topic.trim()}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isRunning ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Running Pipeline...
                </>
              ) : 'Run Pipeline'}
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 items-center justify-center sm:justify-start">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Try presets:</span>
            {PRESETS.map((p, i) => (
              <button
                key={i}
                onClick={() => { setTopic(p); handleRunAgent(p); }}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-emerald-50 hover:text-emerald-500 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-400 border border-gray-250/10 transition-colors duration-150"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Workspace layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Panel: SVG Flow Chart Graph */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-250/20 dark:border-slate-800/80 shadow-md flex flex-col justify-center items-center relative overflow-hidden min-h-[350px]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6 w-full text-left">
              Agent State Topology
            </h3>
            
            <svg viewBox="0 0 680 300" className="w-full h-auto max-w-[550px] z-10">
              {/* Definitions for arrow markers */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B" />
                </marker>
                <marker id="arrow-active" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
                </marker>
                <marker id="arrow-loop" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#F59E0B" />
                </marker>
              </defs>

              {/* Connections (Lines) */}
              <path
                d="M 120 100 L 220 100"
                stroke={activeNode === 'Searcher' ? '#10B981' : '#64748B'}
                strokeWidth={activeNode === 'Searcher' ? '3' : '1.5'}
                fill="none"
                markerEnd={activeNode === 'Searcher' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className={activeNode === 'Searcher' ? 'stroke-dash-animation' : ''}
              />
              <path
                d="M 280 100 L 380 100"
                stroke={activeNode === 'Editor' ? '#10B981' : '#64748B'}
                strokeWidth={activeNode === 'Editor' ? '3' : '1.5'}
                fill="none"
                markerEnd={activeNode === 'Editor' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className={activeNode === 'Editor' ? 'stroke-dash-animation' : ''}
              />
              <path
                d="M 410 130 L 410 200"
                stroke={activeNode === 'Critic' ? '#10B981' : '#64748B'}
                strokeWidth={activeNode === 'Critic' ? '3' : '1.5'}
                fill="none"
                markerEnd={activeNode === 'Critic' ? 'url(#arrow-active)' : 'url(#arrow)'}
              />
              
              {/* Loop back Connection (Critic -> Editor) */}
              <path
                d="M 380 230 Q 320 165 380 100"
                stroke={activeNode === 'Editor' && logs.some(l => l.type === 'loop') ? '#F59E0B' : '#64748B'}
                strokeWidth={activeNode === 'Editor' && logs.some(l => l.type === 'loop') ? '3' : '1.5'}
                fill="none"
                strokeDasharray="5,5"
                markerEnd={activeNode === 'Editor' && logs.some(l => l.type === 'loop') ? 'url(#arrow-loop)' : 'url(#arrow)'}
                className={activeNode === 'Editor' && logs.some(l => l.type === 'loop') ? 'stroke-dash-animation' : ''}
              />

              <path
                d="M 440 230 Q 500 165 540 100"
                stroke={activeNode === 'Publisher' ? '#10B981' : '#64748B'}
                strokeWidth={activeNode === 'Publisher' ? '3' : '1.5'}
                fill="none"
                markerEnd={activeNode === 'Publisher' ? 'url(#arrow-active)' : 'url(#arrow)'}
              />
              
              <path
                d="M 600 100 L 640 100"
                stroke={activeNode === 'End' ? '#10B981' : '#64748B'}
                strokeWidth={activeNode === 'End' ? '3' : '1.5'}
                fill="none"
                markerEnd={activeNode === 'End' ? 'url(#arrow-active)' : 'url(#arrow)'}
              />

              {/* Node: Planner */}
              <g transform="translate(90, 100)">
                <circle
                  r="30"
                  fill={activeNode === 'Planner' ? '#10B981' : '#1E293B'}
                  className={`transition-all duration-300 stroke-2 ${activeNode === 'Planner' ? 'stroke-emerald-300 shadow-[0_0_15px_#10B981]' : 'stroke-slate-700'}`}
                />
                <text textAnchor="middle" dy="4" fill="white" fontSize="10" fontWeight="bold">Planner</text>
              </g>

              {/* Node: Searcher */}
              <g transform="translate(250, 100)">
                <circle
                  r="30"
                  fill={activeNode === 'Searcher' ? '#10B981' : '#1E293B'}
                  className={`transition-all duration-300 stroke-2 ${activeNode === 'Searcher' ? 'stroke-emerald-300 shadow-[0_0_15px_#10B981]' : 'stroke-slate-700'}`}
                />
                <text textAnchor="middle" dy="4" fill="white" fontSize="10" fontWeight="bold">Searcher</text>
              </g>

              {/* Node: Editor */}
              <g transform="translate(410, 100)">
                <circle
                  r="30"
                  fill={activeNode === 'Editor' ? '#10B981' : '#1E293B'}
                  className={`transition-all duration-300 stroke-2 ${activeNode === 'Editor' ? 'stroke-emerald-300 shadow-[0_0_15px_#10B981]' : 'stroke-slate-700'}`}
                />
                <text textAnchor="middle" dy="4" fill="white" fontSize="10" fontWeight="bold">Editor</text>
              </g>

              {/* Node: Critic */}
              <g transform="translate(410, 230)">
                <circle
                  r="30"
                  fill={activeNode === 'Critic' ? '#10B981' : '#1E293B'}
                  className={`transition-all duration-300 stroke-2 ${activeNode === 'Critic' ? 'stroke-emerald-300 shadow-[0_0_15px_#10B981]' : 'stroke-slate-700'}`}
                />
                <text textAnchor="middle" dy="4" fill="white" fontSize="10" fontWeight="bold">Critic</text>
              </g>

              {/* Node: Publisher */}
              <g transform="translate(570, 100)">
                <circle
                  r="30"
                  fill={activeNode === 'Publisher' ? '#10B981' : '#1E293B'}
                  className={`transition-all duration-300 stroke-2 ${activeNode === 'Publisher' ? 'stroke-emerald-300 shadow-[0_0_15px_#10B981]' : 'stroke-slate-700'}`}
                />
                <text textAnchor="middle" dy="4" fill="white" fontSize="9" fontWeight="bold">Publisher</text>
              </g>
            </svg>
            
            {/* Visual indicators */}
            <div className="absolute bottom-4 left-6 flex items-center gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <span>Active Exec</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full border border-dashed animate-pulse" />
                <span>Critique Loop</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Console Log Terminal & Output Report */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-900 shadow-2xl flex flex-col min-h-[400px] max-h-[500px]">
            
            {/* Tabs Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 rounded-t-2xl border-b border-slate-950">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('console')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all duration-200 ${activeTab === 'console' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  CONSOLE LOGS
                </button>
                <button
                  onClick={() => finalReport && setActiveTab('report')}
                  disabled={!finalReport}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all duration-200 ${!finalReport ? 'opacity-40 cursor-not-allowed text-slate-500' : activeTab === 'report' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  COMPILED REPORT
                </button>
              </div>
              {/* Console buttons */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 overflow-y-auto font-mono text-xs leading-relaxed text-slate-350">
              {activeTab === 'console' ? (
                <div className="space-y-3">
                  {logs.length === 0 && !isRunning && (
                    <p className="text-slate-500 italic">Enter a topic and click "Run Pipeline" to watch the multi-agent system execution logs here...</p>
                  )}
                  {logs.map((log, index) => (
                    <div key={index} className={`whitespace-pre-wrap ${log.type === 'loop' ? 'bg-amber-950/20 border-l-2 border-amber-500 p-2.5 rounded-r' : log.type === 'error' ? 'bg-red-950/20 border-l-2 border-red-500 p-2.5 rounded-r' : ''}`}>
                      <span className={getAgentColorClass(log.agent)}>[{log.agent.toUpperCase()}]</span>{' '}
                      <span className="text-slate-300">{log.text}</span>
                    </div>
                  ))}
                  {isRunning && activeNode && (
                    <div className="flex items-center gap-2 text-emerald-400 italic font-semibold animate-pulse">
                      <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
                      {activeNode === 'End' ? 'Finalizing...' : `Agent [${activeNode}] is thinking...`}
                    </div>
                  )}
                  <div ref={consoleEndRef} />
                </div>
              ) : (
                <div
                  className="prose dark:prose-invert max-w-none text-slate-200"
                  dangerouslySetInnerHTML={{ __html: finalReport || '' }}
                />
              )}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
