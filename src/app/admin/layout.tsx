import type { Metadata } from 'next';
import AuthProvider from '@/components/AuthProvider';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Admin Dashboard | Baagh Entertainment',
    robots: 'noindex, nofollow'
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-black)', display: 'flex', flexDirection: 'column' }}>
                <nav style={{ padding: '1rem 4%', backgroundColor: 'var(--color-charcoal)', borderBottom: '1px solid var(--color-gold)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h1 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', margin: 0 }}>ADMIN DASHBOARD</h1>
                    <div className="admin-nav-links">
                        <Link href="/admin/dashboard" style={{ fontSize: '0.85rem', color: 'var(--color-white)' }}>Overview</Link>
                        <Link href="/admin/portfolio" style={{ fontSize: '0.85rem', color: 'var(--color-white)' }}>Portfolio</Link>
                        <Link href="/admin/blog" style={{ fontSize: '0.85rem', color: 'var(--color-white)' }}>Blog</Link>
                        <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--color-gray-text)' }}>&larr; Back to Site</Link>
                    </div>
                </nav>
                <main style={{ flex: 1, padding: '2rem 4%' }}>
                    {children}
                </main>
            </div>
        </AuthProvider>
    );
}
