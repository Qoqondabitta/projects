import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Navbar } from './navbar/navbar.jsx';
// import Crud from "./crud/index.jsx";
// import Eight from './functionalComponents/index.jsx';
import Lesson8 from './functionalComponents/homework.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lesson8 data="me" info="he" />
  </React.StrictMode>
);

