import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import EditServiceClient from './EditServiceClient';

export const dynamic = 'force-dynamic';

export default async function EditService({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session || (session.user as any)?.role !== 'ADMIN') redirect('/login');

    const { id } = await params;

    const service = await prisma.service.findUnique({
        where: { id }
    });

    if (!service) redirect('/services');

    return <EditServiceClient service={service} />;
}
