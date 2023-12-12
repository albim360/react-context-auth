// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import PostPage from './components/PostPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post/*" element={<PostRoutes />} />
      </Routes>
    </Router>
  );
}

const PostRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostPage />} />
      <Route path=":id" element={<SinglePostPage />} />
    </Routes>
  );
};

const SinglePostPage = () => {
  const { id } = useParams();

  const apiUrl = `https://apigenerator.dronahq.com/api/DbOy2lQR/posts/${id}`;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Errore durante il recupero dei dettagli del post:', error));
  }, [apiUrl]);

  if (!post) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Tag: {post.tag.join(', ')}</p>
      <img src={post.image} alt={post.title} />
    </div>
  );
};

export default App;
