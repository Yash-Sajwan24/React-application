import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FirstPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const location = useLocation();
  const userDetails = localStorage.getItem('userDetails');
const [errorMessage, setErrorMessage] = useState(
  !userDetails && location.state && location.state.message ? location.state.message : ''
);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name && phoneNumber && email) {
      // Save user details to local storage
      localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));
      setErrorMessage('');
      // Navigate to the second page using navigate function
      navigate('/second-page');
    }
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <br />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </form>
    </div>
  );
}

export default FirstPage;
