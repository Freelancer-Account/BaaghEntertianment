import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { AdminAddButton, AdminItemControls } from '@/components/AdminControls';

export const dynamic = 'force-dynamic';

export default async function Portfolio() {
    const session = await getServerSession(authOptions);
    const isAdmin = (session?.user as any)?.role === 'ADMIN';
    const dbProjects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
    });

    const staticProjects = [
        { id: '1', title: 'The Tiger King', type: 'Feature Film', client: 'Netflix India', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '2', title: 'Mumbai Nights', type: 'Web Series', client: 'Amazon Prime', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '3', title: 'Royal Enfield X', type: 'Commercial', client: 'Ogilvy', image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '4', title: 'Desert Storm', type: 'Feature Film', client: 'YRF', image: 'https://images.unsplash.com/photo-1518134346374-184f9d21cea2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const projects = dbProjects.length > 0 ? dbProjects : staticProjects;

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
            <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Portfolio</h1>
                <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4rem' }}>Excellence On Screen</p>

                <AdminAddButton isAdmin={isAdmin} href="/admin/portfolio/new" label="New Project" />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {projects.map((proj) => (
                        <div key={proj.id} className="portfolio-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <AdminItemControls isAdmin={isAdmin} id={proj.id} type="project" />
                            <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} className="portfolio-img" />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', textAlign: 'left' }}>
                                <p style={{ color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>{proj.type} &bull; {proj.client}</p>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-white)' }}>{proj.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
