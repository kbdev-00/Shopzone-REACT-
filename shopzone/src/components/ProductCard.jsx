import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="card"
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)'
            }}
        >
            <div style={{
                position: 'relative',
                paddingTop: '100%', /* Normal Square Aspect Ratio */
                overflow: 'hidden',
                backgroundColor: '#0a0a0a'
            }}>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                {/* Luxury Badge */}
                <div className="badge badge-gold" style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    zIndex: 10
                }}>
                    Elite
                </div>

                {/* Floating Quick Add */}
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--luxury-gold)', color: '#000' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '1.25rem',
                        right: '1.25rem',
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.2)',
                        zIndex: 20
                    }}
                >
                    <ShoppingCart size={22} strokeWidth={2} />
                </motion.button>
            </div>

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--luxury-gold)',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    marginBottom: '0.75rem'
                }}>
                    {product.category}
                </p>

                <h3 style={{
                    fontSize: '1.35rem',
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                    fontFamily: 'var(--font-serif)',
                    minHeight: '3.25rem'
                }}>
                    <Link to={`/product/${product.id}`} style={{ transition: 'color 0.2s' }}>
                        {product.title}
                    </Link>
                </h3>

                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', alignItems: 'center' }}>
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            fill={i < Math.round(product.rating) ? 'var(--luxury-gold)' : 'transparent'}
                            color={i < Math.round(product.rating) ? 'var(--luxury-gold)' : 'var(--text-dim)'}
                        />
                    ))}
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginLeft: '0.5rem' }}>
                        {product.rating}
                    </span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                        {formatPrice(product.price)}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
