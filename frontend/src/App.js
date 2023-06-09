import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './layout/home/Home';
import Login from './layout/auth/Login';
import Signup from './layout/auth/Signup';

function App() {
  return (
    <div className="App">
    <div id="popup-root" />
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
