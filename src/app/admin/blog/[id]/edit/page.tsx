import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { updatePost } from '@/lib/adminActions';

export const dynamic = 'force-dynamic';

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session || (session.user as any)?.role !== 'ADMIN') redirect('/login');

    const { id } = await params;

    const post = await prisma.post.findUnique({
        where: { id }
    });

    if (!post) redirect('/blog');

    const handleAction = async (formData: FormData) => {
        'use server';
        const title = formData.get('title') as string;
        const excerpt = formData.get('excerpt') as string;
        const content = formData.get('content') as string;
        const category = formData.get('category') as string;
        await updatePost(id, { title, excerpt, content, category });
        redirect('/blog');
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: 'var(--color-charcoal)', borderRadius: '8px' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Edit Post</h1>
                <form action={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Title</label>
                        <input type="text" name="title" defaultValue={post.title} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Category</label>
                        <input type="text" name="category" defaultValue={post.category} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Excerpt</label>
                        <textarea name="excerpt" defaultValue={post.excerpt} required rows={3} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }}></textarea>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Content</label>
                        <textarea name="content" defaultValue={post.content} required rows={10} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white', fontFamily: 'monospace' }}></textarea>
                    </div>
                    <button type="submit" style={{ padding: '1rem', backgroundColor: 'var(--color-gold)', color: 'var(--color-black)', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>Update Post</button>
                    <a href="/blog" style={{ display: 'block', textAlign: 'center', color: 'var(--color-gray-text)', textDecoration: 'none', marginTop: '1rem' }}>Cancel</a>
                </form>
            </div>
        </div>
    );
}
