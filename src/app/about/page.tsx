import Link from 'next/link';

export default function About() {
    return (
        <div className="page-container" style={{ backgroundColor: 'var(--color-black)' }}>
            <section className="page-section">
                <h1 className="page-title">About Baagh Entertainment</h1>
                <p className="page-subtitle">Powering Visions Into Reality</p>

                <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-gray-text)', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
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

            

            {/* Founder Section */}
            <section style={{ padding: '4rem 5%', backgroundColor: 'var(--color-black)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 className="page-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet the Founder</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }} className="founder-section">
                        <style>{`
                            @media (min-width: 768px) {
                                .founder-section {
                                    flex-direction: row !important;
                                    align-items: flex-start !important;
                                }
                            }
                        `}</style>
                        
                        <div style={{ flex: '1', width: '100%', maxWidth: '400px' }}>
                            <img 
                                src="/images/founder.jpg" 
                                alt="Founder of Baagh Entertainment" 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    borderRadius: '8px', 
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                    border: '2px solid var(--color-gold)'
                                }} 
                            />
                        </div>
                        <div style={{ flex: '1', color: 'var(--color-gray-text)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <h3 style={{ color: 'var(--color-gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>Our Founder</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                As the driving force behind Baagh Entertainment, our founder brings years of cinematic expertise and a visionary approach to line production.
                                With a deep understanding of the unique challenges filmmakers face, the goal has always been to create a robust support system that empowers creative minds.
                            </p>
                            <p>
                                Through relentless dedication and a passion for storytelling, Baagh Entertainment has grown rapidly, providing unparalleled logistics and production support across India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '4rem 5%', backgroundColor: 'var(--color-charcoal)' }}>
                <h2 className="page-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Mission & Vision</h2>
                <div className="content-grid" style={{ maxWidth: '1000px', textAlign: 'left' }}>
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
