import { Container } from "react-bootstrap";

function Sponsors() {
  return (
    <Container>
      <h1>Trusted by industry-leading organizations worldwide</h1>
      <h4>Sponsors Description</h4>

      <div class="row">
        <div class="col-md-4">
          <img src="./images/enrolling.png" alt="Enrolling" />
          <div class="caption">
            <h3>Enrolling</h3>
            <p>fdgdd</p>
          </div>
        </div>

        <div class="col-md-4">
          <img src="./images/zeta.png" alt="Zeta" />
          <div class="caption">
            <h3>Zeta</h3>
            <p>dgfdgdg</p>
          </div>
        </div>

        <div class="col-md-4">
          <img src="./images/intentedu.png" alt="Intent" />
          <div class="caption">
            <h3>Intent</h3>
            <p>dfgdg</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Sponsors;
