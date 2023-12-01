import { Link } from "react-router-dom";

import { Button } from "../components/ui/Button";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/auth">
        <Button>Sign Up</Button>
      </Link>
      <Link to="/auth">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
 
export default LandingPage;