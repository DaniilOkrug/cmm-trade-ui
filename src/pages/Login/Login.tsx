import React, { FC, useEffect } from "react";
import "./Login.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Menu from "../../components/Menu/Menu";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { login } from "../../store/reducers/ActionCreator";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(login());
  }, []);

  return (
    <div>
      <Menu />

      <div className="login-container">
        <Container fluid>
          <Row className="d-flex">
            <Col></Col>
            <Col xs={12} md={12} lg={8} xl={5} xxl={4}>
              <Form className="login-form shadow p-4">
                <Row className="d-flex text-center mb-2">
                  <h2>Вход в аккаунт</h2>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email адрес</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Введите email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                  />
                </Form.Group>

                <Row className="d-flex justify-content-center">
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    xl={6}
                    xxl={6}
                    className="d-flex justify-content-center"
                  >
                    <Button
                      className="login-btn px-5 py-2"
                      variant="primary"
                      type="submit"
                    >
                      Войти
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <p className="forgot-password text-end">
                    Восстановить <a href="#">пароль?</a>
                  </p>
                </Row>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
