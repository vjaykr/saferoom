import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/check_username', {
        username,
        security_code: securityCode,
      });
      if (response.data.success) {
        navigate('/chat', { state: { username, securityCode } });
      } else {
        setError(response.data.error);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Safe Room</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="username">Enter your name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="security-code-input"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="security-code">Enter security code:</label>
          <input
            type="text"
            id="security-code"
            name="security-code"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            className="security-code-input"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="enter-button">
          Enter Chat
        </button>
      </form>
    </div>
  );
}

export default Login;