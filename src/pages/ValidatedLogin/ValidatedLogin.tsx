import React, { FC } from "react";
import "./ValidatedLogin.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Menu from "../../components/Menu/Menu";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { login } from "../../store/reducers/ActionCreator";
import { Formik } from "formik";
import * as Yup from "yup";

const ValidatedLogin: FC = () => {
  const { userError: error } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email должен соответствовать форме example@mail.com').required("Email не введен!"),
    password: Yup.string()
      .required("Пароль не введен!")
      .min(8, "Пароль должен быть длинной в 8 символов!")
      .matches(/(?=.*[0-9])/, "Пароль должен включать цифры!"),
  });

  return (
    <div>
      <Menu />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
            dispatch(login(values));
          }, 500);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          const {
            values,
            errors,
            touched,
            isValid,
            isSubmitting,
            handleChange,
            handleSubmit,
          } = formik;
          return (
            <div className="login-container">
              <Container fluid>
                <Row className="d-flex">
                  <Col></Col>
                  <Col xs={12} md={12} lg={8} xl={5} xxl={4}>
                    <Form
                      onSubmit={handleSubmit}
                      className="login-form shadow p-4"
                    >
                      <Row className="d-flex text-center mb-2">
                        <h2>Вход в аккаунт</h2>
                      </Row>

                      <Form.Group className="mb-3">
                        {error && (
                          <div className="input-feedback">Неверный email или пароль</div>
                        )}
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Введите email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          placeholder="Введите пароль"
                          value={values.password}
                          onChange={handleChange}
                        />
                        {errors.password && touched.password && (
                          <div className="input-feedback">
                            {errors.password}
                          </div>
                        )}
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
                            disabled={!isValid || isSubmitting}
                          >
                            Войти
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default ValidatedLogin;
