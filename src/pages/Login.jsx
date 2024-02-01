
import React, { useState } from 'react';
import Link from 'next/link';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="brand">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="project-name">
          <h3>TrackFit</h3>
        </div>
      </div>
      <h1 >Log in</h1>
      <form className="login-form" onSubmit={handleSubmit}>

        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
        <input type="password" value={password} onChange={handlePasswordChange}  placeholder="Password"/>
      
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link href="/Signup">Sign Up</Link></p>

    </div>
  );
};

export default Login;
