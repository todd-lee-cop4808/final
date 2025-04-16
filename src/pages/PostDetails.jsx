import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client.jsx';
import { timeAgo } from '../utils/timeAgo';
import UpvoteDisplay from '../Components/UpvoteDisplay.jsx';
import '../styles/PostDetails.css';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [vote, setVote] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data: postData } = await supabase.from("final").select().eq("id", id).single();
      const { data: commentData } = await supabase.from("final").select().eq("parent", id);

      if (postData) {
        setPost(postData);
        setVote(postData.upvotes || 0);
      }

      if (commentData) {
        setComments(commentData);
      }
    };

    fetchData().catch(console.error);
  }, [id]);

  const handleUpvote = async () => {
    await supabase.from("final").update({ upvotes: vote + 1 }).eq("id", id);
    setVote((prev) => prev + 1);
  };

  const handleEdit = () => {
    window.location = `/UpdatePost/${id}`;
  };

  const handleDelete = async () => {
    await supabase.from("final").delete().eq("id", id);
    await supabase.from("final").delete().eq("parent", id);
    alert("Your post has been successfully deleted");
    window.location = "/";
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      await supabase.from("final").insert({ payload: comment, parent: id });
      setComment('');
      window.location.reload();
    }
  };

  if (!post) {
    return <div className="post-loading">Loading post...</div>;
  }

  return (
    <div className="post-page">
      <div className="post-detail">
        <p className="post-date">Posted {timeAgo(post.created_at)}</p>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-content">{post.content}</p>
        {post.image && (
          <img className="post-image" src={post.image} alt="Post" />
        )}
        <div className="post-controls">
          <UpvoteDisplay count={vote} onClick={handleUpvote} />
          <div className="edit-buttons">
            <button onClick={handleEdit} className="edit-btn">✏️ Edit</button>
            <button onClick={handleDelete} className="delete-btn">🗑️ Delete</button>
          </div>
        </div>
      </div>

      <div className="post-comments">
        {comments.length > 0 && (
          <>
            <h4 className="comment-heading">
              {comments.length} comment{comments.length !== 1 ? 's' : ''}
            </h4>
            <div className="comment-list">
              {comments.map((c, index) => (
                <div key={index} className="comment-item">
                  <p>{c.payload}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            className="comment-input"
            type="text"
            placeholder="Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="comment-btn" type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;