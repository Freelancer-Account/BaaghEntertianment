import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminPortfolio() {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Portfolio Management</h1>
                <Link href="/admin/portfolio/new"><button className="btn-primary">Add Project</button></Link>
            </div>

            <div style={{ backgroundColor: 'var(--color-charcoal)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'var(--color-gold)' }}>
                            <th style={{ padding: '15px 20px' }}>Project Name</th>
                            <th style={{ padding: '15px 20px' }}>Client</th>
                            <th style={{ padding: '15px 20px' }}>Type</th>
                            <th style={{ padding: '15px 20px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length === 0 ? (
                            <tr><td colSpan={4} style={{ padding: '20px', textAlign: 'center', color: 'var(--color-gray-text)' }}>No projects found.</td></tr>
                        ) : projects.map((proj: { id: string; title: string; client: string; type: string }) => (
                            <tr key={proj.id} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px 20px', fontWeight: '500' }}>{proj.title}</td>
                                <td style={{ padding: '15px 20px', color: 'var(--color-gray-text)' }}>{proj.client}</td>
                                <td style={{ padding: '15px 20px', color: 'var(--color-gray-text)' }}>{proj.type}</td>
                                <td style={{ padding: '15px 20px' }}>
                                    <button style={{ backgroundColor: 'transparent', color: 'var(--color-gold)', border: 'none', marginRight: '10px' }}>Edit</button>
                                    <button style={{ backgroundColor: 'transparent', color: '#ef4444', border: 'none' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
