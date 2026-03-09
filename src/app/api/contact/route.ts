import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { name, email, service, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newContact = await prisma.contactMessage.create({
            data: { name, email, service, message }
        });

        return NextResponse.json({ success: true, newContact });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}
