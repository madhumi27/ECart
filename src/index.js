import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Addproduct from './components/addproduct';
import ViewProduct from './components/viewproduct';
import Updateproduct from './components/updateproduct';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/> </React.StrictMode>
);


reportWebVitals();
