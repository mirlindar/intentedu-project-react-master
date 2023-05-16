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
import logo from "../../img/intentedu.png";

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
        <h4>Intent Subtitle Description</h4>
        <p style={{ padding: "0% 15% 0% 15%" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
      </Container>
    </div>
  );
}
export default About;
