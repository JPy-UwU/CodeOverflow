import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <div className="h-[100vh] w-full">
      <Router>
        <Routes>
          <Route exact path='/' element={ <LandingPage /> } />
          <Route exact path='/auth' element={ <AuthPage /> } />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;