import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Navbar } from './navbar/navbar.jsx';
// import Crud from "./crud/index.jsx";
import Eight from './functionalComponents/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Eight data="me" />
  </React.StrictMode>
);

