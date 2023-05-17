import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";
import Image from "react-bootstrap/Image";
function OurMission() {
  return (
    <div
      style={{
        padding: "60px 0",
      }}
      className="pt-5 pb-5"
    >
      <Container>
        <Row>
          <Col xs lg="4">
            <h2 style={{ marginBottom: "15px" }}>Our mission</h2>
            <h4 style={{ marginBottom: "25px" }}>
              Intent Subtitle Description
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur expedita nobis voluptatibus a non quo sapiente tempore
              hic, excepturi fuga id facere atque quae architecto voluptatem
              dolore velit. Sint, similique.
            </p>
          </Col>
          <Col xs lg="8">
            At Intent Foreign Education and Project Consultancy, we are
            dedicated to helping individuals and businesses achieve their goals
            in the UK. Whether you are seeking to further your education or
            establish a presence in the UK, our team of experienced
            professionals is here to support you every step of the way. ​ Our
            comprehensive range of services, coupled with our commitment to
            excellence and attention to detail, ensures that we deliver
            unparalleled results for our clients. Our mission is to provide the
            highest level of support and guidance to help you navigate the
            complex landscape of the UK, and to help you reach your full
            potential. ​ Let us help you turn your dreams into reality. Contact
            us today to learn more about how we can support you in achieving
            your goals in the UK.
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}
export default OurMission;
