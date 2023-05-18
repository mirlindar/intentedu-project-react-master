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
        backgroundColor: "#dadcde",
        padding: "60px 0",
        textAlign: "center",
      }}
      className="pt-5 pb-5"
    >
      <Container className="pt-5 pb-5">
        <Row>
          <Col xs lg="2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image src={logo} alt="logo" height={100} />
            </div>
          </Col>
          <Col xs lg="10" className="text-center">
            <h1 style={{ padding: "2% 8%", fontSize: "calc(1em + 1vw)" }}>
              Intent Foreign Education and Project Consultancy{" "}
            </h1>
            <h4>Follow your path to university abroad</h4>
<<<<<<< HEAD
            <p style={{ padding: "0% 7% 0% 7%", margin:"3%",fontSize: "calc(0.5em + 0.5vw)" }}>
            
International students can prepare or apply for a degree from a leading university in the USA, Canada, UK, Australia or New Zealand with Intent. No matter where you are in the world, we have a study option that’s right for you.{" "}
Moreover, our expertise in project consultancy will help you gain a competitive advantage against similar companies from Turkey and Balkan region by having a presence in UK. 
=======
            <p style={{ padding: "0% 7% 0% 7%", margin: "3%" }}>
              International students can prepare or apply for a degree from a
              leading university in the USA, Canada, UK, Australia or New
              Zealand with Intent. No matter where you are in the world, we have
              a study option that’s right for you. Moreover, our expertise in
              project consultancy will help you gain a competitive advantage
              against similar companies from Turkey and Balkan region by having
              a presence in UK.
>>>>>>> 8af10e5e8ba12cf4b8cc60acc94e7bc45ec25f35
            </p>
            <a
              className="btn btn-outline-dark btn-lg"
              href="/about"
              role="button"
              style={{ margin: "3% 0" }}
            >
              Read More
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
