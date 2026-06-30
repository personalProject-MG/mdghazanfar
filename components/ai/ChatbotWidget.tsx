import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  'What are your top skills?',
  'Tell me about your projects',
  'What certifications do you hold?',
  'What is your work experience?',
];

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! 👋 I'm Ghazanfar's AI assistant. Ask me anything about his skills, projects, certifications, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setShowSuggestions(false);
    const userMsg: Message = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || data.error || 'Sorry, something went wrong.',
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className='fixed bottom-24 right-5 sm:right-6 z-50 w-[90vw] sm:w-[380px] flex flex-col animate-fadeIn'>
          <div className='bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-slate-700/50 flex flex-col overflow-hidden'
               style={{ maxHeight: '70vh' }}>
            {/* Header */}
            <div className='bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3.5 flex items-center justify-between flex-shrink-0'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center'>
                  <FaRobot className='text-white text-sm' />
                </div>
                <div>
                  <p className='text-white font-bold text-sm'>Ghazanfar&apos;s AI Assistant</p>
                  <div className='flex items-center gap-1.5'>
                    <span className='w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse'></span>
                    <p className='text-white/80 text-xs'>Powered by Gemini</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors'
                aria-label='Close chat'
              >
                <FaTimes className='w-4 h-4' />
              </button>
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto p-4 space-y-3 min-h-0'>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className='w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5'>
                      <FaRobot className='text-white text-xs' />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-br-md whitespace-pre-wrap'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-bl-md'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      msg.content
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className='mb-1 last:mb-0'>{children}</p>,
                          strong: ({ children }) => <strong className='font-bold text-gray-900 dark:text-white'>{children}</strong>,
                          ul: ({ children }) => <ul className='mt-1 mb-1 space-y-1 pl-3'>{children}</ul>,
                          ol: ({ children }) => <ol className='mt-1 mb-1 space-y-1 pl-4 list-decimal'>{children}</ol>,
                          li: ({ children }) => (
                            <li className='flex items-start gap-1.5'>
                              <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0' />
                              <span>{children}</span>
                            </li>
                          ),
                          code: ({ children }) => <code className='bg-gray-200 dark:bg-slate-700 px-1 py-0.5 rounded text-xs font-mono'>{children}</code>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className='flex justify-start'>
                  <div className='w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5'>
                    <FaRobot className='text-white text-xs' />
                  </div>
                  <div className='bg-gray-100 dark:bg-slate-800 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5'>
                    <span className='w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></span>
                    <span className='w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></span>
                    <span className='w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {showSuggestions && (
              <div className='px-4 pb-2 flex gap-2 flex-wrap flex-shrink-0'>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className='text-xs px-2.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/50 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 transition-colors duration-150'
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className='p-3 border-t border-gray-100 dark:border-slate-800 flex gap-2 flex-shrink-0'
            >
              <input
                ref={inputRef}
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask about skills, projects...'
                disabled={isLoading}
                className='flex-1 text-sm px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all disabled:opacity-50'
              />
              <button
                type='submit'
                disabled={isLoading || !input.trim()}
                className='p-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center'
                aria-label='Send message'
              >
                {isLoading ? (
                  <FaSpinner className='w-4 h-4 animate-spin' />
                ) : (
                  <FaPaperPlane className='w-4 h-4' />
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Bubble Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close AI chat' : 'Open AI chat'}
        className='fixed bottom-5 right-5 sm:right-6 z-50 w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95'
      >
        {/* Pulse ring */}
        {!isOpen && (
          <span className='absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping'></span>
        )}
        <span className='relative'>
          {isOpen ? (
            <FaTimes className='w-5 h-5' />
          ) : (
            <FaRobot className='w-6 h-6' />
          )}
        </span>
      </button>
    </>
  );
};

export default ChatbotWidget;
