import React, { FC } from "react";
import './Menu.css'
import { Container, Nav, Navbar } from "react-bootstrap";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Menu: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div className="not-authorized-menu">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CMM Trade</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Вход</Nav.Link>
              <Nav.Link href="/signup">Регистрация</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
