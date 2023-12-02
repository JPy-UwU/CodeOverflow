import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
