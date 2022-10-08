import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BurgerContext from './Context/BurgerContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Provider store={store}>
    
  <React.StrictMode>
  <BurgerContext>
    <App />
    </BurgerContext>
  </React.StrictMode>
  
  </Provider>
  </BrowserRouter>
);

