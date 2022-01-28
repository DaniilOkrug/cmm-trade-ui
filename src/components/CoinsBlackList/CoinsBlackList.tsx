import React, { FC } from "react";
import { ListGroup, Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import "./CoinsBlackList.css";

const CoinsBlackList: FC = () => {
  return (
    <div className="blackList">
      <Container className="p-3">
        <Row className="blacklist-container">
          <Col>
            <Card>
              <Card.Body>
                <h3>Добавить монеты</h3>
                <hr />

                <Row>
                  <Col>
                    <p className="my-1">Монеты: </p>
                  </Col>
                  <Col>
                    <Form.Select aria-label="stock" className="mb-3">
                      <option value="1">POND/USDT</option>
                      <option value="2">AXS/USDT</option>
                    </Form.Select>
                  </Col>
                </Row>

                <div>
                  <Button>Добавить</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <h3>Черный список: </h3>
                <hr />
                <ListGroup>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <p>BTC/USDT</p>
                      <Button variant="danger">Удалить</Button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <p>ETH/USDT</p>
                      <Button variant="danger">Удалить</Button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <p>ADA/USDT</p>
                      <Button variant="danger">Удалить</Button>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <p>XRP/USDT</p>
                      <Button variant="danger">Удалить</Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoinsBlackList;
