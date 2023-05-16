import logo from "../../img/intentedu.png";

function Contact(params) {
  return (
    <div class="col-md-4">
      <img src={logo} height={80} alt="logo" class="responsive" />
      <p style={{ color: "white" }}>+44 789 847 6951</p>
      <p>
        <a href="mailto:hmetin@intentedu.com" style={{ color: "white" }}>
          hmetin@intentedu.com
        </a>
      </p>
    </div>
  );
}
export default Contact;
