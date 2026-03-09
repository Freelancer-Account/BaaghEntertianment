import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { AdminAddButton, AdminItemControls } from '@/components/AdminControls';

export const dynamic = 'force-dynamic';

export default async function Blog() {
    const session = await getServerSession(authOptions);
    const isAdmin = (session?.user as any)?.role === 'ADMIN';
    const dbPosts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        select: { id: true, title: true, excerpt: true, createdAt: true }
    });

    const staticPosts = [
        { id: '1', title: 'How We Secured the Gateway of India for a 3-Day Shoot', date: 'Oct 15, 2026', excerpt: 'A behind-the-scenes look at the logistical challenges of shooting at one of India\'s most iconic monuments.' },
        { id: '2', title: 'The Rise of Tier-2 Cities as Premium Shoot Locations', date: 'Sep 28, 2026', excerpt: 'Why major OTT platforms are shifting focus to cities like Bhopal, Indore, and Lucknow for fresh visuals.' },
        { id: '3', title: 'Managing a 500+ Junior Artist Crowd During a Pandemic', date: 'Sep 10, 2026', excerpt: 'Our protocols for safely managing massive crowds without compromising on the director\'s vision.' },
    ];

    // Map dbPosts to match staticPosts structure for hybrid approach
    const formattedDbPosts = dbPosts.map(post => ({
        id: post.id,
        title: post.title,
        date: post.createdAt.toLocaleDateString(),
        excerpt: post.excerpt
    }));

    const posts = formattedDbPosts.length > 0 ? formattedDbPosts : staticPosts;

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-charcoal)' }}>
            <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Production Updates</h1>
                <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4rem' }}>Insights from the set</p>

                <AdminAddButton isAdmin={isAdmin} href="/admin/blog/new" label="New Post" />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
                    {posts.map((post) => (
                        <div key={post.id} style={{ backgroundColor: 'var(--color-black)', padding: '2.5rem', borderLeft: '4px solid var(--color-gold)', borderRadius: '4px', position: 'relative' }}>
                            <AdminItemControls isAdmin={isAdmin} id={post.id} type="post" />
                            <p style={{ color: 'var(--color-gray-text)', fontSize: '0.9rem', marginBottom: '1rem' }}>{post.date}</p>
                            <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-white)' }}>{post.title}</h2>
                            <p style={{ color: 'var(--color-gray-text)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                            <Link href="#" style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px' }}>READ MORE &rarr;</Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
