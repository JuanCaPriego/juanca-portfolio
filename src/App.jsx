import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import HobbyPost from './pages/HobbyPost';
import CV from './pages/CV';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/hobbies' element={<Hobbies />}/>
          <Route path='/hobbies/:slug' element={<HobbyPost />}/>
          <Route path='/cv' element={<CV />}/>
        </Routes>
    </div>
  );
}

export default App
