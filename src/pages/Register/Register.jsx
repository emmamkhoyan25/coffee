import React, { useState } from 'react';
import styles from './Register.module.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    security: '',
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agree) {
      alert('You must agree to the terms.');
      return;
    }

    console.log('Registering:', formData);
   
  };

  return (
    <div className={styles.registerWrapper}>
      <form className={styles.registerBox} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Create your Coffee Account</h2>

        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="e.g. Aram Aramyan"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="you@coffee.com"
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
              value={formData.password}
              placeholder="••••••••"
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

        <div className={styles.inputGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="••••••••"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Favorite Coffee (Security Question)</label>
          <input
            type="text"
            name="security"
            value={formData.security}
            placeholder="e.g. Latte"
            onChange={handleChange}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            id="agree"
          />
          <label htmlFor="agree">
            I agree to the <a href="#">Terms & Conditions</a>
          </label>
        </div>

        <button type="submit" className={styles.registerBtn}>
          Register
        </button>

        <p className={styles.redirectText}>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
