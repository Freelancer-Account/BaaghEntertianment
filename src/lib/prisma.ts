import { PrismaClient } from '@prisma/client';
import { Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL || "postgres://edbdb3591c5f2fc1cbd181ff63ce74e432deb35ce245d90d59bf4e43ed9d9fac:sk_AKbGDWFyEaCS3wV7TyLZk@db.prisma.io:5432/postgres?sslmode=require";
    const pool = new Pool({ connectionString });
    const adapter = new PrismaNeon(pool);
    return new PrismaClient({ adapter, log: ['query'] });
}

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
