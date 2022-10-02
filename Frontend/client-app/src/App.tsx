import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import NavigationForm from './Components/NavigationForm/NavigationForm';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <NavigationForm action='SIGNUP'/>
    </div>
  );
}

export default App;
