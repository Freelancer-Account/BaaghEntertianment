import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { AdminAddButton, AdminItemControls } from '@/components/AdminControls';

export const dynamic = 'force-dynamic';

export default async function Services() {
    const session = await auth();
    const isAdmin = (session?.user as any)?.role === 'ADMIN';

    let dbServices: any[] = [];
    try {
        dbServices = await prisma.service.findMany({
            orderBy: { createdAt: 'asc' }
        });
    } catch (error) {
        console.error('Failed to fetch services from database:', error);
    }

    const staticServices = [
        {
            id: '1',
            title: 'Line Production',
            desc: 'Complete end-to-end execution',
            details: 'We handle everything from budgeting, scheduling, and crew hiring to equipment sourcing and daily operations. Our experienced line producers ensure your project runs on time and within budget, no matter the scale.'
        },
        {
            id: '2',
            title: 'Locations & Permissions',
            desc: 'Access to exclusive locations across India',
            details: 'Our extensive database and strong government relationships allow us to secure permits for even the most restricted locations. We handle all paperwork, local liaising, and logistical planning.'
        },
        {
            id: '3',
            title: 'Casting & Talent Management',
            desc: 'Finding the perfect face for your vision',
            details: 'From lead actors to thousands of junior artists, our casting directors have a keen eye for talent. We manage auditions, contracts, and on-set coordination for all performers.'
        },
        {
            id: '4',
            title: 'Equipment & Technical Logistics',
            desc: 'State-of-the-art gear delivered on set',
            details: 'We partner with premium rental houses to provide the latest cameras, lighting, and grip equipment. Our technical coordinators ensure all gear is tested and maintained properly.'
        }
    ];

    const allServices = [...staticServices, ...dbServices];

    return (
        <div className="page-container" style={{ backgroundColor: 'var(--color-charcoal)' }}>
            <section className="page-section">
                <h1 className="page-title">Core Services</h1>
                <p className="page-subtitle" style={{ marginBottom: '4rem' }}>End-to-End Production Logistics</p>

                <AdminAddButton isAdmin={isAdmin} href="/admin/services/new" label="New Service" />

                <div className="content-grid-lg">
                    {allServices.map((srv: any) => (
                        <div key={srv.id} style={{ backgroundColor: 'var(--color-black)', padding: '3rem 2rem', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '6px', position: 'relative' }}>
                            <AdminItemControls isAdmin={isAdmin} id={srv.id} type="service" />
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-white)', marginBottom: '1rem' }}>{srv.title}</h2>
                            <p style={{ color: 'var(--color-gold)', fontWeight: '500', marginBottom: '1.5rem' }}>{srv.desc}</p>
                            <p style={{ color: 'var(--color-gray-text)', lineHeight: '1.6' }}>{srv.details}</p>
                            <div style={{ marginTop: '2rem' }}>
                                <Link href="/contact"><button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Book Service</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
