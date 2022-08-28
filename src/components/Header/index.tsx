import * as React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand>Notes TypeScript</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
