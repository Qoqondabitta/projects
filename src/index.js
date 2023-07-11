import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './homework/homework';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar data={['Home', 'Service', 'About']}>
        salom
      </Navbar>
      {/* <Navbar info="firstProp" /> */}
  </React.StrictMode>
);

