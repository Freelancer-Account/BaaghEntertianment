import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
    const session = await auth();
    if (!session || (session.user as any)?.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const data = await request.json();
        await prisma.project.create({ data });
        revalidatePath('/portfolio');
        revalidatePath('/admin/portfolio');
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }
}
