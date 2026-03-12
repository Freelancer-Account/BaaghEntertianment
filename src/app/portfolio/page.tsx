import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { AdminAddButton, AdminItemControls } from '@/components/AdminControls';

export const dynamic = 'force-dynamic';

export default async function Portfolio() {
    const session = await auth();
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
        <div className="page-container" style={{ backgroundColor: 'var(--color-black)' }}>
            <section className="page-section">
                <h1 className="page-title">Our Portfolio</h1>
                <p className="page-subtitle" style={{ marginBottom: '4rem' }}>Excellence On Screen</p>

                <AdminAddButton isAdmin={isAdmin} href="/admin/portfolio/new" label="New Project" />

                <div className="content-grid">
                    {projects.map((proj: any) => (
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
