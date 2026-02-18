import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Zap, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Immersive Hero Section */}
            <section style={{
                position: 'relative',
                padding: '10rem 0',
                overflow: 'hidden',
                backgroundColor: 'var(--background)'
            }}>
                {/* Decorative Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '40rem',
                    height: '40rem',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    zIndex: 0
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-5%',
                    width: '30rem',
                    height: '30rem',
                    background: 'radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            marginBottom: '2rem',
                            textAlign: 'center',
                            maxWidth: '1000px',
                            marginInline: 'auto'
                        }}>
                            The Pinnacle of <br />
                            <span className="text-gradient">Modern Commerce</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-muted)',
                            marginBottom: '3.5rem',
                            maxWidth: '700px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            textAlign: 'center',
                            fontWeight: 300
                        }}
                    >
                        Immerse yourself in a curated collection where luxury meets cutting-edge technology.
                        Your journey to excellence starts here.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                    >
                        <Link to="/shop" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>
                            Explore Collection <ArrowRight size={20} />
                        </Link>
                        <Link to="/login" className="btn btn-secondary" style={{ padding: '1.25rem 3rem' }}>
                            Private Access
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Features with Staggered Animations */}
            <section style={{ padding: '8rem 0', backgroundColor: 'rgba(0,0,0,0.1)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '3rem'
                    }}>
                        <FeatureCard
                            icon={<ShoppingBag size={32} color="var(--primary)" />}
                            title="Curated Selection"
                            description="Only the finest products make it into our vault, ensuring unparalleled quality."
                            index={0}
                        />
                        <FeatureCard
                            icon={<Zap size={32} color="var(--luxury-gold)" />}
                            title="Instant Fulfillment"
                            description="Experience the speed of light with our specialized priority logistics network."
                            index={1}
                        />
                        <FeatureCard
                            icon={<Shield size={32} color="var(--secondary)" />}
                            title="Elite Protection"
                            description="Every transaction is guarded by state-of-the-art cryptographic security."
                            index={2}
                        />
                    </div>
                </div>
            </section>

            {/* Experience Placeholder */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{
                        height: '400px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border)',
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <Globe size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Available Globally</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
                            Bringing luxury to every corner of the world. No boundaries, just excellence delivered.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="card"
        style={{
            padding: '3.5rem 2.5rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
        }}
    >
        <div style={{
            width: '4.5rem',
            height: '4.5rem',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            borderRadius: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.75rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>{description}</p>
    </motion.div>
);

export default Home;
