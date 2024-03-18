import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl } from "react-bootstrap";
import { useState } from "react";

function MyNavbar() {
  var [defaultCounter, setNewCounter] = useState(0);
  // const clickHandler = (name) => {
  //   console.log(`Click registered by ${name}`);
  // };
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Wardrobe</Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() => {
                setNewCounter = defaultCounter++;
                console.log(setNewCounter);
              }}
            >
              Pricing
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-primary">Search</Button> */}
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
