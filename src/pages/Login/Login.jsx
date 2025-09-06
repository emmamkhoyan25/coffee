import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    security: '',
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   
  };

  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginBox} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sign in to Coffee</h2>

        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Aram Aramyan"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@coffee.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <div className={styles.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className={styles.toggleBtn}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>


      

        <button type="submit" className={styles.loginBtn}   onClick={()=> {navigate(`/cart`)}}> 
          Login
        </button>

        <p className={styles.redirectText}>
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
