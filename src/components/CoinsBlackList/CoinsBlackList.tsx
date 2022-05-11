import React, { FC, useEffect, useState } from "react";
import {
  ListGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getBlackList, setBlackList } from "../../store/reducers/ActionCreator";
import {
  addBlacklistPair,
  deleteBlacklistPair,
  setBlacklistUpdate,
} from "../../store/reducers/BotSlice";
import "./CoinsBlackList.css";

const CoinsBlackList: FC = () => {
  const dispatch = useAppDispatch();
  const { spotPairs, blacklist, blacklistUpdated, isLoadingBot, isBotError, botError } =
    useAppSelector((state) => state.botReducer);

  const [pair, setPair] = useState<string>("");
  const [pairsList, setPairsList] = useState<string[]>([]);
  const [pairsBlackList, setPairsBlackList] = useState<string[]>([]);

  const notifySuccess = () =>
    toast.success("Список сохранен!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  const notifyError = () =>
    toast.error(botError, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  const handleSave = () => {
    dispatch(setBlackList(pairsBlackList)).then(() => {
      if (isBotError) {
        notifyError();
      } else {
        notifySuccess();
      }
    });
  }

  useEffect(() => {
    dispatch(getBlackList());
  }, []);

  if (blacklistUpdated) {
    setPairsBlackList(blacklist);

    const availablePairs = spotPairs.filter(
      (spotPair) => !blacklist.includes(spotPair)
    );

    setPairsList(availablePairs);
    setPair(availablePairs[0]);

    dispatch(setBlacklistUpdate(false));
  }

  if (isLoadingBot) {
    return <h1>Загрузка...</h1>;
  }

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
                    <Form.Select
                      onChange={(e) => setPair(e.target.value)}
                      aria-label="stock"
                      className="mb-3"
                    >
                      {pairsList.map((pair) => (
                        <option key={pair} value={pair}>
                          {pair}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <div className="d-flex justify-content-between">
                  <Button onClick={() => dispatch(addBlacklistPair(pair))}>
                    Добавить
                  </Button>
                  <Button
                    onClick={() => handleSave()}
                  >
                    Сохранить
                  </Button>
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
                  {pairsBlackList.map((pair) => (
                    <ListGroup.Item key={pair}>
                      <div className="d-flex justify-content-between">
                        <p>{pair}</p>
                        <Button
                          onClick={() => {
                            dispatch(deleteBlacklistPair(pair));
                          }}
                          variant="danger"
                        >
                          Удалить
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))}
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
