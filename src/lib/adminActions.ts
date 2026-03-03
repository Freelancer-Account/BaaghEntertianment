'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

async function checkAdmin() {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
        throw new Error('Unauthorized');
    }
}

// SERVICES
export async function deleteService(id: string) {
    await checkAdmin();
    await prisma.service.delete({ where: { id } });
    revalidatePath('/services');
    revalidatePath('/admin/services');
}

export async function createService(data: { title: string; desc: string; details: string }) {
    await checkAdmin();
    await prisma.service.create({ data });
    revalidatePath('/services');
    revalidatePath('/admin/services');
}

export async function updateService(id: string, data: { title: string; desc: string; details: string }) {
    await checkAdmin();
    await prisma.service.update({ where: { id }, data });
    revalidatePath('/services');
    revalidatePath('/admin/services');
}

// PORTFOLIO PROJECTS
export async function deleteProject(id: string) {
    await checkAdmin();
    await prisma.project.delete({ where: { id } });
    revalidatePath('/portfolio');
    revalidatePath('/admin/portfolio');
}

export async function updateProject(id: string, data: any) {
    await checkAdmin();
    await prisma.project.update({ where: { id }, data });
    revalidatePath('/portfolio');
    revalidatePath('/admin/portfolio');
}

// BLOG POSTS
export async function deletePost(id: string) {
    await checkAdmin();
    await prisma.post.delete({ where: { id } });
    revalidatePath('/blog');
    revalidatePath('/admin/blog');
}

export async function updatePost(id: string, data: any) {
    await checkAdmin();
    await prisma.post.update({ where: { id }, data });
    revalidatePath('/blog');
    revalidatePath('/admin/blog');
}
