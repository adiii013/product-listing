import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './layout/home/Home';
import Login from './layout/auth/Login';
import Signup from './layout/auth/Signup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { AddProducts } from './features/productSlice';
import { Authorization } from './features/userSlice';




function App() {
  const dispatch = useDispatch();
  
  const auth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('https://product-listing-40mx.onrender.com/user/verify', {
        headers: {
          'Authorization': token,
        }
      });
      if (response.data.success === true) {
        const data = response.data;
        const user = {
          email: data.user.email,
          name: data.user.name,
          login: data.success,
          id:data.user._id
        }
        dispatch(Authorization(user));
      }
    }
  }
  
  const loadProducts = async () => {
    const response = await axios.get('https://product-listing-40mx.onrender.com/product');
    const productsData = response.data.products
    const data = {
      productsData: productsData,
      getProducts: true
    }
    dispatch(AddProducts(data))
  }
  
  
  useEffect(() => {
    auth();
    loadProducts();
  }, [])


  return (
    <div className="App">
    <div id="popup-root" />
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
