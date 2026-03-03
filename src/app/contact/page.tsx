'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
    const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
            <section style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>

                    <div>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
                        <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '3rem' }}>Let's Discuss Your Next Shoot</p>
                        <p style={{ color: 'var(--color-gray-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Whether you need full line production or specific location permits, our team is ready to assist.
                            Fill out the form and a production coordinator will contact you within 24 hours.
                        </p>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ color: 'var(--color-white)', marginBottom: '0.5rem' }}>Headquarters</h3>
                            <p style={{ color: 'var(--color-gray-text)' }}>104, Cinematic Tower, Andheri West<br />Mumbai, Maharashtra 400053<br />India</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--color-white)', marginBottom: '0.5rem' }}>Direct Contact</h3>
                            <p style={{ color: 'var(--color-gray-text)' }}>Email: contact@baaghentertainment.com<br />Phone: +91 98765 43210</p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-charcoal)', padding: '3rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '2rem' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--color-gray-text)' }}>Our production coordinator will contact you shortly.</p>
                                <button onClick={() => setStatus('')} className="btn-secondary" style={{ marginTop: '2rem' }}>Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Your Name or Production Company" style={{ width: '100%', padding: '15px', backgroundColor: 'var(--color-black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '4px' }} />
                                <input required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', backgroundColor: 'var(--color-black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '4px' }} />
                                <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} style={{ width: '100%', padding: '15px', backgroundColor: 'var(--color-black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '4px', appearance: 'none' }}>
                                    <option value="">Select Service Needed</option>
                                    <option value="Line Production">Line Production</option>
                                    <option value="Locations">Locations & Permits</option>
                                    <option value="Casting">Casting Coordination</option>
                                    <option value="Equipment">Equipment & Logistics</option>
                                </select>
                                <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={5} style={{ width: '100%', padding: '15px', backgroundColor: 'var(--color-black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '4px', resize: 'vertical' }}></textarea>
                                <button disabled={status === 'loading'} type="submit" className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', opacity: status === 'loading' ? 0.7 : 1 }}>
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>Failed to send. Please try again.</p>}
                            </form>
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
}
