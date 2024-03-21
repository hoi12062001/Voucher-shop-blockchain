import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import FooterSesion from './FrontEnd/layout/user/footer';
import HeaderSesion from './FrontEnd/layout/user/Header';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Header = ReactDOM.createRoot(document.getElementById('Header'));
const Footer = ReactDOM.createRoot(document.getElementById('Footer'));
// Header.render(
//   <HeaderSesion></HeaderSesion>
// );

root.render( 
      <React.StrictMode>
      <App />
      </React.StrictMode>  
);

// Footer.render(
//   <FooterSesion></FooterSesion>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); 
