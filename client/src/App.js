import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <div className="h-[100vh] w-full">
      <Router>
        <Routes>
          <Route exact path='/' element={ <LandingPage /> } />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;