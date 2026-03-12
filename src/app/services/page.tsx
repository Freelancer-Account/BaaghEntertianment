import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { AdminAddButton, AdminItemControls } from '@/components/AdminControls';

export const dynamic = 'force-dynamic';

export default async function Services() {
    const session = await auth();
    const isAdmin = (session?.user as any)?.role === 'ADMIN';

    let allServices: any[] = [];
    try {
        allServices = await prisma.service.findMany({
            orderBy: { createdAt: 'asc' }
        });
    } catch (error) {
        console.error('Failed to fetch services from database:', error);
    }

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
