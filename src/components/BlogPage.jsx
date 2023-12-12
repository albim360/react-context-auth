import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://apigenerator.dronahq.com/api/DbOy2lQR/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Errore durante il recupero dei dati:', error));
  }, []);

  return (
    <div>
      <h2>Lista dei post</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </a>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
