import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import FooterSesion from "./FrontEnd/layout/footer";
import HeaderSesion from "./FrontEnd/layout/Header";
// import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Header = ReactDOM.createRoot(document.getElementById("Header"));
const Footer = ReactDOM.createRoot(document.getElementById("Footer"));
const queryClient = new QueryClient();
Header.render(<HeaderSesion></HeaderSesion>);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
Footer.render(<FooterSesion></FooterSesion>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
