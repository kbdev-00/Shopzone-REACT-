import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, ShoppingBag, LogOut, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { cartCount } = useCart();
    const { isAuthenticated, user, logout } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: 10,
            margin: '0 2rem',
            borderRadius: 'var(--radius)',
            zIndex: 100,
            height: '5rem',
            marginTop: '1rem'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    letterSpacing: '-0.02em'
                }}>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            borderRadius: '12px',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
                        }}
                    >
                        <ShoppingBag size={24} strokeWidth={2.5} />
                    </motion.div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>SHOPZONE</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                    <NavLink to="/" active={isActive('/')}>Home</NavLink>
                    <NavLink to="/shop" active={isActive('/shop')}>Shop</NavLink>
                    <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
                </div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {isAuthenticated ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <span style={{
                                fontSize: '0.875rem',
                                color: 'white',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <User size={16} color="var(--luxury-gold)" />
                                {user?.name}
                            </span>
                            <button
                                onClick={logout}
                                className="btn-secondary"
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    fontSize: '0.75rem',
                                    borderRadius: '99px',
                                    border: '1px solid var(--border-bright)'
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                            SIGN IN
                        </Link>
                    )}

                    <Link to="/cart" style={{ position: 'relative', color: 'white' }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <ShoppingCart size={24} strokeWidth={2} />
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        height: '1.25rem',
                                        width: '1.25rem',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 2px 10px rgba(99, 102, 241, 0.5)',
                                        border: '2px solid var(--background)'
                                    }}
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </motion.div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, active, children }) => (
    <Link to={to} style={{
        fontWeight: 600,
        color: active ? 'white' : 'var(--text-muted)',
        transition: 'var(--transition)',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        position: 'relative',
        padding: '0.5rem 0'
    }}>
        {children}
        {active && (
            <motion.div
                layoutId="nav-active"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--luxury-gold)',
                    borderRadius: '99px'
                }}
            />
        )}
    </Link>
);

export default Navbar;
