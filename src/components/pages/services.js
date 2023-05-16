import { Route, Routes } from 'react-router-dom';
import Navbar from "../header/navbar";
import Footer from '../footer/footer';
import StudyHead from '../services/studyhead';
import ProjectHead from '../services/projecthead';
import About from '../services/about'
function Services() {
  return (
    <>
    <Navbar/>
    <About/>
    <StudyHead/>
    <ProjectHead/>
    <Footer/>
    </>
  );
}

export default Services;