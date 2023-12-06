import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import LadningPage from "./pages/landing/Landing";
import HomePage from "./pages/home/Home";
import ProfilePage from "./pages/profile/Profile";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/",
    element: <LadningPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
