import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewPost({ handleNewPost }) {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!postTitle || !postBody) {
      alert('Please enter a title and body for your post.');
      return;
    }

    const newPost = {
      title: postTitle,
      body: postBody,
    };

    handleNewPost(newPost);
    navigate('/');
  };

  return (
    <main>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    </main>
  );
}

export default NewPost;
