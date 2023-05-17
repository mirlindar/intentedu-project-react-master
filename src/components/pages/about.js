import { Route, Routes } from 'react-router-dom';
import Navbar from "../header/navbar";
import Footer from '../footer/footer';
import AboutMain from '../about-page/aboutmain';
import OriginStory from '../originstory/originstory';
import OurMission from '../ourmission/ourmission';
import SuccessStory from '../succcessstory/successstory';

function About() {
  return (
    <>
    <Navbar/>
    <AboutMain/>
    <OriginStory/>
    <OurMission/>
    <SuccessStory/>
    <Footer/>
    </>
  );
}

export default About;
