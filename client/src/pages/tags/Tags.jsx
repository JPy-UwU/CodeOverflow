import "./tags.scss";

const UsersPage = () => {
  const tags = [
    "Programming", "Music", "Sports", "Tech", "Science", "History", "Art", "Lifestyle", "Fashion"
  ];

  return (
    <div className="tags">
      <div className="container">
        <h1>Tags</h1>
        <input type="text" placeholder="Search tag" />
        <div>
          {tags.map((tag) => (
            <div className="tag">
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
