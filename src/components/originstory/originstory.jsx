import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col, Image } from "react-bootstrap";
import logo from "../../img/intentedu.png";

function OriginStory() {
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
          <Col xs lg="10" className="text-start">
            <h2 style={{ padding: "0% 15% 0% 15%" }}>Origin Story </h2>
            <h4 style={{ padding: "0% 15% 0% 15%" }}>
              Intent Subtitle Description
            </h4>
            <p style={{ padding: "0% 15% 0% 15%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default OriginStory;
