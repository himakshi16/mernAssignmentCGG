import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://mernassignmentcgg-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('Contact saved successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await res.json();
        setStatus(`Error: ${data.error || 'Something went wrong'}`);
      }
    } catch (err) {
      setStatus('Error: Could not send request');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required rows={4} style={{ width: '100%', marginBottom: 8 }} />
        <button type="submit" style={{ width: '100%' }}>Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}
