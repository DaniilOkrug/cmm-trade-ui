import React, { FC } from "react";
import "./DashboardMenu.css";
import { Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Menu from "../../components/Menu/Menu";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const DashboardMenu: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CMM Trade</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#signup">Профиль</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#signup">Поддержка</Nav.Link>
            <NavDropdown title="Язык" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Русский</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Анлийский</NavDropdown.Item>
            </NavDropdown>
            <Col>
              <p className="white">Balance</p>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardMenu;
