import React, { FC } from 'react';
import './Login.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Menu from '../../components/Menu/Menu';

interface TitleProps {
    title?: string;
    subtitle?: string;
}

const Login: FC<TitleProps> = ({ title, subtitle, children }) => {
    return (
        <div>
            <Menu />

            <Container className='login-container'>
                <Col xs={12} md={8} lg={6}>
                    <Form className='login-form shadow p-4'>
                        <Row className='d-flex text-center mb-2'>
                            <h2>Вход в аккаунт</h2>
                        </Row>

                        <Form.Group className='mb-3'>
                            <Form.Label>Email адрес</Form.Label>
                            <Form.Control type="email" placeholder="Введите email" />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль" />
                        </Form.Group>

                        <Row>
                            <Col xs={12} md={8} lg={6}>
                                <Button className='login-btn px-5' variant="primary" type="submit">
                                    Войти
                                </Button>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <p className="forgot-password text-end">
                                Восстановить <a href="#">пароль?</a>
                            </p>
                        </Row>
                    </Form>
                </Col>
            </Container>
        </div>
    );
};

export default Login;