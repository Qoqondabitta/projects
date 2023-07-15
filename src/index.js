import React from 'react';
import ReactDOM from 'react-dom/client';
// import Video from './styledComponents/homeworkstyledcomponents.jsx';
// import { Navbar } from './homework/Component/homework';
import { Navbar } from './navbar/navbar.jsx';
// import StateLesson from './state/state';
// import {HomeworkComponents} from './state/state'
// import {HomeworkState} from './state/state'
// import Video from './styledComponents/homeworkstyledcomponents'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

