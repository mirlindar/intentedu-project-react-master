import { Col, Container, Row } from "react-bootstrap";
import Form from "./form";
import SiteMap from "./sitemap";
import Contact from "./contact";

function Footer() {
  return (
    <>
      <div className="bg-primary p-2">
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
      <div className="bg-secondary">
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
