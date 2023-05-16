import { Container, Row, Image, Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";
import hasanmetin from "../../img/white.jpg";
import mehmet from "../../img/Mehmet.jpeg";
import mehmet3 from "../../img/Mehmet3.jpeg";
import mehmet4 from "../../img/Mehmet4.jpeg";

function Team() {
  function renderTeamMember(picture, name, description) {
    return (
      <Row style={{ marginBottom: "25px" }}>
        <Col>
          <div>
            <Image src={picture} alt="Enrolling" height={250} />
          </div>
        </Col>
        <Col>
          <div>
            <h3
              className="d-flex align-items-start justify-content-start"
              style={{ paddingTop: "25px" }}
            >
              {name}
            </h3>
            <p className="d-flex align-items-start justify-content-start">
              {description}
            </p>
          </div>
        </Col>
      </Row>
    );
  }
  return (
    <div className="pt-5 pb-5">
      <Container>
        <Row>
          <h2>Our team</h2>
        </Row>
        {renderTeamMember(
          hasanmetin,
          "Hasan Metin",
          "Expert on Project Management"
        )}
        {renderTeamMember(
          mehmet,
          "Zafer Kahveci",
          "Fintech Expert,working for more than 21 years in business life and voluntary activities"
        )}
        {renderTeamMember(
          mehmet3,
          "Omer Sukru",
          "System Engineer with 20 years of international experience"
        )}
        {renderTeamMember(
          mehmet4,
          "Serhat Canbaz",
          "CFO with 20 years of International Business Experience"
        )}
      </Container>
    </div>
  );
}

export default Team;
