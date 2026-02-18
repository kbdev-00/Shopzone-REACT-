import { useNavigate, useLocation } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect to the page they tried to visit or home
    const from = location.state?.from?.pathname || '/';

    const handleLogin = () => {
        login();
        navigate(from, { replace: true });
    };

    return (
        <div className="container animate-fade-in" style={{
            padding: '4rem 1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh'
        }}>
            <div className="card" style={{ padding: '3rem', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
                <div style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: '#e0e7ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'var(--primary)'
                }}>
                    <LogIn size={32} />
                </div>
                <h1 style={{ marginBottom: '1rem' }}>Welcome Back</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Please login to access your account and complete your purchase.
                </p>

                <button onClick={handleLogin} className="btn btn-primary" style={{ width: '100%' }}>
                    Login as Guest
                </button>
            </div>
        </div>
    );
};

export default Login;
