import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link href="/">
                    BAAGH <span>ENTERTAINMENT</span>
                </Link>
            </div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/login" style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Login</Link>
                <Link href="/contact" className="nav-cta">Contact Us</Link>
            </div>
        </nav>
    );
}
