import Mission from './components/missions';
import Navigation from './components/Navigation';
import Rocket from './components/rockets';
import { Route, Routes } from 'react-router-dom';
import './components/styles.css'
import Profile from './components/profile';

function App() {
  return (
    <div className="container">
      <Navigation />
      
      <Routes>
        <Route path='/' element={<Rocket />} />
        <Route path='/missions'element={<Mission />} />
        <Route path='/profile' element={<Profile />} />
   

      </Routes>
      
      
    </div>
  );
}

export default App;
