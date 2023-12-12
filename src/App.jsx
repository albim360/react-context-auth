import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './contexts/PrivateRoute';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import PostPage from './components/PostPage';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/*" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <PrivateRoute path="/post" element={<PostPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;