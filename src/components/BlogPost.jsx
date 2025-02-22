const BlogPost = ({ post, author }) => {
  return (
    <article className="blog-post">
      <h2>{post.title}</h2>
      {author && <p className="author">By: {author.name}</p>}
      <p>{post.body}</p>
    </article>
  );
};

export default BlogPost;
