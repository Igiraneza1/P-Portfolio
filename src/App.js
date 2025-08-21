import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Start from './components/Start';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TidioChat from './tidio/TidioChat'; 

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div id="/"><Start /></div>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience/></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
        
        <Footer />
        <TidioChat />
        <ScrollToTop />
        
      </div>
    </>
  );
}

export default App;
