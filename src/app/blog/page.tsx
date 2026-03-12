import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { AdminAddButton, AdminItemControls } from '@/components/AdminControls';

export const dynamic = 'force-dynamic';

export default async function Blog() {
    const session = await auth();
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
    const formattedDbPosts = dbPosts.map((post: any) => ({
        id: post.id,
        title: post.title,
        date: post.createdAt.toLocaleDateString(),
        excerpt: post.excerpt
    }));

    const posts = formattedDbPosts.length > 0 ? formattedDbPosts : staticPosts;

    return (
        <div className="page-container" style={{ backgroundColor: 'var(--color-charcoal)' }}>
            <section className="page-section">
                <h1 className="page-title">Production Updates</h1>
                <p className="page-subtitle" style={{ marginBottom: '4rem' }}>Insights from the set</p>

                <AdminAddButton isAdmin={isAdmin} href="/admin/blog/new" label="New Post" />

                <div className="content-grid">
                    {posts.map((post: any) => (
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
