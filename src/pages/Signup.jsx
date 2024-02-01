import React, { useState } from 'react';
import Link from 'next/link';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
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
      <h1>Sign Up</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm your password"
        />
        <button type="submit">Sign Up</button>
      </form>
      
      <p>Already have an account? <Link href="/">Log In</Link></p>
      
    </div>
  );
}

export default SignUp;
