import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
    const services = [
        { title: 'Line Production', desc: 'Comprehensive budgeting, scheduling, and on-ground management for seamless shoots.', icon: '🎬' },
        { title: 'Location Management', desc: 'Scouting and securing elite locations across India with required permits.', icon: '🗺️' },
        { title: 'Casting Coordination', desc: 'Arranging junior artists, extras, and specialized talents for any scale of production.', icon: '👥' },
        { title: 'Vanity Vans & Vehicles', desc: 'Premium vanity vans and logistics transport for cast, crew, and equipment.', icon: '🚐' },
        { title: 'Equipment Logistics', desc: 'Sourcing and transporting top-tier camera, lighting, and grip equipment.', icon: '🎥' },
        { title: 'Shooting Permissions', desc: 'Fast-track government and local authority approvals across all states.', icon: '📝' },
    ];

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '50+', label: 'Cities Covered' },
        { number: '15+', label: 'Years Experience' },
        { number: '24/7', label: 'Production Support' },
    ];

    return (
        <>
            <section className={styles.hero}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.heroBackground}
                    poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                >
                    <source src="https://cdn.pixabay.com/video/2021/08/25/86241-592750838_tiny.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1>POWERING PRODUCTIONS. <br /><span style={{ color: 'var(--color-gold)' }}>DELIVERING EXCELLENCE.</span></h1>
                    <p>Complete Film Production Support Across India. Your trusted partner for feature films, web series, commercials, and OTT projects.</p>
                    <div className={styles.heroButtons}>
                        <Link href="/services"><button className="btn-primary">Explore Services</button></Link>
                        <Link href="/contact"><button className="btn-secondary">Contact Us</button></Link>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionCharcoal}`}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <p className={styles.sectionSubtitle}>Everything you need for a flawless shoot</p>
                <div className={styles.servicesGrid}>
                    {services.map((srv, idx) => (
                        <div key={idx} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>{srv.icon}</div>
                            <h3>{srv.title}</h3>
                            <p>{srv.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionDark}`}>
                <div className={styles.statsContainer}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className={styles.statItem}>
                            <h4>{stat.number}</h4>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionCharcoal}`}>
                <div className={styles.ctaBox}>
                    <h2>Ready to Start Your Next Project?</h2>
                    <p>Partner with Baagh Entertainment for world-class production support across India.</p>
                    <Link href="/contact"><button className="btn-primary">Let's Talk Production</button></Link>
                </div>
            </section>
        </>
    );
}
