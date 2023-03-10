import React from 'react';
import { createRoot } from 'react-dom/client';
import { smartHomeData } from './smartHomeData.js'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import './style.css';

const App = () => (
  <>
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={smartHomeData} />
    </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);