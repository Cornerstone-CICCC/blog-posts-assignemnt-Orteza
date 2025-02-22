import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="blog-post-list">
      {posts.map(post => (
        <BlogPost 
          key={post.id} 
          post={post}
          author={users.find(user => user.id === post.userId)}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
