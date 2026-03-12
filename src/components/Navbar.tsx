'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link href="/">
                    BAAGH <span>ENTERTAINMENT</span>
                </Link>
            </div>
            <button
                className={`hamburger ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
                <Link href="/" onClick={handleLinkClick}>Home</Link>
                <Link href="/about" onClick={handleLinkClick}>About</Link>
                <Link href="/services" onClick={handleLinkClick}>Services</Link>
                <Link href="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
                <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                <Link href="/login" onClick={handleLinkClick} style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Login</Link>
                <Link href="/contact" onClick={handleLinkClick} className="nav-cta">Contact Us</Link>
            </div>
        </nav>
    );
}
