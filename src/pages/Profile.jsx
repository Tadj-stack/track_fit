// pages/profile.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Title from "./components/Head";
import Sidebar from './components/Sidebar';

function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleProfilePictureChange = (e) => setProfilePicture(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated!');
    console.log('Profile Picture:', profilePicture);
  };

  return (
    <>
      <Title />
      <Navbar />
      <Sidebar />
      <div className="profile-container">
        <div className="profile-header">
          <img src="/images/profile.jpg" alt="Profile" className="profile-picture" />
        </div>
        <h1>Profile Page</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="personal-info">
            <h2>Données Personnelles</h2>
            <div className="personal-info-row">
              <label>
                First Name:
                <input type="text" value={firstName} onChange={handleFirstNameChange} className="login-form-input" />
              </label>
              <label>
                Last Name:
                <input type="text" value={lastName} onChange={handleLastNameChange} className="login-form-input" />
              </label>
            </div>
            <div className="personal-info-row">
              <label>
                Date of Birth:
                <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} className="login-form-input" />
              </label>
              <label>
                Country:
                <input type="text" value={country} onChange={handleCountryChange} className="login-form-input" />
              </label>
            </div>
            <div className="personal-info-row">
              <label>
                Height:
                <input type="text" value={height} onChange={handleHeightChange} className="login-form-input" />
              </label>
              <label>
                Weight:
                <input type="text" value={weight} onChange={handleWeightChange} className="login-form-input" />
              </label>
            </div>
          </div>

          <div className="login-info">
            <h2>Informations de Connexion</h2>
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} className="login-form-input" />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} className="login-form-input" />
            </label>
          </div>

          <label>
            Profile Picture:
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </label>
          <br />
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
