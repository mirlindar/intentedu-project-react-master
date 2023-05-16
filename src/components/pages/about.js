import { Route, Routes } from 'react-router-dom';
import Navbar from "../header/navbar";
import Footer from '../footer/footer';
import AboutMain from '../about-page/aboutmain';

function About() {
  return (
    <>
    <Navbar/>
    <AboutMain/>
    <Footer/>
    </>
  );
}

export default About;
