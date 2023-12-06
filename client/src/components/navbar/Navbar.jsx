import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { toggle, darkMode } = useContext(DarkModeContext);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/logout");
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!");
      return;
    }
  };
  
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
          <button onClick={() => navigate("/create")}>Create Post</button>
      </div>
      <div className="right">
        <HomeOutlinedIcon onClick={() => navigate("/home")} className="icon" />
        <GroupOutlinedIcon onClick={() => navigate("/users")} className="icon" />
        <SellOutlinedIcon onClick={() => navigate("/tags")} className="icon" />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} className="icon" />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} className="icon" />
        )}
        <div className="user">
          <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>{currentUser.username}</span>
        </div>
        <LogoutOutlinedIcon onClick={handleLogout} className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
