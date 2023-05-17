import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import Image from "react-bootstrap/Image";
function SuccessStory() {
  function renderSponsor(logo, name, description) {
    return (
      <Col>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ marginBottom: "25px" }}
        >
          <Image src={logo} alt="Logo" height={100} />
        </div>
        <div>
          <h4 className="d-flex align-items-center justify-content-center">
            {name}
          </h4>
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
            <h2 style={{ marginBottom: "15px" }}>Success Story</h2>
          </Col>
        </Row>
        <Row>
          {renderSponsor(
            intentLogo,
            "Person 1",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ratione non facilis porro quasi libero excepturi. Aspernatur quibusdam, accusantium sapiente iste sint quis aliquid quos deserunt, ad tempore, molestias voluptatibus."
          )}
          {renderSponsor(
            intentLogo,
            "Company 1",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ratione non facilis porro quasi libero excepturi. Aspernatur quibusdam, accusantium sapiente iste sint quis aliquid quos deserunt, ad tempore, molestias voluptatibus."
          )}
        </Row>
      </Container>
    </div>
  );
}
export default SuccessStory;
