import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminBlog() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Blog Management</h1>
                <Link href="/admin/blog/new"><button className="btn-primary">Write New Post</button></Link>
            </div>

            <div style={{ backgroundColor: 'var(--color-charcoal)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'var(--color-gold)' }}>
                            <th style={{ padding: '15px 20px' }}>Title</th>
                            <th style={{ padding: '15px 20px' }}>Status</th>
                            <th style={{ padding: '15px 20px' }}>Date</th>
                            <th style={{ padding: '15px 20px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length === 0 ? (
                            <tr><td colSpan={4} style={{ padding: '20px', textAlign: 'center', color: 'var(--color-gray-text)' }}>No posts found.</td></tr>
                        ) : posts.map((post: { id: string; title: string; published: boolean; createdAt: Date }) => (
                            <tr key={post.id} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px 20px', fontWeight: '500' }}>{post.title}</td>
                                <td style={{ padding: '15px 20px' }}>
                                    <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', backgroundColor: post.published ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 255, 0, 0.1)', color: post.published ? '#4ade80' : '#facc15' }}>
                                        {post.published ? 'Published' : 'Draft'}
                                    </span>
                                </td>
                                <td style={{ padding: '15px 20px', color: 'var(--color-gray-text)' }}>{post.createdAt.toLocaleDateString()}</td>
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
