import './App.css';
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience';
import Career from './components/Career';
import Badge from './assets/images/badge.png'
import Personal from './assets/images/business-card.png'
import Exp from './assets/images/experience.png'
import Arrow from './assets/images/up-arrows.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
    <div className="App">
      <Intro/>
      <About/>
      <Experience/>
      <Career/>

      <div className="nav">
        <a href="#intro" className='link'><img src={Arrow} alt="" /></a>
        <a href="#about" className='link'><img src={Personal} alt="" /></a>
        <a href="#experience"  className='link'><img src={Exp} alt="" /></a>
        <a href="#career"  className='link'><img src={Badge} alt="" /></a>
      </div>
    </div>
  );
}

export default App;
