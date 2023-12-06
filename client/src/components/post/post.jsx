import "./post.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="container">
        
        <div className="left">
          <span className="vote-count">
            {post.voteCount}
          </span>
          <span className="vote-count-label">
            Votes
          </span>
        </div>
        <div className="left">
          <span className="title">{post.title}</span>
          <span className="description">
            {post.description}
          </span>
        </div>
      </div>
      <div className="tags">
        {post.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Post;