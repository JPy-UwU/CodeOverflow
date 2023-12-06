import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { toggle, darkMode } = useContext(DarkModeContext);
  
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span>CodeOverflow</span>
        </Link>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="create"> 
          <button onClick={() => navigate("/create")}>Create Post</button>
        </div>
      </div>
      <div className="right">
        <HomeOutlinedIcon onClick={() => navigate("/home")} />
        <GroupOutlinedIcon onClick={() => navigate("/users")} />
        <SellOutlinedIcon onClick={() => navigate("/tags")} />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
