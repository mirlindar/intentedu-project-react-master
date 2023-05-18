import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col, Image } from "react-bootstrap";
import story from "../../img/startup.jpg";

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
          { <Col xs lg="5">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image src={story} style={{ borderRadius:"6px", boxShadow:"rgba(0,0,0,0.4) -18px -18px"}} alt="story" height={450} width={500}/>
            </div>
          </Col> }
          <Col xs lg="7" className="text-start" style={{fontFamily:"monospace"}}>
            <h2 style={{ padding: "0% 10% 3% 10%" }}>Origin Story </h2>
          
            <p style={{ padding: "0% 10% 0% 10%" }}>
            Welcome to our company, where we specialize in providing high-quality project consultancy and foreign education services!

At our company, we understand that every project is unique, and that's why we offer tailored solutions to meet the specific needs and requirements of each of our clients. Our team of experienced consultants has a wealth of knowledge and expertise in project management, and we are committed to helping our clients achieve their project goals, no matter how complex or challenging the project may be.

In addition to project consultancy, we also offer foreign education services to individuals who are looking to enhance their skills and advance their careers. Our team of education experts works closely with our clients to identify the best educational opportunities that align with their career goals and aspirations. 

At our company, we take pride in our commitment to excellence, and we are dedicated to providing our clients with the highest level of service and support. Whether you need project consultancy or foreign education services, you can count on us to provide you with the expert guidance and support you need to succeed.<br/>

<span style={{ fontWeight: "600" }}>What we do: </span>  At our company, we offer a wide range of services to help our clients achieve their goals. Whether you're looking to pursue higher education abroad, implement a complex project, or develop innovative software solutions, we have the expertise and experience to help you succeed. Whatever your needs may be, we are committed to providing you with the highest level of service and support to help you achieve your goals
.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default OriginStory;
