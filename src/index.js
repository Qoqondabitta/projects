import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Navbar } from './homework/Component/homework';
// import StateLesson from './state/state';
// import {HomeworkComponents} from './state/state'
// import {HomeworkState} from './state/state'
import Components5 from './styledComponents'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Components5 />
      {/* <HomeworkState /> */}
      {/* <HomeworkComponents data={['home', 'about', 'contact', 'service']}> and this is children </HomeworkComponents> */}
      {/* <StateLesson /> */}
      {/* <Navbar /> */}
  </React.StrictMode>
);

