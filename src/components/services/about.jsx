import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col, Image } from "react-bootstrap";
import {
  FaUniversity,
  FaHandsHelping,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";
import logo from "../../img/intent-1.png";

function About() {
  return (
    <div
      style={{
        padding: "60px 0",
        textAlign: "center",
      }}
      className="pt-5 pb-5"
    >
      <Container className="pt-5 pb-5">
        <h1
          style={{ padding: "0% 15% 0% 15%", fontSize: "calc(1.75em + 1.5vw)" }}
        >
          Intent Foreign Education and Project Consultancy{" "}
        </h1>
        
        <p style={{ padding: "0% 15% 0% 15%" }}>
        Our satisfaction guarantee is more than just a promise – it is a commitment to our clients that we take very seriously. We believe that our customers are the lifeblood of our business, and we are dedicated to providing them with exceptional products and services, along with world-class customer support.{" "}
        </p>
      </Container>
    </div>
  );
}
export default About;
