import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Home from './components/screens/home/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
  <React.StrictMode>
    {/* <App /> */}
    <Home/>
    <h1>Hola  mundo</h1>
    <h1>Hola  manu</h1>
    <h1> Hola Flor</h1>

  </React.StrictMode>
);
reportWebVitals();
