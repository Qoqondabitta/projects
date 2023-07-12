import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './homework/Component/homework';
import StateLesson from './state/state';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar />
      <StateLesson />
  </React.StrictMode>
);

