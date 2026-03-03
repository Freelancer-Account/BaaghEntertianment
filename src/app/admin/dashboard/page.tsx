import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') redirect('/login');

    const postsCount = await prisma.post.count();
    const projectsCount = await prisma.project.count();
    const contactsCount = await prisma.contactMessage.count({ where: { status: 'NEW' } });

    return (
        <div>
            <h1 style={{ fontSize: '2.5rem', margin: '0 0 2rem' }}>Dashboard Overview</h1>
            <p style={{ color: 'var(--color-gray-text)', marginBottom: '3rem' }}>Welcome back, {session.user?.name || 'Admin'}!</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{ backgroundColor: 'var(--color-charcoal)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)' }}>
                    <h3 style={{ color: 'var(--color-gray-text)', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Total Projects</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{projectsCount}</p>
                </div>
                <div style={{ backgroundColor: 'var(--color-charcoal)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)' }}>
                    <h3 style={{ color: 'var(--color-gray-text)', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Published Posts</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{postsCount}</p>
                </div>
                <div style={{ backgroundColor: 'var(--color-charcoal)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)' }}>
                    <h3 style={{ color: 'var(--color-gray-text)', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem' }}>New Messages</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{contactsCount}</p>
                </div>
            </div>
        </div>
    );
}
