import React, { FC } from "react";
import "./SignUp.css";
import {
  Container,
  Col,
  Form,
  Row,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import Menu from "../../components/Menu/Menu";

const SignUp: FC = () => {
  return (
    <div>
      <Menu />

      <div className="signup-container">
        <Container fluid>
          <Row className="justify-content-md-center justify-content-lg-center">
            <Col xs={12} md={12} lg={8} xl={7} xxl={6}>
              <Form className="signup-form shadow p-5">
                <Row className="d-flex text-center mb-2">
                  <h2>Регистрация</h2>
                </Row>

                <Row>
                  <FormGroup as={Col} className="mb-3">
                    <FormLabel>Полное имя</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Введите имя"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup as={Col} className="mb-3">
                    <FormLabel>Email адрес</FormLabel>
                    <FormControl
                      type="email"
                      placeholder="Введите email"
                    ></FormControl>
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup as={Col} className="mb-3">
                    <FormLabel>Введите пароль</FormLabel>
                    <FormControl
                      type="password"
                      placeholder="Пароль"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup as={Col} className="mb-3">
                    <FormLabel>Введите повторно пароль</FormLabel>
                    <FormControl
                      type="password"
                      placeholder="Пароль"
                    ></FormControl>
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup as={Col} className="mb-3">
                    <FormCheck
                      type="checkbox"
                      label="Нажимая 'Создать аккаунт', я соглашаюсь с Пользоватльеским соглашением "
                    />
                  </FormGroup>
                </Row>

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
                      className="signup-btn px-5 py-2"
                      variant="primary"
                      type="submit"
                    >
                      Создать аккаунт
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
