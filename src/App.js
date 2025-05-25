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
import PathToGoogle from './Components/Events/PathToGoogle';
import CP_27 from './Components/Events/CP_27';
import LogoDesign from './Components/Events/LogoDesign';

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
        <Route path='/events/PathToGoogle' element={<PathToGoogle/>} />
        <Route path='/events/CP_27' element={<CP_27/>} />
        <Route path='/events/LogoDesign' element={<LogoDesign/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
