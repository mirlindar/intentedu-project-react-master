import logo from "../../img/intentedu.png";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import "./navbar.css";

function NavigationBar() {
  const location = useLocation();
  function renderNavElement(name, to, isCurrentPage) {
    return (
      <Nav.Link
        className={`nav-item fs-5 navbar-item-hover ${
          isCurrentPage ? "current-page" : ""
        }`}
        href={`/${to}`}
        aria-current="page"
      >
        {name}
      </Nav.Link>
    );
  }
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar-top">
      <Container>
        <Navbar.Brand>
          <Image src={logo} alt="logo" height={100} className="responsive" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {renderNavElement("Home", "", location.pathname === "/")}
            {renderNavElement("About", "about", location.pathname === "/about")}
            {renderNavElement(
              "Services",
              "services",
              location.pathname === "/services"
            )}
            {renderNavElement("Pricing", "", location.pathname === "/pricing")}
            {renderNavElement("Contact", "", location.pathname === "/contact")}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
