import React, { useState } from 'react';
import { supabase } from '../client.jsx';
import '../styles/CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { title, content, image };

    const { error } = await supabase
      .from('final')
      .insert(post)
      .select();

    if (error) {
      alert("Error creating post.");
      console.error(error);
    } else {
      alert("Your post has been successfully created.");
      window.location = "/";
    }
  };

  return (
    <div className="create-container">
      <h2 className="form-title">Create a New Post</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-textarea"
          placeholder="Content (optional)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="submit-btn" type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;