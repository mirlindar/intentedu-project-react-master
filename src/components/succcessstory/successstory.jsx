import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import Image from "react-bootstrap/Image";
function SuccessStory() {
  function renderSponsor(name, description) {
    return (
      <Col xs lg="6" style={{fontFamily:"monospace"}}>
   
        <div>
          <h4 className="mb-5 d-flex align-items-center justify-content-center">
            {name}
          </h4>
          <p className="d-flex align-items-center justify-content-center" style={{ padding:" 0px 60px"}}>
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
           
            "Aylin Anarat",
            "Working with Mr. Metin is delightful. He has vast knowledge and experience in his business. He is quite professional and provides great insights and counseling. He has very strong interpersonal relationship and wide network. He was very helpful and managed all aspects of our project. We are looking forward to working with him again "
          )}
          {renderSponsor(
           
            "Company 1",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ratione non facilis porro quasi libero excepturi. Aspernatur quibusdam, accusantium sapiente iste sint quis aliquid quos deserunt, ad tempore, molestias voluptatibus."
          )}
        </Row>
      </Container>
    </div>
  );
}
export default SuccessStory;
