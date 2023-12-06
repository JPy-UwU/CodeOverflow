import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.scss";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/home")
    } catch (err) {
      if (err.response.status === 401) {
        toast.error("Invalid credentials!");
      } else if (err.response.status === 404) {
        toast.error("User not found!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleOnChange} />
            <input type="password" placeholder="Password" name="pasaword" onChange={handleOnChange} />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;