const BlogPost = ({ id, title, body, author, onPostClick }) => {
  return (
    <article className="blog-post">
      <h2 onClick={() => onPostClick(id)} style={{ cursor: 'pointer' }}>{title}</h2>
      <p className="author">By: {author}</p>
      <p className="body">{body}</p>
    </article>
  );
};

export default BlogPost;
