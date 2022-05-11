import React, { FC } from "react";
import "./ValidatedSignUp.css";
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
import { registration } from "../../store/reducers/ActionCreator";
import { useAppDispatch } from "../../hooks/redux";
import { Formik } from "formik";
import * as Yup from "yup";

const ValidatedSignUp: FC = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Имя не введено!"),
    email: Yup.string()
      .email("Email должен соответствовать форме example@mail.com")
      .required("Email не введен!"),
    password: Yup.string()
      .required("Пароль не введен!")
      .min(8, "Пароль должен быть длинной в 8 символов!")
      .matches(/(?=.*[0-9])/, "Пароль должен включать цифры!"),
    passwordAgain: Yup.string()
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
            if (values.passwordAgain === values.password) {
              dispatch(
                registration({ email: values.email, password: values.password })
              );
            }
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
            <div className="signup-container">
              <Container fluid>
                <Row className="justify-content-md-center justify-content-lg-center">
                  <Col xs={12} md={12} lg={8} xl={7} xxl={6}>
                    <Form
                      onSubmit={handleSubmit}
                      className="signup-form shadow p-5"
                    >
                      <Row className="d-flex text-center mb-2">
                        <h2>Регистрация</h2>
                      </Row>

                      <Row>
                        <FormGroup as={Col} className="mb-3">
                          <FormLabel>Полное имя</FormLabel>
                          <FormControl
                            name="name"
                            type="text"
                            value={values.name}
                            placeholder="Введите имя"
                            onChange={handleChange}
                          ></FormControl>
                          {errors.name && touched.name && (
                            <div className="input-feedback">{errors.name}</div>
                          )}
                        </FormGroup>
                        <FormGroup as={Col} className="mb-3">
                          <FormLabel>Email адрес</FormLabel>
                          <FormControl
                            name="email"
                            type="email"
                            value={values.email}
                            placeholder="Введите email"
                            onChange={handleChange}
                          ></FormControl>
                          {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                          )}
                        </FormGroup>
                      </Row>

                      <Row>
                        <FormGroup as={Col} className="mb-3">
                          <FormLabel>Введите пароль</FormLabel>
                          <FormControl
                            name="password"
                            type="password"
                            value={values.password}
                            placeholder="Пароль"
                            onChange={handleChange}
                          ></FormControl>
                          {errors.password && touched.password && (
                            <div className="input-feedback">
                              {errors.password}
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup as={Col} className="mb-3">
                          <FormLabel>Введите повторно пароль</FormLabel>
                          <FormControl
                            name="passwordAgain"
                            type="password"
                            value={values.passwordAgain}
                            placeholder="Пароль"
                            onChange={handleChange}
                          ></FormControl>
                          {errors.passwordAgain && touched.passwordAgain && (
                            <div className="input-feedback">
                              {errors.passwordAgain}
                            </div>
                          )}
                          {values.password !== values.passwordAgain && (
                            <div className="input-feedback">
                              Пароли не совпадают
                            </div>
                          )}
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
                            disabled={
                              !isValid ||
                              isSubmitting ||
                              values.password !== values.passwordAgain
                            }
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
          );
        }}
      </Formik>
    </div>
  );
};

export default ValidatedSignUp;
