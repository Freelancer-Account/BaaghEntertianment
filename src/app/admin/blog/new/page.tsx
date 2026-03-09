import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';


export default function NewPost() {
    async function createPost(formData: FormData) {
        'use server';
        const title = formData.get('title') as string;
        const excerpt = formData.get('excerpt') as string;
        const content = formData.get('content') as string;

        await prisma.post.create({
            data: {
                title,
                slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
                excerpt,
                content,
                published: true,
                author: {
                    connect: { email: 'admin@baaghentertainment.com' } // Fallback to hardcoded admin for demo
                }
            }
        });

        redirect('/admin/blog');
    }

    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Create New Blog Post</h1>
            <form action={createPost} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
                <input name="title" placeholder="Post Title" required style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', fontSize: '1.1rem' }} />
                <textarea name="excerpt" placeholder="Short Excerpt" required rows={3} style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', fontFamily: 'inherit' }} />
                <textarea name="content" placeholder="Full Content" required rows={10} style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', fontFamily: 'inherit' }} />
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Publish Post</button>
            </form>
        </div>
    );
}
