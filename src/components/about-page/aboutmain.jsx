import { Container, Row, Image, Col } from "react-bootstrap";
import background from "../../img/goal.jpg";
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
              
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              
            }}
          >   
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(53, 60, 66, 0.75)",
              padding: "7% 20% 12% 20%",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100" style={{color:"white"}}>
              <div>
                <h1 className="mb-5" style={{ fontSize: "calc(1em + 2vw)" }}>
                Expand your horizons, find your focus, your drive and your voice
                </h1>
                <p className="mb-4" style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
                Mission Statement of the company is offering quality through dedication, experience the at the best location while helping students and institutions achieve their goals. The vision statement on the other hand is becoming a significant player in the market by providing qualified services through innovation.
                </p>
                <a
                  className="btn btn-outline-light btn-lg"
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
      </div>
    </header>
  );
}

export default AboutMain;
