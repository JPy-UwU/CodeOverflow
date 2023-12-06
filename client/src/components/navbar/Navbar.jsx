import { Link } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/home" style={{ textDecoration: "none"}}>
          <span>CodeOverflow</span>
        </Link>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <DarkModeOutlinedIcon />
        <div className="user">
          {/* <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span> */}
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;