import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function GeneralDashboard() {
    const session = await auth();

    if (!session) {
        redirect('/login');
    }

    // Role-based routing
    if ((session.user as any)?.role === 'ADMIN') {
        redirect('/admin/dashboard');
    }

    // Default fallback for regular users
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
            <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome, {session.user?.name}</h1>
                <p style={{ color: 'var(--color-gray-text)' }}>Your applicant/client dashboard is currently under construction.</p>
            </section>
        </div>
    );
}
