import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header.jsx';
import { Navbar } from './navbar/navbar.jsx';
import Filter from './postNavbar/advanced.jsx';
// import Crud from "./crud/index.jsx";
// import Eight from './functionalComponents/index.jsx';
// import Lesson8 from './functionalComponents/homework.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Filter />
    <Header />
  </React.StrictMode>
);

