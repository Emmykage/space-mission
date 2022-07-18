import Mission from './components/mission';
import Navigation from './components/Navigation';
import Rocket from './components/rockets';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Routes>
        <Route path='/' element={<Rocket />} />
        <Route path='mission'element={<Mission />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
