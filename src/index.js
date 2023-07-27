import React from 'react';
import ReactDOM from 'react-dom/client';
// import Root2 from './contextCopy/root';
// import Hcvtutorial from './context/Homewrok/HomeContext/body';
// import Localstorage from './localstorage/localstorage';
// import HomeworkReduce from './reducer/homeworkReduce/homeworkReduce';
// import Header from './header/header.jsx';
// import { Navbar } from './navbar/navbar.jsx';
// import Filter from './postNavbar/advanced.jsx';
// import Reducer from './reducer/reducer.jsx';
// import Root from "./context/root"
// import Crud from "./crud/index.jsx";
// import Eight from './functionalComponents/index.jsx';
// import Lesson8 from './functionalComponents/homework.jsx';
import Memo from './memo/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar />
    <Filter />
    <Header /> */}
    
    <Memo />    
  </React.StrictMode>
);

