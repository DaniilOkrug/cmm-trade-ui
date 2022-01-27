import React, { FC } from "react";
import "./Office.css";
import { Button, Container, Row, Col, Card, Table } from "react-bootstrap";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Office: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <Container fluid className="office">
      <Row className="accountActions">
        <div>
          <Button className="m-1">Пополнить</Button>
          <Button className="m-1">Создать робота</Button>
          <Button variant="danger" className="m-1">Остановить роботов</Button>
        </div>
      </Row>

      <Row>
        <Col>
          <Card className="accountInfo">
            <Card.Body>
              <h4>Информация об аккаунте</h4>

              <hr />

              <div className="info">
                <Row>
                  <p>
                    Cтатус: <span className="info-status">Активный</span>
                  </p>
                </Row>
                <Row>
                  <p>
                    ID: <span className="info-id">123</span>
                  </p>
                </Row>
                <Row>
                  <p>
                    Баланс аккаунта: <span className="info-balance">1000</span>{" "}
                    USDT
                  </p>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <h4>Общая статистика</h4>
                </Col>
              </Row>

              <hr />

              <div>
                <p>Доход за сегодня: 0 USDT</p>
                <p>Итого: 0 USDT</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4>Мои роботы</h4>

              <hr />

              <Row>
                <Col>
                  <p>Активные роботы: 0 из 0</p>
                  <p></p>
                </Col>
                <Col>
                  <p>Роботы с ошибкой: 0 из 0</p>
                </Col>
              </Row>

              <Row>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Название</th>
                      <th>Статус</th>
                      <th>Состояние</th>
                      <th>Биржа</th>
                      <th>Циклы</th>
                      <th>Сетка ордеров, % мартингейла</th>
                      <th>Объем</th>
                      <th>% Дохода</th>
                      <th>Ошибка</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>test</td>
                      <td>Ожидание</td>
                      <td>Active</td>
                      <td>Binance Futures</td>
                      <td>132</td>
                      <td>35, 1.1</td>
                      <td>3500$</td>
                      <td>11.4</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Office;
