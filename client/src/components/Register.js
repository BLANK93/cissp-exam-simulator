import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/examAPI';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('user'); // <--- REMOVED: Role is now forced on backend
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  //const navigate = useNavigate(); // Keep navigate if you plan to use it (e.g., redirect to login)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Do not send the role field, backend will default it to 'user'
      await registerUser({ username, password }); // <--- 'role' field removed from here
      setSuccess('Registration successful! You can now log in.');
      setError('');
      setUsername('');
      setPassword('');
      // Optionally navigate to login page after successful registration
      // navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div> */} {/* <--- REMOVED: Role selection dropdown */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;