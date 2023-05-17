import logo from "../../img/intent-1.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Contact(params) {
  return (
    <div class="col-md-6 mr-auto">
      <img src={logo} height={80} alt="logo" />
      <div style={{ color: "white" }}>
      <p> <FaPhone /> +44 789 847 6951</p>
      </div>
      <div style={{ color: "white" }}>
       <p><FaEnvelope /> <a href="mailto:hmetin@intentedu.com">hmetin@intentedu.com</a> </p>
        
      </div>
    </div>
  );
}
export default Contact;
