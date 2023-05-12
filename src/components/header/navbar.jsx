import logo from "../../img/intentedu.png";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navbar.css";
function NavigationBar() {
  function renderNavElement(name) {
    return (
      <Nav.Link class="nav-item fs-2" to="/" aria-current="page">
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
            {renderNavElement("Home")}
            {renderNavElement("About")}
            {renderNavElement("Services")}
            {renderNavElement("Pricing")}
            {renderNavElement("Contact")}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
