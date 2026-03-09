import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { createService } from '@/lib/adminActions';

export const dynamic = 'force-dynamic';

export default async function NewService() {
    const session = await auth();
    if (!session || (session.user as any)?.role !== 'ADMIN') redirect('/login');

    const handleAction = async (formData: FormData) => {
        'use server';
        const title = formData.get('title') as string;
        const desc = formData.get('desc') as string;
        const details = formData.get('details') as string;
        await createService({ title, desc, details });
        redirect('/services');
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', backgroundColor: 'var(--color-charcoal)', borderRadius: '8px' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Add New Service</h1>
                <form action={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Title</label>
                        <input type="text" name="title" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Short Description</label>
                        <input type="text" name="desc" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-text)' }}>Detailed Description</label>
                        <textarea name="details" required rows={5} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--color-black)', color: 'white' }}></textarea>
                    </div>
                    <button type="submit" style={{ padding: '1rem', backgroundColor: 'var(--color-gold)', color: 'var(--color-black)', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>Create Service</button>
                </form>
            </div>
        </div>
    );
}
