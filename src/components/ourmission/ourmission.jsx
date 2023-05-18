import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

function OurMission() {
  function renderMissionElement (name) {
    return (
      <Col className={`m-3 whatwedo-element whatwedo-element-hover`}>
        <div style={{ padding: "5% 0% 5% 0%", fontSize: "calc(1em + 1vw)" }}>
  
          <h4 style={{ padding: "3% 0% 0% 0%" }}>{name}</h4>
        </div>
      </Col>
    );
  }
  return (
    <div
      style={{
        padding: "60px 0",
      }}
      className="pt-5 pb-5"
    >
      <Container>
        <Row>

          <Col xs lg="4" style={{fontFamily:"monospace"}}>
                      <h1 style={{ padding: "25px 0", fontSize: "3.5rem" }}>Our mission</h1>  </Col>
                      <Col
                          xs
                          lg="8"
                          className="text-center"
                          style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                          }}
                      >
            <p>
              At Intent Foreign Education and Project Consultancy, we are
              dedicated to helping individuals and businesses achieve their
              goals in the UK. Whether you are seeking to further your education
              or establish a presence in the UK, our team of experienced
              professionals is here to support you every step of the way. ​ Our
              comprehensive range of services, coupled with our commitment to
              excellence and attention to detail, ensures that we deliver
              unparalleled results for our clients. Our mission is to provide
              the highest level of support and guidance to help you navigate the
              complex landscape of the UK, and to help you reach your full
              potential. ​ Let us help you turn your dreams into reality.
              Contact us today to learn more about how we can support you in
              achieving your goals in the UK.
                      </p>
                  </Col>
        
        
        </Row>
      </Container>
    </div>
  );
}
export default OurMission;
