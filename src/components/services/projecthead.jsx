import { Container, Row, Image, Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";

function ProjectHead() {
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
              Project Consultancy
            </h2>
            <p className="mb-3" style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
            We offer a range of expert support and guidance to clients who are managing or implementing projects. These services are designed to help clients achieve their project goals and objectives efficiently and effectively, while minimizing project risks and ensuring project quality.
Please refer to the information below to learn about the ways in which we can offer our assistance (are on the web):<br/></p>
<p style={{fontWeight:"700",fontSize: "calc(0.5em + 0.5vw)"}}>Business Planning: Services to companies, universities and NGO, Construct project proposals, Implement the proposal, Create company image.<br/>
Investment: Prepare business pitch, Invest on appropriate projects, Direct to fund opportunities.<br/>
Grant Application: Horizon Europe, UK, Erasmus Plan.
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

export default ProjectHead;
