import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Particles from '@tsparticles/react';
import Projects from './components/Projects';

function App() {
  
  return(

    <>
      <Particles/>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>

    </>
  );
}

export default App
