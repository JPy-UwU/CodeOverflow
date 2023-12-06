import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LadningPage from "./pages/landing/Landing";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";

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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
