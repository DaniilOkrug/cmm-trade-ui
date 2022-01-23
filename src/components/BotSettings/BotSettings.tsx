import React, { FC } from "react";
import {
  Card,
  FormControl,
  InputGroup,
  Col,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import "./BotSettings.css";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const BotSettings: FC<TitleProps> = ({ title, subtitle, children }) => {
  return (
    <div className="botSettings p-3">
      <Card>
        <Card.Body>
          <h3>Настройки робота</h3>

          <hr />

          <Row>
            <Col>
              <p className="my-1">Название: </p>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <FormControl aria-label="botName" />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="my-1">Биржа: </p>
            </Col>
            <Col>
              <Form.Select aria-label="stock" className="mb-3">
                <option value="1">Binance Futures</option>
                <option value="2">Binance Spot</option>
              </Form.Select>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <Row>
                <Col>
                  <p className="my-1">Пары: </p>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Select aria-label="stock" className="mb-3">
                        <option value="1">BTC/USDT</option>
                        <option value="2">ETH/USDT</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Button>Добавить</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <p>Актвиные пары:</p>
                <InputGroup className="mb-3">
                  <FormControl disabled aria-label="botName" />
                </InputGroup>
              </Row>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <p className="my-1">Алгоритм: </p>
            </Col>
            <Col>
              <Form.Select aria-label="side" className="mb-3">
                <option value="1">Long</option>
                <option value="2">Short</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="my-1">Плечо: </p>
            </Col>
            <Col>
              <Form.Control
                className="mb-3"
                type="number"
                id="inputPassword5"
                value={1}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="my-1">Режим позиции: </p>
            </Col>
            <Col>
              <Form.Select aria-label="side" className="mb-3">
                <option value="1">Одностороний режим</option>
                <option value="2">Режим хэджирования</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="my-1">Профит (%): </p>
            </Col>
            <Col>
              <Form.Control className="mb-3" type="number" />
            </Col>
          </Row>

          <hr />

          <Row>
            <h4 className="mb-3">Настройки сетки ордеров</h4>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Кол-во ордеров:</p>
                  </Col>
                  <Col>
                    <Form.Control className="mb-3" type="number" value="20" />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Мартингейл (%):</p>
                  </Col>
                  <Col>
                    <Form.Control className="mb-3" type="number" value="1" />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Перекрытие изменения цены (%):</p>
                  </Col>
                  <Col>
                    <Form.Control className="mb-3" type="number" value="1" />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Отступ первого ордера (%):</p>
                  </Col>
                  <Col>
                    <Form.Control className="mb-3" type="number" value="0" />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Check
                  className="my-1"
                  type="checkbox"
                  id={`default-checkbox`}
                  label={`Частичное выставление сетки ордеров:`}
                />
              </Col>

              <Col>
                <InputGroup className="mb-3">
                  <FormControl
                  disabled
                    type="number"
                    value="0"
                    aria-label="Text input with checkbox"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Row>

          <hr />

          <Row>
            <h4 className="mb-3">Дополнительные настройки</h4>

            <Row>
              <Col>
                <p className="my-1">
                  Задержка перед отменой сетки ордеров для подтяжки:
                </p>
              </Col>
              <Col>
                <Form.Control className="mb-3" type="number" />
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="my-1">
                  Задержка после отмены сетки ордеров для подтяжки:
                </p>
              </Col>
              <Col>
                <Form.Control className="mb-3" type="number" />
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="my-1">Задержка после завершения цикла:</p>
              </Col>
              <Col>
                <Form.Control className="mb-3" type="number" />
              </Col>
            </Row>
          </Row>

          <hr />

          <div className="d-flex justify-content-end">
            <Button className="px-4">Сохранить</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BotSettings;
