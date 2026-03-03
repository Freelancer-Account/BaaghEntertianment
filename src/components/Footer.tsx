import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section brand-section">
                    <h2>BAAGH <span>ENTERTAINMENT</span></h2>
                    <p>Powering Productions. Delivering Excellence across India.</p>
                </div>
                <div className="footer-section links-section">
                    <h3>Quick Links</h3>
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/blog">News & Updates</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="footer-section contact-section">
                    <h3>Location</h3>
                    <p>Mumbai, India</p>
                    <p>Email: contact@baaghentertainment.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Baagh Entertainment. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
