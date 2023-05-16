import logo from "../../img/intentedu.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Contact(params) {
  return (
    <div class="col-md-4">
      <img src={logo} height={80} alt="logo" class="responsive" />
      <div style={{ color: "white" }}>
        <FaPhone />
        <p> +44 789 847 6951</p>
      </div>
      <div style={{ color: "white" }}>
        <FaEnvelope />
        <a href="mailto:hmetin@intentedu.com">hmetin@intentedu.com</a>
      </div>
    </div>
  );
}
export default Contact;
