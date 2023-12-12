import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { handleLoginOrRegistration } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const fakeLoginResponse = {
      user: {
        name: 'Tizio',
        surname: 'Caio',
        email: 'tizio.caio@email.it',
      },
      token: 'fakeToken',
    };

    const isAuthenticated = await simulateAuthentication(email, password);

    if (isAuthenticated) {
      handleLoginOrRegistration(fakeLoginResponse);
      window.alert('Login effettuato con successo.');
      navigate('/');
      
    } else {
      window.alert('Autenticazione fallita, controlla email e password.');
    }
  };

  const simulateAuthentication = async (enteredEmail, enteredPassword) => {
    return enteredEmail === 'tizio.caio@email.it' && enteredPassword === 'test123';
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
