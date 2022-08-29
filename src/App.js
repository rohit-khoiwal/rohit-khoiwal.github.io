import './App.css';
import "@fontsource/quicksand";
// Importing Components
import Navbar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skill';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
