import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

const Checkout = () => {
    const { clearCart } = useCart();

    useEffect(() => {
        // Simulate processing order and clearing cart
        const timer = setTimeout(() => {
            clearCart();
        }, 1000);
        return () => clearTimeout(timer);
    }, [clearCart]);

    return (
        <div className="container animate-fade-in" style={{
            padding: '6rem 1.5rem',
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ color: 'green', marginBottom: '1.5rem' }}>
                <CheckCircle size={80} />
            </div>
            <h1 style={{ marginBottom: '1rem' }}>Order Placed!</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px' }}>
                Thank you for your purchase. Your order has been successfully placed and is being processed.
            </p>
            <Link to="/" className="btn btn-secondary">
                <Home size={20} /> Return Home
            </Link>
        </div>
    );
};

export default Checkout;
