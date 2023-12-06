import "./posts.scss";
import Post from "../post/post";

const tampPosts = [
  {
    id: 1,
    userId: 1,
    title: "What is the difference between a language and a framework?",
    description:
      "I'm new to programming and I don't understand the difference between a language and a framework. Can anyone explain?",
    voteCount: 0,
    commentCount: 0,
    answerCount: 0,
    tags: ["programming", "language", "framework"],
  },
  {
    id: 2,
    userId: 1,
    title: "What is the difference between a language and a framework?",
    description:
      "I'm new to programming and I don't understand the difference between a language and a framework. Can anyone explain?",
    voteCount: 0,
    commentCount: 0,
    answerCount: 0,
    tags: ["programming", "language", "framework"],
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {tampPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
