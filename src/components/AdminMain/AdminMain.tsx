import React, { FC } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./AdminMain.css";

const AdminMain: FC = () => {
  return (
    <div className="p-3">
      <Card>
        <Card.Body>
          <h3>Информация о роботе</h3>

          <hr />

          <Row>
            <Col>
              <p>Статус робота: Активный</p>
            </Col>
            <Col>
              <p>Ошибка робота: -</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>Количество пользователей: 67</p>
            </Col>
            <Col>
              <p>Послденее действие робота: BUY BTC/USDT </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminMain;
