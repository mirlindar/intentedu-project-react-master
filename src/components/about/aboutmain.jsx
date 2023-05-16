import { Container, Row, Image, Col } from "react-bootstrap";
import intentLogo from "../../img/intentedu.png";
import enrollingLogo from "../../img/enrolling.png";
import zetaLogo from "../../img/zeta.png";

function AboutMain() {
  return (
    <header>
      <div style={{ paddingLeft: 0 }}>
        <div className="text-center bg-image">
          <div
            style={{
              padding: "7% 20% 7% 20%",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div>
                <h1 className="mb-3" style={{ fontSize: "calc(2em + 2.5vw)" }}>
                  WE HELP YOU ACHIEVE YOUR GOALS
                </h1>
                <p className="mb-3" style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, qui repellendus vero itaque quidem magnam, maxime
                  repudiandae
                </p>
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="#!"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutMain;
