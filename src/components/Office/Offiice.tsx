import React, { FC, useEffect, useState } from "react";
import "./Office.css";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { BotsList, ModalCreateBot, ModalDeposit } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { stopAllBots } from "../../store/reducers/ActionCreator";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

const Office: FC<TitleProps> = ({ title, subtitle, children }) => {
  const dispatch = useAppDispatch();
  const { isLoadingBots, userBotError: error } = useAppSelector(
    (state) => state.userBotReducer
  );
  const { user, isLoading } = useAppSelector((state) => state.userReducer);

  const [modalCreateShow, setModalCreateShow] = useState(false);
  const [modalDepositShow, setModalDepositShow] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  useEffect(() => {
    document.title = "Главная";
  }, []);

  if (isLoadingBots && !updateModal) {
    setUpdateModal(true);
  }

  if (updateModal && !isLoadingBots) {
    if (error == "") {
      setModalCreateShow(false);
      setModalDepositShow(false);
      setUpdateModal(false);
    }
  }

  const handleStopAllBots = () => {
    const answer = window.confirm(
      "Вы уверены, что хотите остановить всех роботов?"
    );
    if (answer) dispatch(stopAllBots());
  };

  return (
    <Container fluid className="office">
      <Row className="accountActions">
        <div>
          <Button className="m-1" onClick={() => setModalDepositShow(true)}>
            Пополнить
          </Button>
          <Button className="m-1" onClick={() => setModalCreateShow(true)}>
            Создать робота
          </Button>
          <Button
            variant="danger"
            className="m-1"
            onClick={() => handleStopAllBots()}
          >
            Остановить всех роботов
          </Button>
        </div>
      </Row>

      <Row>
        <Col>
          <Card className="accountInfo">
            <Card.Body>
              <h4>Информация об аккаунте</h4>
              {!user.isActivated && (
                <p className="error">Почта не подтверждена</p>
              )}

              <hr />

              <div className="info">
                <Row>
                  <p>
                    Cтатус: <span className="info-status">Активный</span>
                  </p>
                </Row>
                <Row>
                  <p>
                    ID: <span className="info-id">{user.id}</span>
                  </p>
                </Row>
                <Row>
                  <p>
                    Баланс аккаунта: <span className="info-balance">{user.balance}</span>{" "}
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
        showModal={modalCreateShow}
        onHide={() => {
          setModalCreateShow(false);
        }}
      />

      <ModalDeposit
        showModal={modalDepositShow}
        onHide={() => {
          setModalDepositShow(false);
        }}
      />
    </Container>
  );
};

export default Office;
