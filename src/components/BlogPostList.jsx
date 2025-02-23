import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import Post from './Post';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users')
        ]);

        const postsData = await postsResponse.json();
        const usersData = await usersResponse.json();

        setPosts(postsData);
        setUsers(usersData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  const handleClosePost = () => {
    setSelectedPostId(null);
  };

  return (
    <div className="blog-post-list">
      {selectedPostId && (
        <Post postId={selectedPostId} onClose={handleClosePost} />
      )}
      {posts.map(post => {
        const author = users.find(user => user.id === post.userId)?.name || 'Unknown Author';
        return (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            author={author}
            onPostClick={handlePostClick}
          />
        );
      })}
    </div>
  );
};

export default BlogPostList;
