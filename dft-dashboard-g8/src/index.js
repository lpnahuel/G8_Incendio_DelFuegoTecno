import React from 'react';
import ReactDOM from 'react-dom/client';
import MainDashboard from './components/MainDashboard';
import { BrowserRouter } from "react-router-dom";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainDashboard />
    </BrowserRouter>

  </React.StrictMode>
);
