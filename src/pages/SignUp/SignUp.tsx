import React, { FC } from 'react';
import './SignUp.css'
import { Container, Col, Form, Row, Button, FormGroup, FormLabel, FormControl, FormCheck } from 'react-bootstrap';
import Menu from '../../components/Menu/Menu';

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const SignUp: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <Menu />

      <Container fluid className='signup-container'>
        <Row className='justify-content-md-center justify-content-lg-center'>
          <Col xs={12} md={12} lg={12} xl={10} xxl={8}>
            <Form className='signup-form shadow p-5'>
              <Row className='d-flex text-center mb-2'>
                <h2>Регистрация</h2>
              </Row>

              <Row className='mb-3'>
                <FormGroup as={Col}>
                  <FormLabel>Полное имя</FormLabel>
                  <FormControl type="text" placeholder='Введите имя'></FormControl>
                </FormGroup>
                <FormGroup as={Col}>
                  <FormLabel>Email адрес</FormLabel>
                  <FormControl type="email" placeholder='Введите email'></FormControl>
                </FormGroup>
              </Row>

              <Row className='mb-3'>
                <FormGroup as={Col}>
                  <FormLabel>Введите пароль</FormLabel>
                  <FormControl type="password" placeholder='Пароль'></FormControl>
                </FormGroup>
                <FormGroup as={Col}>
                  <FormLabel>Введите повторно пароль</FormLabel>
                  <FormControl type="password" placeholder='Пароль'></FormControl>
                </FormGroup>
              </Row>

              <Row>
                <FormGroup as={Col} className='mb-3'>
                  <FormCheck type='checkbox' label="Нажимая 'Создать аккаунт', я соглашаюсь с Пользоватльеским соглашением " />
                </FormGroup>
              </Row>

              <Row className='d-flex justify-content-center'>
                <Col xs={12} md={8} lg={6}>
                  <Button className='signup-btn px-5' variant="primary" type="submit">
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
};

export default SignUp;