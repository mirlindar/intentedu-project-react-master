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

function WhatWeDo() {
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col xs lg="2">
          <h1>
            <span>What</span> we do
          </h1>
        </Col>
        <Col xs lg="10">
          <Row>
            <Col>
              <FaUniversity />
              <h4>Foreign Education</h4>
            </Col>
            <Col>
              <FaHandsHelping />
              <h4>Project Consultancy</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <FaLaptopCode />
              <h4>Software Development</h4>
            </Col>
            <Col>
              <FaDatabase />
              <h4>Big Data Solutions</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <FaShieldAlt />
              <h4>Cyber Security</h4>
            </Col>
            <Col className="">
              <FaWifi />
              <h4>Network Solution</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default WhatWeDo;
