import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    style={{
                        width: '3rem',
                        height: '3rem',
                        border: '4px solid var(--border)',
                        borderTopColor: 'var(--primary)',
                        borderRadius: '50%',
                        margin: '0 auto 2rem'
                    }}
                />
                <div style={{ fontSize: '1.25rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>REACHING THE VAULT...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div style={{ color: 'var(--secondary)', fontSize: '1.25rem' }}>Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 2rem 8rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'left' }}>
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
                >
                    The <span className="text-gradient">Collection</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}
                >
                    Curated excellence, delivered worldwide.
                </motion.p>
            </header>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                className="grid-products"
            >
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Shop;
