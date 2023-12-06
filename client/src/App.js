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
import ProfilePage from "./pages/profile/Profile";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const currentUser = true;

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
          path: "/profile/:id",
          element: <ProfilePage />,
        },
        {
          path: "/post/:id",
          element: <PostPage />,
        },
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
