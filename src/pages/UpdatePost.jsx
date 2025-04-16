import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from "../client.jsx";
import '../styles/UpdatePost.css';

const UpdatePost = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("final")
        .select()
        .eq("id", id)
        .single();

      if (data) {
        setTitle(data.title);
        setContent(data.content);
        setImage(data.image);
        setLoading(false);
      }
    };

    fetchPost().catch(console.error);
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    if (!title.trim()) {
      alert("Title cannot be empty.");
      return;
    }
  
    const updates = {
      title: title.trim(),
      content: content.trim(),
      image: image.trim(),
    };
  
    const { error } = await supabase
      .from("final")
      .update(updates)
      .eq("id", id);
  
    if (error) {
      console.error("Update error:", error);
      alert("Failed to update post.");
    } else {
      alert("Post successfully updated.");
      window.location = `/Post/${id}`;
    }
  };  

  if (loading) return <p className="loading">Loading post...</p>;

  return (
    <div className="update-container">
      <h2 className="form-title">Update Post</h2>
      <form className="update-form" onSubmit={handleUpdate}>
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
        <button className="submit-btn" type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;