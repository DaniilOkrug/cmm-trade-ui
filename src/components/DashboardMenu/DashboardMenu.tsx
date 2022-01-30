import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./DashboardMenu.css";
import { Button, Col, Nav, Navbar } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/reducers/ActionCreator";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const DashboardMenu: FC<TitleProps> = ({ title, subtitle, children }) => {
  const dispatch = useAppDispatch();

  return (
    <Navbar
      className="dashboard_menu"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="brand" href="#home">
        <Link to="">CMM Trade</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Item>
            <Link to="">Главная</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="profile">Профиль</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="statistics">Статистика</Link>
          </Nav.Item>
          <Nav.Item>
            <Col className="menu-info">
              <p className="info-email">example@gmail.com </p>
              <p className="info-balance">Balance: 1000$</p>
            </Col>
          </Nav.Item>
          <Nav.Item>
            <Button onClick={() => dispatch(logout())} className="logout-btn" variant="secondary">
              Выйти
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardMenu;
