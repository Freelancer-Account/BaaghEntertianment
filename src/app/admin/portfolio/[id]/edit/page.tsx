import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { updateProject } from '@/lib/adminActions';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function EditProject({ params }: { params: { id: string } }) {
    const session = await auth();
    if (!session || (session.user as any)?.role !== 'ADMIN') redirect('/login');

    const project = await prisma.project.findUnique({
        where: { id: params.id }
    });

    if (!project) redirect('/portfolio');

    const handleAction = async (formData: FormData) => {
        'use server';
        const title = formData.get('title') as string;
        const client = formData.get('client') as string;
        const type = formData.get('type') as string;
        const servicesProvided = formData.get('servicesProvided') as string;
        const image = formData.get('image') as string;
        await updateProject(params.id, { title, client, type, servicesProvided, image });
        redirect('/portfolio');
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', backgroundColor: 'var(--color-charcoal)', borderRadius: '8px' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Edit Project</h1>
                <form action={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Title</label>
                        <input type="text" name="title" defaultValue={project.title} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Client</label>
                        <input type="text" name="client" defaultValue={project.client} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Project Type</label>
                        <input type="text" name="type" defaultValue={project.type} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Services Provided</label>
                        <input type="text" name="servicesProvided" defaultValue={project.servicesProvided} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Image URL</label>
                        <input type="url" name="image" defaultValue={project.image} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <button type="submit" style={{ padding: '1rem', backgroundColor: 'var(--color-gold)', color: 'var(--color-black)', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>Update Project</button>
                    <a href="/portfolio" style={{ display: 'block', textAlign: 'center', color: 'var(--color-gray-text)', textDecoration: 'none', marginTop: '1rem' }}>Cancel</a>
                </form>
            </div>
        </div>
    );
}
