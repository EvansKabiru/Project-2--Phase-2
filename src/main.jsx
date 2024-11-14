import React from 'react';
import ReactDOM from 'react-dom/client';  //API for rendering
import './index.css';  
import App from './App.jsx';  // Import from App.js

//REACTDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
