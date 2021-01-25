import React from 'react';
import ReactDOM from 'react-dom';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.min.css';
import './css/sb-admin-2.min.css';

// js
import 'bootstrap/dist/js/bootstrap.bundle.min';
import sb2admin from "./js/sb-admin-2";

//  import App from './App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
