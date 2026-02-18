import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '12rem 0', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <ShoppingBag size={80} color="var(--text-dim)" style={{ marginBottom: '2rem' }} />
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>The Collection is Empty</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '3.5rem', fontSize: '1.25rem' }}>Your personal vault is waiting to be filled with excellence.</p>
                    <Link to="/shop" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>
                        Begin Exploration
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '6rem 2rem 10rem' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>Your Selection</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem', alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <AnimatePresence>
                        {cart.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                className="card"
                                style={{
                                    display: 'flex',
                                    padding: '1.5rem',
                                    gap: '2.5rem',
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    borderColor: 'var(--border)'
                                }}
                            >
                                <img src={item.thumbnail} alt={item.title} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} />

                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--luxury-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>{item.category}</p>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>{formatPrice(item.price)} per unit</p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn-secondary" style={{ padding: 0, width: '40px', height: '40px', borderRadius: '50%', color: 'white' }}>
                                        <Minus size={18} />
                                    </button>
                                    <span style={{ width: '30px', textAlign: 'center', fontWeight: 800, fontSize: '1.25rem' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn-secondary" style={{ padding: 0, width: '40px', height: '40px', borderRadius: '50%', color: 'white' }}>
                                        <Plus size={18} />
                                    </button>
                                </div>

                                <div style={{ minWidth: '120px', textAlign: 'right', fontWeight: 800, fontSize: '1.5rem', color: 'white' }}>
                                    {formatPrice(item.price * item.quantity)}
                                </div>

                                <button onClick={() => removeFromCart(item.id)} style={{ color: 'var(--secondary)', padding: '1rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ff0000'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--secondary)'}>
                                    <Trash2 size={24} />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <button onClick={clearCart} style={{ alignSelf: 'flex-start', color: 'var(--text-dim)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1rem' }}>
                        Purge Selection
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card"
                    style={{
                        padding: '3rem',
                        height: 'fit-content',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--luxury-gold)'
                    }}
                >
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>Checkout Summary</h2>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>Selection Value</span>
                        <span style={{ fontWeight: 600 }}>{formatPrice(cartTotal)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>Priority Shipping</span>
                        <span style={{ color: 'var(--luxury-gold)', fontWeight: 700 }}>Complimentary</span>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '2rem', color: 'white' }}>
                        <span>TOTAL</span>
                        <span>{formatPrice(cartTotal)}</span>
                    </div>

                    <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '2rem', lineHeight: 1.5 }}>
                        Secure end-to-end encrypted checkout powered by ShopZone Elite Concierge.
                    </p>

                    <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: '2.5rem', padding: '1.5rem' }}>
                        Secure Checkout <ArrowRight size={22} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Cart;
