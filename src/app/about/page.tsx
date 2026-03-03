import Link from 'next/link';

export default function About() {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
            <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>About Baagh Entertainment</h1>
                <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '3rem' }}>Powering Visions Into Reality</p>

                <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-gray-text)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Baagh Entertainment is India's premier film production support partner. Established with a vision to streamline
                        the chaotic world of filmmaking, we provide end-to-end logistics, casting, permissions, and location management.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        From high-octane feature films and sweeping web series to slick commercial shoots, our on-ground expertise ensures
                        that directors and producers can focus purely on their creative vision while we handle the operational heavy lifting.
                    </p>
                    <p>
                        With a network spanning across every state in India, our dedicated team works 24/7 to deliver excellence on every set.
                    </p>
                </div>
            </section>

            <section style={{ padding: '4rem 5%', backgroundColor: 'var(--color-charcoal)' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Our Mission & Vision</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: 'var(--color-black)', padding: '2.5rem', borderTop: '3px solid var(--color-gold)', borderRadius: '4px' }}>
                        <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Mission</h3>
                        <p style={{ color: 'var(--color-gray-text)', lineHeight: '1.6' }}>To provide flawless, efficient, and premium production support that empowers filmmakers to execute their projects without logistical friction in India.</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--color-black)', padding: '2.5rem', borderTop: '3px solid var(--color-gold)', borderRadius: '4px' }}>
                        <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Vision</h3>
                        <p style={{ color: 'var(--color-gray-text)', lineHeight: '1.6' }}>To be recognized globally as the most reliable and powerful line production company in the Indian subcontinent.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
