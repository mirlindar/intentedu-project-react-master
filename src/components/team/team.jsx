import { Container } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";

function Team() {
  return (
    <Container>
      <h1>Our team</h1>
      <div class="row">
        <div class="col-md-4">
          <img src={zetaLogo} alt="Zeta" />
        </div>
        <div class="col-md-8">
          <h2>Team 1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            officia obcaecati qui nulla assumenda numquam impedit, voluptas
            dolor
          </p>
          <button>
            <a href="#">Read More</a>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img src={enrollingLogo} alt="Enrolling" />
        </div>
        <div class="col-md-8">
          <h2>Team 2</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            officia obcaecati qui nulla assumenda numquam impedit, voluptas
            dolor
          </p>
          <button>
            <a href="#">Read More</a>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img src={intentLogo} alt="Intent" />
        </div>
        <div class="col-md-8">
          <h2>Team 3</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            officia obcaecati qui nulla assumenda numquam impedit, voluptas
            dolor
          </p>
          <button>
            <a href="#">Read More</a>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Team;
