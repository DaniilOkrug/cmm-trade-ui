import React, { FC } from "react";
import "./Profile.css";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

import { API } from "../index";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Profile: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <Container fluid className="profile p-3">
      <Card className="mb-3">
        <Card.Body>
          <h3>Информация об аккаунте</h3>

          <hr />

          <div className="profile-general">
            <p>Статус: Активный</p>
            <p>ID: 17268</p>
            <div className="profile-general-balance">
              <p>Баланс аккаунта: 1000 USDT</p>
              <Button>Пополнить</Button>
            </div>

            <p>Комиссия: 20%</p>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <h3>Основная информация</h3>

          <hr />

          <div className="profile-main">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Email:</p>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <FormControl
                        disabled
                        value="example@gmail.com"
                        aria-label="email"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Полное имя:</p>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <FormControl
                        disabled
                        value="123981279837"
                        aria-label="name"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Номер телефона: </p>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">+</InputGroup.Text>
                      <FormControl
                        aria-label="phone"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Часовой пояс: </p>
                  </Col>
                  <Col>
                    <Form.Select aria-label="TimeZone">
                      <option value="1">GMT +3</option>
                      <option value="2">GMT +4</option>
                      <option value="3">GMT +5</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Telegram: </p>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="telegram-addon1">@</InputGroup.Text>
                      <FormControl
                        aria-label="telegram"
                        aria-describedby="telegram-addon1"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <API />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
