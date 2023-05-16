import { Route, Routes } from 'react-router-dom';
import Navbar from "../header/navbar";
import Footer from '../footer/footer';
import StudyHead from '../services/studyhead';
import ProjectHead from '../services/projecthead';

function Services() {
  return (
    <>
    <Navbar/>
    <StudyHead/>
    <ProjectHead/>
    <Footer/>
    </>
  );
}

export default Services;