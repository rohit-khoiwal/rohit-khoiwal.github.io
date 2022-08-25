import './App.css';
import "@fontsource/quicksand";
// Importing Components
import Navbar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
