'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false
            });

            if (res?.error) {
                setError('Invalid credentials');
                return;
            }

            // We redirect to a central authorization check route or dashboard based on role
            router.push('/dashboard');
            router.refresh();
        } catch (error) {
            setError('Something went wrong');
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-black)', paddingTop: '80px' }}>
            <div style={{ backgroundColor: 'var(--color-charcoal)', padding: '3rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Welcome Back</h2>
                {error && <p style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '12px', backgroundColor: 'var(--color-black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '4px' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '12px', backgroundColor: 'var(--color-black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '4px' }}
                        />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Sign In</button>
                </form>
            </div>
        </div>
    );
}
