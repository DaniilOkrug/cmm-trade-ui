import React, { FC, useEffect } from "react";
import "./Profile.css";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { API } from "../index";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getConfirmLetter } from "../../store/reducers/ActionCreator";
import { toast } from "react-toastify";

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    document.title = "Профиль";
  }, []);

  const notifySuccess = () =>
    toast.success("Проверьте почту!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  const handleEmailConfirm = () => {
    const isYes = window.confirm("Отправить письмо с подтверждением почты?");
    if (isYes) {
      dispatch(getConfirmLetter()).then(() => {
        notifySuccess();
      });
    }
  };

  return (
    <Container fluid className="profile p-3">
      <Card className="mb-3">
        <Card.Body>
          <h3>Информация об аккаунте</h3>

          {!user.isActivated && <p className="error">Почта не подтверждена</p>}

          <hr />

          <div className="profile-general">
            <p>Статус: Активный</p>
            <div className="profile-general-balance">
              <p>Баланс аккаунта: {user.balance} USDT</p>
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
                        value={user.email}
                        aria-label="email"
                      />

                      {user.isActivated && (
                        <InputGroup.Text>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                          </svg>
                        </InputGroup.Text>
                      )}

                      {!user.isActivated && (
                        <Button onClick={() => handleEmailConfirm()}>
                          Подтвердить
                        </Button>
                      )}
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
                      <FormControl disabled value="name" aria-label="name" />
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
