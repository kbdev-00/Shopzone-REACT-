import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="container" style={{ padding: '6rem 2rem 10rem' }}>
            <header style={{ marginBottom: '6rem', textAlign: 'center' }}>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        color: 'var(--luxury-gold)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.4em',
                        fontSize: '0.875rem',
                        marginBottom: '1.5rem'
                    }}
                >
                    Elite Concierge
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-serif)' }}
                >
                    Get in <span className="text-gradient">Touch</span>
                </motion.h1>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '5rem',
                alignItems: 'start',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Contact Details</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                        Our dedicated team is ready to provide you with an unparalleled luxury experience. Reach out directly.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <ContactInfoItem icon={<Mail size={24} />} title="Email" detail="bhaskarjii2201@gmail.com" />
                        <ContactInfoItem icon={<Phone size={24} />} title="Phone" detail="+91 6201519951" />
                        <ContactInfoItem icon={<MapPin size={24} />} title="Address" detail="4th Floor, 91springboard building, Plot No. D-107, Vyapar Marg, Sector 2, Noida, UP 201301" />
                        <ContactInfoItem icon={<Globe size={24} />} title="Presence" detail="Available Worldwide" />
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="card glass"
                    style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}
                >
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                style={{ textAlign: 'center', padding: '2rem' }}
                            >
                                <div style={{
                                    width: '5rem',
                                    height: '5rem',
                                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 2rem',
                                    color: 'var(--primary)'
                                }}>
                                    <Send size={32} />
                                </div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Message Sent</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Your request has been prioritized for our executive team.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
                            >
                                <div>
                                    <label style={labelStyle}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="How can we assist you today?"
                                        style={{ ...inputStyle, resize: 'none' }}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%', padding: '1.25rem' }}
                                >
                                    Send Priority Message <Send size={18} />
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

const ContactInfoItem = ({ icon, title, detail }) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <div style={{
            width: '3.5rem',
            height: '3.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--luxury-gold)',
            border: '1px solid var(--border)'
        }}>
            {icon}
        </div>
        <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>{title}</p>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>{detail}</p>
        </div>
    </div>
);

const labelStyle = {
    display: 'block',
    marginBottom: '0.75rem',
    fontSize: '0.75rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)'
};

const inputStyle = {
    width: '100%',
    padding: '1.25rem',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition)'
};

export default Contact;
