import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";

import "./style.scss";
import LadningPage from "./pages/landing/Landing";
import HomePage from "./pages/home/Home";
import PostPage from "./pages/post/Post";
import LoginPage from "./pages/login/Login";
import UsersPage from "./pages/users/Users";
import TagsPage from "./pages/tags/Tags";
import CreatePage from "./pages/create/Create";
import RegisterPage from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const currentUser = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);


  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LadningPage />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/create",
          element: <CreatePage />,
        },
        {
          path: "/post/:id",
          element: <PostPage />,
        },
        {
          path: "/users",
          element: <UsersPage />,
        },
        {
          path: "/tags",
          element: <TagsPage />,
        }
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
