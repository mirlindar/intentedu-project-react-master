import { Route, Routes } from 'react-router-dom';
import Navbar from "../header/navbar";
import Footer from '../footer/footer';
import StudyHead from '../services/studyhead';
import ProjectHead from '../services/projecthead';
import About from '../services/about'
import SoftwareDevelopment from '../services/softwaredevelopment';
import CyberSecurity from '../services/cybersecurity';
import BigDataSolutions from '../services/bigdatasolutions';
import NetworkSolutions from '../services/networksolutions';
function Services() {
  return (
    <>
    <Navbar/>
    <About/>
    <StudyHead/>
    <ProjectHead/>
    <SoftwareDevelopment/>
    <CyberSecurity/>
    <BigDataSolutions/>
    <NetworkSolutions/>
    <Footer/>
    </>
  );
}

export default Services;