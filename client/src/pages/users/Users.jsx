import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "./users.scss";

const UsersPage = () => {
  const users = [
   {
    username: "John",
   },
   {
    username: "Jane",
   },
   {
    username: "Joe",
   }
  ];

  const isAdmin = true;

  return (
    <div className="users">
      <div className="container">
        {users.map((user) => (
          <div className="user">
            <span>{user.username}</span>
            {isAdmin && <i><DeleteOutlinedIcon /></i>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
