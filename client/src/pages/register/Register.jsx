import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import "./register.scss"

const RegisterPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/register", inputs);
      toast.success("User created successfully!");
      navigate("/login");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("User already exists!");
      } else {
        toast.error("Something went wrong!");
      }
      return;
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <span>Do you have an Account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleOnChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleOnChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleOnChange} />
            <button onClick={handleOnClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;