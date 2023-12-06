import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import LadningPage from "./pages/landing/Landing";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const router = createBrowserRouter([
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
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);


function App() {
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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
