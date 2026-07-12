import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    console.log("Checking:", email, password) // Debug kosam

    if (email === '' || password === '') {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === 'admin@test.com' && password === '123456') {
        setSuccess('Login Successful! Welcome back');
        onLoginSuccess(true);
      } else {
        setError('Invalid email or password');
      }
    }, 2500);
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setError('');
    setSuccess('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email/Username</label>
          <input 
            type="email" 
            value={email}  // idi must undali
            onChange={(e) => setEmail(e.target.value)}  // idi must undali
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            type={showPassword ? 'text' : 'password'}
            value={password}  // idi must undali
            onChange={(e) => setPassword(e.target.value)}  // idi must undali
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        {loading && <p>⏳ Loading...</p>}

        <button type="submit">Login</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}
export default Login;