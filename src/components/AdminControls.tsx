'use client';

import { useRouter } from 'next/navigation';
import { deleteService, deleteProject, deletePost } from '@/lib/adminActions';

export function AdminAddButton({ isAdmin, href, label }: { isAdmin: boolean; href: string; label: string }) {
    if (!isAdmin) return null;

    return (
        <div style={{ textAlign: 'right', marginBottom: '2rem', maxWidth: '1200px', margin: '0 auto 2rem auto' }}>
            <a href={href} style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-black)',
                padding: '10px 20px',
                borderRadius: '4px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '0.9rem'
            }}>
                + {label}
            </a>
        </div>
    );
}

export function AdminItemControls({
    isAdmin,
    id,
    type
}: {
    isAdmin: boolean;
    id: string;
    type: 'service' | 'project' | 'post'
}) {
    const router = useRouter();

    if (!isAdmin) return null;

    const routeMap: Record<string, string> = {
        service: 'services',
        project: 'portfolio',
        post: 'blog',
    };

    const handleEdit = () => {
        router.push(`/admin/${routeMap[type]}/${id}/edit`);
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            if (type === 'service') await deleteService(id);
            if (type === 'project') await deleteProject(id);
            if (type === 'post') await deletePost(id);
            alert('Item deleted successfully.');
        } catch (error) {
            console.error(error);
            alert('Failed to delete item.');
        }
    };

    return (
        <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '8px', zIndex: 10 }}>
            <button
                onClick={handleEdit}
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--color-black)',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                }}
            >
                Edit
            </button>
            <button
                onClick={handleDelete}
                style={{
                    backgroundColor: 'rgba(255, 50, 50, 0.9)',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                }}
            >
                Delete
            </button>
        </div>
    );
}
