import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>

      </div>
    </>
  );
}

export default App;
