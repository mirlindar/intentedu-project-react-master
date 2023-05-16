import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";
import Image from "react-bootstrap/Image";
function Sponsors() {
  function renderSponsor(logo, name, description) {
    return (
      <Col>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ marginBottom: "25px" }}
        >
          <Image src={logo} alt="Enrolling" height={100} />
        </div>
        <div>
          <h3 className="d-flex align-items-center justify-content-center">
            {name}
          </h3>
          <p className="d-flex align-items-center justify-content-center">
            {description}
          </p>
        </div>
      </Col>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#dadcde",
        padding: "60px 0",
        textAlign: "center",
      }}
      className="pt-5 pb-5"
    >
      <Container>
        <Row>
          <Col>
            <h2 style={{ marginBottom: "15px" }}>
              Trusted by industry-leading organizations worldwide
            </h2>
            <h4 style={{ marginBottom: "25px" }}>Sponsors Description</h4>
          </Col>
        </Row>
        <Row>
          {renderSponsor(enrollingLogo, "Enrolling", "description")}
          {renderSponsor(zetaLogo, "Zeta", "description")}
          {renderSponsor(intentLogo, "Intent", "description")}
        </Row>
      </Container>
    </div>
  );
}
export default Sponsors;
