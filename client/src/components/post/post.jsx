import { Link } from "react-router-dom";

import "./post.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="left">
        <span>{post.voteCount} Votes</span>
        <span>{post.answerCount} Answers</span>
        <span>{post.commentCount} Comments</span>
      </div>
      <div className="right">
        <span className="title">
          <Link to={`/post/:${post.id}`} style={{ textDecoration: "none" }}>{post.title}</Link>
        </span>
        <span className="description">{post.description}</span>
      </div>
      <div className="tags-list">
        {post.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
