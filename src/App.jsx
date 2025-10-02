// src/App.jsx
/*import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
 
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
 
export default App;
*/
 
 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyles.css';
 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
 
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/*<Services />*/}
      <Contact />
      <Footer />
    </>
  );
}
 
export default App;