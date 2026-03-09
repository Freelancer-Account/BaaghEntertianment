import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';


export default function NewProject() {
    async function createProject(formData: FormData) {
        'use server';
        const title = formData.get('title') as string;
        const client = formData.get('client') as string;
        const type = formData.get('type') as string;
        const servicesProvided = formData.get('servicesProvided') as string;
        const image = formData.get('image') as string || 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800';

        await prisma.project.create({
            data: { title, client, type, servicesProvided, image }
        });

        redirect('/admin/portfolio');
    }

    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Add Portfolio Project</h1>
            <form action={createProject} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
                <input name="title" placeholder="Project Title" required style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
                <input name="client" placeholder="Client Name (e.g., Netflix)" required style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
                <input name="type" placeholder="Type (e.g., Feature Film, Web Series)" required style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
                <input name="servicesProvided" placeholder="Services Provided (Line Production, Locations...)" required style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
                <input name="image" placeholder="Image URL (Optional)" style={{ padding: '15px', backgroundColor: 'var(--color-charcoal)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Save Project</button>
            </form>
        </div>
    );
}
