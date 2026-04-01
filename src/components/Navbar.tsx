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
                <Link href="/" onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
                    <div className="nav-brand-logo">
                        BAAGH<span className="nav-brand-dot">.</span>
                    </div>
                </Link>
            </div>
            
            <div className="navbar-center-container">
                <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
                    <Link href="/" onClick={handleLinkClick}>Home</Link>
                    <Link href="/about" onClick={handleLinkClick}>About Us</Link>
                    <Link href="/services" onClick={handleLinkClick}>Services</Link>
                    <Link href="/portfolio" onClick={handleLinkClick}>Gallery</Link>
                    <Link href="/contact" onClick={handleLinkClick}>Contact Us</Link>
                </div>
            </div>

            <div className="nav-right-container">
                <button
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
