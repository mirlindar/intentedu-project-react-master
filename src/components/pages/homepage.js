import { Route, Routes } from 'react-router-dom';
import Navbar from "../header/navbar";
import Header from '../header/header';
import WhatWeDo from '../whatwedo/whatwedo';
import Sponsors from '../sponsors/Sponsors';
import Team from '../team/team';
import Footer from '../footer/footer';

function Homepage() {
  return (
    <>
    <Header/>
    <WhatWeDo/>
    <Sponsors/>
    <Team/>
    <Footer/>
    </>
  );
}

export default Homepage;