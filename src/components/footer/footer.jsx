import { Col, Container, Row } from "react-bootstrap";
import Form from "./form";
import SiteMap from "./sitemap";
import Contact from "./contact";

function Footer() {
  return (
    <>
      <div className="p-2 pt-5" style={{ backgroundColor: "#0077b8" }}>
        <Container>
          <Row>
            <Col>
              <Form />
            </Col>{" "}
            <Col>
              <SiteMap />
            </Col>{" "}
            <Col>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#006298", color: "white" }}>
        <Container>
          <p className="text-center m-0 p-2">
            &copy; 2023 by Intent. All rights reserved.
          </p>
        </Container>
      </div>
    </>
  );
}
export default Footer;
