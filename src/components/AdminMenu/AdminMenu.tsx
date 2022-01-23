import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Col, Button } from "react-bootstrap";
import "./AdminMenu.css";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const AdminMenu: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <Navbar
      className="dashboard_menu"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="brand" href="#home">
        <Link to="/admin">CMM Trade</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Item>
            <Link to="/admin">Главная</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="settings">Настройки</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="blacklist">Черный список</Link>
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

export default AdminMenu;
