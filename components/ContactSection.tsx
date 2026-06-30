import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('Submitting...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await res.json();
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorData = await res.json();
        setStatus(errorData.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section
      id='contact'
      className='relative py-24 bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden text-center'
    >
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0'></div>

      {/* Background Decorative Blobs */}
      <div className='absolute bottom-0 left-0 right-0 mx-auto w-[300px] h-[200px] md:w-[500px] md:h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none z-0 animate-glow-slow'></div>
      <div className='absolute top-12 right-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none z-0 animate-float-slow'></div>

      <div className='container mx-auto px-6 max-w-2xl relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-xl mx-auto mb-12'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/30 w-fit mb-4'>
            <span>Contact</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-black tracking-tight'>
            Get in Touch
          </h2>
          <p className='mt-3 text-gray-650 dark:text-gray-400 text-sm sm:text-base'>
            Have an interesting project or role? Let&apos;s build something together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='mt-8 space-y-4 max-w-lg mx-auto text-left bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-150/15 dark:border-slate-800/80 shadow-md'>
          <div>
            <label className='block text-xs font-bold uppercase tracking-wider text-gray-550 dark:text-gray-450 mb-1.5'>Your Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='w-full p-3 rounded-xl border border-gray-200 dark:border-slate-850 bg-gray-50 dark:bg-slate-950/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 focus:scale-[1.01] transition-all duration-300 text-sm'
              required
            />
          </div>

          <div>
            <label className='block text-xs font-bold uppercase tracking-wider text-gray-550 dark:text-gray-450 mb-1.5'>Your Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email address'
              className='w-full p-3 rounded-xl border border-gray-200 dark:border-slate-850 bg-gray-50 dark:bg-slate-950/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 focus:scale-[1.01] transition-all duration-300 text-sm'
              required
            />
          </div>

          <div>
            <label className='block text-xs font-bold uppercase tracking-wider text-gray-550 dark:text-gray-450 mb-1.5'>Your Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='How can I help you?'
              rows={4}
              className='w-full p-3 rounded-xl border border-gray-200 dark:border-slate-850 bg-gray-50 dark:bg-slate-950/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 focus:scale-[1.01] transition-all duration-300 text-sm'
              required
            ></textarea>
          </div>

          <button
            type='submit'
            disabled={status === 'Submitting...'}
            className='w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-450 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-600/30 transition-all duration-300 transform active:scale-95 btn-shine-effect'
          >
            {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <div className={`mt-6 max-w-lg mx-auto p-4 rounded-xl text-sm font-semibold border ${
            status.includes('successfully') || status.includes('backup')
              ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30'
              : 'bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-400 border-red-100 dark:border-red-900/30'
          }`}>
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
