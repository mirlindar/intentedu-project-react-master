import { Container, Row, Image, Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";

function StudyHead() {
  return (
    <div
      style={{
        backgroundColor: "#dadcde",
      }}
    >
      <Container
        style={{
          padding: "5% 0% 5% 0%",
        }}
      >
        <Row>
          <Col
            xs
            lg="2"
            className="d-flex justify-content-center align-items-center h-100 my-auto"
          >
            <Image src={intentLogo} height={80} alt="logo" />
          </Col>
          <Col xs lg="10">
            <h2 className="mb-3" style={{ fontSize: "calc(1.5em + 1.5vw)" }}>
              Study in UK
            </h2>
            <p className="mb-3" style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              qui repellendus vero itaque quidem magnam, maxime repudiandae
            </p>
            <a className="btn btn-outline-dark btn-lg" href="#!" role="button">
              Learn More
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudyHead;
