import Form from "react-bootstrap/Form";
function FormContact() {
  return (
    <Form class="col-md-4">
      <h2>Contact Us!</h2>
      <Form action="#">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" placeholder="Message" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="button" value="Submit" />
        </Form.Group>
      </Form>
    </Form>
  );
}
export default FormContact;
