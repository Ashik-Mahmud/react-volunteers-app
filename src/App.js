import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/volunteers' element={<Volunteers />} />
    </Routes>    
    </>
  );
}

export default App;
