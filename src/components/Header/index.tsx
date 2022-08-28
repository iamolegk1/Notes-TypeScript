import * as React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header: React.FunctionComponent = () => (
  <Navbar bg="light" variant="light">
    <Container className="d-flex justify-content-center">
      <Navbar.Brand>Notes TypeScript</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
