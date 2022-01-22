import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./DashboardMenu.css";
import { Button, Col, Nav, Navbar } from "react-bootstrap";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const DashboardMenu: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <Navbar
      className="dashboard_menu"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="brand" href="#home">
        <Link to="/office">CMM Trade</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Item>
            <Link to="profile">Профиль</Link>
          </Nav.Item>
          <Nav.Item>
            <Col className="menu-info">
              <p className="info-email">example@gmail.com </p>
              <p className="info-balance">Balance: 1000$</p>
            </Col>
          </Nav.Item>
          <Nav.Item>
            <Button className="logout-btn" variant="secondary">
              Выйти
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardMenu;
