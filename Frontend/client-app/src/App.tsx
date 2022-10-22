import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ShopPage from './Pages/ShopPage/ShopPage';
import ProductView from './Pages/ProductView/ProductView';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import PriceContext from './Context/PriceContext';
import Checkout from './Pages/Checkout/Checkout';
import SucessPage from './Pages/SucessPage/SucessPage';
import BurgerBar from './Components/BurgerBar/BurgerBar';

function App() {

  return (
    <>
    <header className="App">
    <Navbar/>
    <BurgerBar/>
    </header>
    <main>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<SignUpPage/>}/>
      <Route  path='/home' element={<PrivateRoute><LandingPage/></PrivateRoute>}/>
      <Route path='/products' element={<PrivateRoute><ShopPage/></PrivateRoute>}/>
      <Route path='/products/:id' element={<PrivateRoute><ProductView/></PrivateRoute>}/>
      <Route path='/cart' element={<PrivateRoute><PriceContext><ShoppingCart/></PriceContext></PrivateRoute>}/>
      <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>} />
      <Route path='/sucess' element={<PrivateRoute><SucessPage/></PrivateRoute>}/>






      <Route path='*' element={<Navigate to='/login'/>}/>
    </Routes>
    </main>
    </>
  );
}

export default App;
