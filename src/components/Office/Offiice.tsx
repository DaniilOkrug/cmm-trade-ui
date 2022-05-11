import React, { FC, useEffect, useState } from "react";
import "./Office.css";
import { Button, Container, Row, Col, Card, Table } from "react-bootstrap";
import { BotsList, ModalCreateBot } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Office: FC<TitleProps> = ({ title, subtitle, children }) => {
  const dispatch = useAppDispatch();
  const { isLoadingBots, userBotError: error } = useAppSelector(
    (state) => state.userBotReducer
  );

  const [modalShow, setModalShow] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  useEffect(() => {
    document.title = "Главная";
  }, []);

  if (isLoadingBots && !updateModal) {
    setUpdateModal(true);
  }

  if (updateModal && !isLoadingBots) {
    if (error == "") {
      setModalShow(false);
      setUpdateModal(false);
    }
  }

  return (
    <Container fluid className="office">
      <Row className="accountActions">
        <div>
          <Button className="m-1">Пополнить</Button>
          <Button className="m-1" onClick={() => setModalShow(true)}>
            Создать робота
          </Button>
          <Button variant="danger" className="m-1">
            Остановить роботов
          </Button>
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
              <BotsList></BotsList>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModalCreateBot
        showModal={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      ></ModalCreateBot>
    </Container>
  );
};

export default Office;
