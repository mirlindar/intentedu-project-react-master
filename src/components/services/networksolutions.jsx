import { Container, Row, Image, Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";

function NetworkSolutions() {
  return (
    <div
      style={{
        padding: "60px 0",
      }}
      className="pt-5 pb-5"
    >
      <Container
        style={{
          padding: "5% 0% 5% 0%",
        }}
      >
        <Row>
          <Col xs lg="10">
            <h2 className="mb-3" style={{ fontSize: "calc(1.5em + 1.5vw)" }}>
              Network Solutions
            </h2>
            <p className="mb-3" style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              qui repellendus vero itaque quidem magnam, maxime repudiandae
            </p>
            <div>
              <a
                className="btn btn-outline-dark btn-lg"
                href="#!"
                role="button"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col
            xs
            lg="2"
            className="d-flex justify-content-center align-items-center h-100 my-auto"
          >
            <Image src={intentLogo} height={80} alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NetworkSolutions;
