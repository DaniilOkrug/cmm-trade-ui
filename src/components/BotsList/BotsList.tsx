import React, { FC, useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { io, Socket } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  deleteBot,
  getBots,
  startBot,
  stopBot,
} from "../../store/reducers/ActionCreator";
import { setBotData } from "../../store/reducers/UserBotSlice";

const BotsList: FC = () => {
  const dispatch = useAppDispatch();
  const { bots } = useAppSelector((state) => state.userBotReducer);

  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    dispatch(getBots());
  }, []);

  useEffect(() => {
    const socket: Socket = io("http://localhost:5000");
    setSocket(socket);

    socket.on("BOT_STATUS", (data) => {
      dispatch(setBotData(data));
    });

    return () => {
      const close = () => socket.close();
      close();
    };
  }, []);

  const getActiveBotsNumber = () => {
    let botsNumber = 0;
    bots.forEach((bot) => {
      if (bot.status != "Disabled") botsNumber++;
    });

    return botsNumber;
  };

  return (
    <>
      <h4>Мои роботы</h4>

      <hr />

      <Row>
        <Col>
          <p>
            Активные роботы: {getActiveBotsNumber()} из {bots.length}
          </p>
          <p></p>
        </Col>
        <Col>
          <p>Роботы с ошибкой: 0 из {bots.length}</p>
        </Col>
      </Row>

      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Название</th>
              <th>Статус</th>
              <th>Пара</th>
              <th>Биржа</th>
              <th>Депозит</th>
              <th>% Дохода</th>
              <th>Ошибка</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {bots.length > 0 &&
              bots.map((bot, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{bot.name}</td>
                  <td>{bot.status}</td>
                  <td>{bot.pair}</td>
                  <td>{bot.exchange}</td>
                  <td>{bot.deposit}</td>
                  <td>{bot.profit}</td>
                  <td>{bot.error}</td>
                  <td>
                    <div className="d-flex flex-row">
                      {(bot.status === "Disabled" ||
                        bot.status === "Stopping") && (
                        <Button
                          className="m-1 p-2"
                          variant="outline-primary"
                          onClick={() => dispatch(startBot(bot.name))}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-play-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                          </svg>
                        </Button>
                      )}
                      {(bot.status === "Wait" || bot.status === "Active") && (
                        <Button
                          className="m-1 p-2"
                          variant="outline-dark"
                          onClick={() => dispatch(stopBot(bot.name))}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-stop-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z" />
                          </svg>
                        </Button>
                      )}
                      <Button
                        className="m-1 p-2"
                        variant="outline-danger"
                        onClick={() => dispatch(deleteBot(bot.name))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default BotsList;
