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
        const data = await res.json();
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
      className='py-20 bg-gray-200 dark:bg-gray-800 text-center'
    >
      <h2 className='text-4xl font-bold'>Get in Touch</h2>
      <form onSubmit={handleSubmit} className='mt-8 max-w-md mx-auto'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Your Name'
          className='w-full mb-4 p-2 rounded'
          required
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Your Email'
          className='w-full mb-4 p-2 rounded'
          required
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Your Message'
          className='w-full mb-4 p-2 rounded'
          required
        ></textarea>
        <button
          type='submit'
          className='bg-green-500 text-white px-6 py-2 rounded-lg'
        >
          Send Message
        </button>
      </form>
      {status && <p className='mt-4'>{status}</p>}
    </section>
  );
};

export default ContactSection;
