import { Container, Row, Image, Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";

function Team() {
  function renderTeamMember(picture, name, description) {
    return (
      <Row>
        <Col>
          <div>
            <Image src={picture} alt="Enrolling" height={100} />
          </div>
        </Col>
        <Col>
          <div>
            <h3 className="d-flex align-items-start justify-content-start">
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
          zetaLogo,
          "Member 1",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officia obcaecati qui nulla assumenda numquam impedit, voluptas dolor"
        )}
        {renderTeamMember(
          zetaLogo,
          "Member 2",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officia obcaecati qui nulla assumenda numquam impedit, voluptas dolor"
        )}
        {renderTeamMember(
          zetaLogo,
          "Member 3",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officia obcaecati qui nulla assumenda numquam impedit, voluptas dolor"
        )}
      </Container>
    </div>
  );
}

export default Team;
