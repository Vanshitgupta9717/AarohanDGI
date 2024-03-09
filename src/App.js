import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Components/About';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Events from './Components/Events/Events';
import CodeZenith from './Components/Events/CodeZenith';
import CodeNexa from './Components/Events/CodeNexa';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/CodeZenith' element={<CodeZenith/>} />
        <Route path='/events/CodeNexa' element={<CodeNexa/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
