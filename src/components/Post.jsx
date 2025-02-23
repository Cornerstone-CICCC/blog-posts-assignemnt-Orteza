import { useState, useEffect } from 'react';

const Post = ({ postId, onClose }) => {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const [postResponse, userResponse, commentsResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
          fetch(`https://jsonplaceholder.typicode.com/users/${postId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ]);

        const postData = await postResponse.json();
        const userData = await userResponse.json();
        const commentsData = await commentsResponse.json();

        setPost(postData);
        setAuthor(userData);
        setComments(commentsData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch post details');
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId]);

  if (loading) return <div className="post-detail loading">Loading...</div>;
  if (error) return <div className="post-detail error">{error}</div>;
  if (!post) return null;

  return (
    <div className="post-detail">
      <button className="close-button" onClick={onClose}>&times;</button>
      <article>
        <h1>{post.title}</h1>
        <p className="author">By: {author?.name || 'Unknown Author'}</p>
        <p className="author-info">Email: {author?.email}</p>
        <div className="post-content">{post.body}</div>
        
        <section className="comments-section">
          <h2>Comments</h2>
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <h3>{comment.name}</h3>
              <p className="comment-email">{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
};

export default Post;
