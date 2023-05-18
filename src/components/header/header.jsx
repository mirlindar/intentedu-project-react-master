import Navbar from "./navbar";
import Button from "react-bootstrap/Button";
import background from "../../img/intent_homepage.png";
import React from "react";

function Header({ title }) {
  return (
    <header>
      <Navbar />
      <div style={{ paddingLeft: 0 }}>
        <div
          className="text-center bg-image"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "7% 20% 12% 20%",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-5" style={{ fontSize: "calc(2em + 2vw)" }}>
                  Intent Foreign Education and Project Consultancy
                </h1>
                <p className="mb-5" style={{ fontSize: "calc(0.5em + 1vw)" }}>
                  If the UK is your land of dreams, we would be very delighted
                  to help you on developing your career or growing your business
                  through our great dedication, great experience and list of
                  services that we offer.
                </p>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="/about"
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

export default Header;
