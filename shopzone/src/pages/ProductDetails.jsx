import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils';
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return (
        <div className="container" style={{ padding: '10rem', textAlign: 'center' }}>
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-gradient"
                style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.2em' }}
            >
                PREPARING VIEW...
            </motion.div>
        </div>
    );

    if (!product) return <div className="container" style={{ padding: '10rem', textAlign: 'center', fontSize: '2rem' }}>OBJECT NOT FOUND</div>;

    return (
        <div className="container" style={{ padding: '6rem 2rem 10rem' }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Link to="/shop" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '4rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    fontWeight: 700
                }}>
                    <ArrowLeft size={18} /> Back to Boutique
                </Link>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        border: '1px solid var(--border)',
                        backgroundColor: '#000',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                    }}
                >
                    <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p style={{ color: 'var(--luxury-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                        {product.category}
                    </p>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
                        {product.title}
                    </h1>

                    <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', alignItems: 'center' }}>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={20}
                                fill={i < Math.round(product.rating) ? 'var(--luxury-gold)' : 'transparent'}
                                color={i < Math.round(product.rating) ? 'var(--luxury-gold)' : 'var(--text-dim)'}
                            />
                        ))}
                        <span style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginLeft: '1rem' }}>
                            {product.rating} / 5.0 (Global Rating)
                        </span>
                    </div>

                    <div style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '2.5rem', fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {formatPrice(product.price)}
                        <span style={{ fontSize: '1rem', color: 'var(--text-dim)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tax & Insurance Included</span>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '4rem', fontWeight: 300 }}>
                        {product.description}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                        <InfoItem icon={<ShieldCheck size={24} />} text="Lifetime Warranty" />
                        <InfoItem icon={<Truck size={24} />} text="Global Priority" />
                        <InfoItem icon={<RotateCcw size={24} />} text="Concierge Returns" />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '1.5rem', fontSize: '1.125rem' }}
                    >
                        <ShoppingCart size={22} /> Add to Selection
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon, text }) => (
    <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
        <div style={{ color: 'var(--luxury-gold)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{text}</p>
    </div>
);

export default ProductDetails;
