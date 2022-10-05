import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
    <header className="App">
    <Navbar/>
    </header>
    <main>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<SignUpPage/>}/>
      <Route path='/welcome' element={<PrivateRoute><LandingPage/></PrivateRoute>}/>






      <Route path='*' element={<Navigate to='/login'/>}/>
    </Routes>
    </main>
    </>
  );
}

export default App;
