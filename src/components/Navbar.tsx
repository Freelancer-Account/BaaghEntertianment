'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();

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

            <div className="nav-right-container" style={{ display: 'flex', alignItems: 'center' }}>
                {session ? (
                    <>
                        {(session.user as any)?.role === 'ADMIN' && (
                            <Link href="/admin/dashboard" className="btn-secondary" style={{ padding: '8px 24px', marginRight: '1rem', fontSize: '0.9rem', marginBottom: '0' }} onClick={handleLinkClick}>
                                Dashboard
                            </Link>
                        )}
                        <button onClick={() => signOut({ callbackUrl: '/' })} className="btn-secondary" style={{ padding: '8px 24px', marginRight: '1rem', fontSize: '0.9rem', marginBottom: '0' }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link href="/login" className="btn-secondary" style={{ padding: '8px 24px', marginRight: '1rem', fontSize: '0.9rem', marginBottom: '0' }} onClick={handleLinkClick}>
                        Login
                    </Link>
                )}
                
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
