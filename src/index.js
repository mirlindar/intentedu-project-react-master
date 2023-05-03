import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/header'
import reportWebVitals from './reportWebVitals';
import WhatWeDo from './components/whatwedo/whatwedo';
import Sponsors from './components/sponsors/Sponsors';
import Team from './components/team/team';
import Form from './components/footer/form';
import SiteMap from './components/footer/sitemap';
import Footer from './components/footer/footer';
import Contact from './components/footer/contact';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <WhatWeDo/>
    <Sponsors/>
    <Team/>
    <Form/>
    <SiteMap/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
