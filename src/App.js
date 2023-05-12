import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/about';

function App() {
  const inputScript = (e) => {
    console.log(e.target.value);
  }

  return (
    <Routes>
      <Route path='/'></Route>
      <Route path='/about' element={About}></Route>
    </Routes>
  );
}

export default App;
