import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/about';
import Services from './components/pages/services';
import Homepage from './components/pages/homepage';

function App() {
  const inputScript = (e) => {
    console.log(e.target.value);
  }

  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
    </Routes>
  );
}

export default App;
