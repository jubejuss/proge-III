import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
