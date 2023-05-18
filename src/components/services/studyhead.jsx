import { Container, Row, Image, Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";

function StudyHead() {
  return (
    <div
      style={{
        backgroundColor: "#dadcde",
      }}
    >
      <Container
        style={{
          padding: "5% 0% 5% 0%",
        }}
      >
        <Row>
          <Col
            xs
            lg="2"
            className="d-flex justify-content-center align-items-center h-100 my-auto"
          >
            <Image src={intentLogo} height={80} alt="logo" />
          </Col>
          <Col xs lg="10">
            <h2 className="mb-3" style={{ fontSize: "calc(1.5em + 1.5vw)" }}>
              Study in UK
            </h2>
            <p className="mb-3" style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
            The UK has a long-standing reputation for providing high-quality education and is considered one of the best places in the world to pursue higher education. With a diverse range of universities and institutions, the UK offers students a wide variety of courses to choose from, including undergraduate, postgraduate, and research degrees.
It can be a transformative experience, offering students the opportunity to gain valuable skills and knowledge, expand their horizons, and develop their personal and professional networks. Furthermore, the UK offers a wide range of extracurricular activities, from sports and music to volunteering and work experience opportunities, allowing students to enrich their university experience and gain valuable practical skills.
In terms of logistics, international students who wish to study in the UK need to obtain a student visa, which requires meeting certain requirements, such as proof of acceptance to a recognized UK university, sufficient funds to support oneself, and evidence of English language proficiency.<br/>
Below you may find some of the services that Intent offers for you(are on the web): </p>
<p style={{fontWeight:"700",fontSize: "calc(0.5em + 0.5vw)"}}>Improve English Skills: Beginner, General, Vacation and Travel English, Communication Skills, Business English, Standard, Intensive, IELTS Preparation, TOEFL Preparation.<br/>
Students Service: Choosing the most qualified institution, Booking an entrance exam, Academic Advice, Pre-arrival Support, Campus visit with the staff, Explore the campus and facilities, Issuing document for particular reason, Assist on choosing accommodation.<br/>
Summer & Winter Camps: For people on the range of age 11-30. </p>  
            <a className="btn btn-outline-dark btn-lg" href="#!" role="button">
              Learn More
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudyHead;
