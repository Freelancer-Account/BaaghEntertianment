import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { AdminAddButton, AdminItemControls } from '@/components/AdminControls';

export const dynamic = 'force-dynamic';

export default async function Services() {
    const session = await getServerSession(authOptions);
    const isAdmin = (session?.user as any)?.role === 'ADMIN';

    const allServices = await prisma.service.findMany({
        orderBy: { createdAt: 'asc' }
    });

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-charcoal)' }}>
            <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Core Services</h1>
                <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4rem' }}>End-to-End Production Logistics</p>

                <AdminAddButton isAdmin={isAdmin} href="/admin/services/new" label="New Service" />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
                    {allServices.map((srv) => (
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
