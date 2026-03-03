import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const staticServices = [
    { title: 'Line Production', desc: 'Comprehensive budgeting, scheduling, and on-ground management.', details: 'We manage your entire shoot schedule, crew hiring, equipment rental, and budget tracking efficiently.' },
    { title: 'Location Management', desc: 'Scouting and securing elite locations.', details: 'Access our pan-India database of exotic, urban, and historical locations, pre-cleared for shooting.' },
    { title: 'Junior Artists & Casting', desc: 'Arranging specialized talents.', details: 'Crowd management and secondary casting seamlessly integrated into your shoot day without delays.' },
    { title: 'Vanity & Vehicles', desc: 'Premium vanity vans and logistics.', details: 'Luxury trailers for the main cast and robust transportation for the entire crew and camera units.' },
    { title: 'Equipment & Logistics', desc: 'Sourcing top-tier equipment.', details: 'Partnerships with the biggest rental houses to procure ARRI, RED, and specialized grip equipment.' },
    { title: 'Permissions & Govt', desc: 'Government and local authority approvals.', details: 'Fast-tracked shooting permits from local police, municipality, and archaeological departments.' },
];

async function main() {
    console.log(`Start seeding services...`);
    for (const s of staticServices) {
        const service = await prisma.service.create({
            data: s,
        });
        console.log(`Created service with id: ${service.id}`);
    }
    console.log(`Seeding services finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
