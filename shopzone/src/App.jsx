import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetails /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <PageWrapper><Checkout /></PageWrapper>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, position: 'relative' }}>
              <AnimatedRoutes />
            </main>
            <footer style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              borderTop: '1px solid var(--border)',
              color: 'var(--text-dim)',
              marginTop: 'auto',
              backgroundColor: 'rgba(0,0,0,0.2)'
            }}>
              <p style={{ letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                &copy; {new Date().getFullYear()} SHOPZONE LUXURY. ALL RIGHTS RESERVED.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Questions? Email us at <span style={{ color: 'var(--luxury-gold)' }}>bhaskarjii2201@gmail.com</span>
              </p>
            </footer>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
