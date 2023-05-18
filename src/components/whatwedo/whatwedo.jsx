import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import {
  FaUniversity,
  FaHandsHelping,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./whatwedo.css";
function WhatWeDo() {
  function renderWhatWeDoElement(logo, name) {
    return (
      <Col className="m-1 whatwedo-element whatwedo-element-hover">
        <Link className="custom-link" to={`/services`}>
          <div
            style={{ padding: "15% 5% 15% 5%", fontSize: "calc(1em + 1vw)" }}
          >
            {logo}
            <h4 style={{ padding: "3% 0% 0% 0%" }}>{name}</h4>
          </div>
        </Link>
      </Col>
    );
  }
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col xs lg="2">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              fontSize: "5em",
              color:"#000"
            }}
          >
              
            <p  style={{color: "#2978b5", padding:"20px"}}>What</p> we do
          </h2>
        </Col>
        <Col xs lg="10" className="text-center">
          <Col md={{ span: 9, offset: 2 }}>
            <Row>
              {renderWhatWeDoElement(<FaUniversity />, "Foreign Education")}
              {renderWhatWeDoElement(<FaHandsHelping />, "Project Consultancy")}
            </Row>
          </Col>
          <Col md={{ span: 9, offset: 3 }}>
            <Row>
              {renderWhatWeDoElement(<FaLaptopCode />, "Software Development")}
              {renderWhatWeDoElement(<FaDatabase />, "Big Data Solutions")}
            </Row>
          </Col>
          <Col md={{ span: 9, offset: 2 }}>
            <Row>
              {renderWhatWeDoElement(
                <FaShieldAlt />,
                "Cyber Security Solutions"
              )}
              {renderWhatWeDoElement(<FaWifi />, "Network Solutions")}
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default WhatWeDo;
