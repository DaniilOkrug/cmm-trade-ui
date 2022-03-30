import React, { FC, useEffect, useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { ActivePair, Pairs } from ".";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  getBotSettings,
  sendBotSettings,
} from "../../store/reducers/ActionCreator";
import {
  addActivePair,
  clearActivePairs,
  setCurrentPairsUpdate,
  recoverActivePairs,
} from "../../store/reducers/BotSlice";
import "./BotSettings.css";

const BotSettings: FC = () => {
  const dispatch = useAppDispatch();
  const {
    isLoadingBot,
    botSettings,
    spotPairs,
    futurePairs,
    currentPairs,
    currentPairsUpdated,
    error,
  } = useAppSelector((state) => state.botReducer);

  const [exchange, setExchange] = useState<string>("Binance Spot");

  const [leverage, setLeverage] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState<string>("");
  const [pairs, setPairs] = useState<string[]>(["loading"]);
  const [pair, setPair] = useState<string>("");

  const [ordersNumber, setOrdersNumber] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [martingeil, setMartingeil] = useState<number>(0);
  const [indentFirstOrder, setIndentFirstOrder] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [priceFollow, setPriceFollow] = useState<number>(0);

  const [priceFollowDelay, setPriceFollowDelay] = useState<number>(0);
  const [newGridDelay, setNewGridDelay] = useState<number>(0);
  const [endCycleDelay, setEndCycleDelay] = useState<number>(0);

  const [enabled, setEnabled] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("");
  const [interval, setInterval] = useState<string>("");
  const [priceChange, setPriceChange] = useState<number>(0);
  const [minPriceChangeNumber, setMinPriceChangeNumber] = useState<number>(0);
  const [minVolume, setMinVolume] = useState<number>(0);

  const handleCurrenPairsUpdate = () => {
    const currPairs = exchange === "Binance Spot" ? spotPairs : futurePairs;
    const availablePairs = currPairs.filter(
      (pair) => !currentPairs.includes(pair)
    );
    setPairs(availablePairs);
    setPair(availablePairs[0]);
  };

  useEffect(() => {
    dispatch(getBotSettings()).then(() => {
      if (!isLoadingBot && botSettings.grid) {
        setExchange(botSettings.exchange);
        setLeverage(botSettings.leverage);
        setAlgorithm(botSettings.algorithm);
        setOrdersNumber(botSettings.grid.ordersNumber);
        setSize(botSettings.grid.size);
        setMartingeil(botSettings.grid.martingeil);
        setIndentFirstOrder(botSettings.grid.indentFirstOrder);
        setProfit(botSettings.grid.profit);
        setPriceFollow(botSettings.grid.priceFollow);
        setPriceFollowDelay(botSettings.grid.priceFollowDelay);
        setNewGridDelay(botSettings.grid.newGridDelay);
        setEndCycleDelay(botSettings.grid.endCycleDelay);
        setEnabled(botSettings.analyzer.enabled);
        setPeriod(botSettings.analyzer.period);
        setInterval(botSettings.analyzer.interval);
        setPriceChange(botSettings.analyzer.priceChange);
        setMinPriceChangeNumber(botSettings.analyzer.minPriceChangeNumber);
        setMinVolume(botSettings.analyzer.minVolume);

        handleCurrenPairsUpdate();
      }
    });
  }, []);

  if (currentPairsUpdated) {
    handleCurrenPairsUpdate();
    dispatch(setCurrentPairsUpdate(false));
  }

  if (isLoadingBot) {
    return <h2>Загрузка...</h2>;
  }
  return (
    <div className="botSettings p-3">
      <Card>
        <Card.Body>
          <h3>Настройки робота</h3>
          {error}

          <hr />

          <Row>
            <Col>
              <p className="my-1">Биржа: </p>
            </Col>
            <Col>
              <Form.Select
                aria-label="stock"
                className="mb-3"
                defaultValue={exchange}
                onChange={(e) => {
                  setExchange(e.target.value);

                  if (e.target.value !== botSettings.exchange) {
                    dispatch(clearActivePairs());
                  } else {
                    dispatch(recoverActivePairs());
                  }
                }}
              >
                <option value="Binance Spot">Binance Spot</option>
                <option value="Binance Futures">Binance Futures</option>
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
                      <Form.Select
                        aria-label="pairs"
                        className="mb-3"
                        id="pairs"
                        value={pair}
                        onChange={(e) => {
                          setPair(e.target.value);
                          console.log(e.target.value);
                        }}
                      >
                        <Pairs pairs={pairs}></Pairs>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Button
                        onClick={() => {
                          dispatch(addActivePair(pair));
                        }}
                      >
                        Добавить
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <p>Актвиные пары:</p>
                <div className="active-pairs">
                  {currentPairs.map((pair) => (
                    <ActivePair pair={pair}></ActivePair>
                  ))}
                </div>
              </Row>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <p className="my-1">Алгоритм: </p>
            </Col>
            <Col>
              <Form.Select
                aria-label="side"
                className="mb-3"
                defaultValue={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
              >
                <option value="long">Long</option>
                <option value="short">Short</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="my-1">Плечо(Futures): </p>
            </Col>
            <Col>
              <Form.Control
                className="mb-3"
                type="number"
                id="inputPassword5"
                value={leverage}
                onChange={(e) => setLeverage(Number(e.target.value))}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="my-1">Режим позиции(Futures): </p>
            </Col>
            <Col>
              <Form.Select aria-label="side" className="mb-3">
                <option value="1">Одностороний режим</option>
                <option value="2">Режим хэджирования</option>
              </Form.Select>
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
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={ordersNumber}
                      onChange={(e) => setOrdersNumber(Number(e.target.value))}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Мартингейл (%):</p>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={martingeil}
                      onChange={(e) => setMartingeil(Number(e.target.value))}
                    />
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
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Отступ первого ордера (%):</p>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={indentFirstOrder}
                      onChange={(e) =>
                        setIndentFirstOrder(Number(e.target.value))
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Профит (%): </p>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={profit}
                      onChange={(e) => setProfit(Number(e.target.value))}
                    />
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Перенос сетки при оступе цены (%): </p>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={priceFollow}
                      onChange={(e) => setPriceFollow(Number(e.target.value))}
                    />
                  </Col>
                </Row>
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
                <Form.Control
                  className="mb-3"
                  type="number"
                  value={priceFollowDelay}
                  onChange={(e) => setPriceFollowDelay(Number(e.target.value))}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="my-1">
                  Задержка после отмены сетки ордеров для подтяжки:
                </p>
              </Col>
              <Col>
                <Form.Control
                  className="mb-3"
                  type="number"
                  value={newGridDelay}
                  onChange={(e) => setNewGridDelay(Number(e.target.value))}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="my-1">Задержка после завершения цикла:</p>
              </Col>
              <Col>
                <Form.Control
                  className="mb-3"
                  type="number"
                  value={endCycleDelay}
                  onChange={(e) => setEndCycleDelay(Number(e.target.value))}
                />
              </Col>
            </Row>
          </Row>

          <hr />

          <Row className="analyzer">
            <h4 className="mb-3">Анализатор</h4>

            <Row>
              <Form.Group className="mb-3" controlId="enabled">
                <Form.Check
                  type="checkbox"
                  label="Включить"
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                />
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Период:</p>
                  </Col>
                  <Col>
                    <Form.Select
                      aria-label="period"
                      className="mb-3"
                      defaultValue={period}
                      onChange={(e) => setPeriod(e.target.value)}
                    >
                      <option value="15m">15m</option>
                      <option value="30m">30m</option>
                      <option value="1h">1h</option>
                      <option value="3h">3h</option>
                      <option value="6h">6h</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Интервал:</p>
                  </Col>
                  <Col>
                    <Form.Select
                      aria-label="period"
                      className="mb-3"
                      defaultValue={interval}
                      onChange={(e) => setInterval(e.target.value)}
                    >
                      <option value="1m">1m</option>
                      <option value="3m">3m</option>
                      <option value="5m">5m</option>
                      <option value="10m">10m</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Изменение цена:</p>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={priceChange}
                      onChange={(e) => setPriceChange(Number(e.target.value))}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Минимально кол-во изменений цены:</p>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={minPriceChangeNumber}
                      onChange={(e) =>
                        setMinPriceChangeNumber(Number(e.target.value))
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>
                    <p className="my-1">Минимальный объем:</p>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-3"
                      type="number"
                      value={minVolume}
                      onChange={(e) => setMinVolume(Number(e.target.value))}
                    />
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Row>

          <hr />

          <div className="d-flex justify-content-end">
            <Button
              className="px-4"
              onClick={() => {
                const answer = window.confirm(
                  "Вы уверены, что хотите сохранить настрйоки?"
                );
                if (answer) {
                  const settings = {
                    pairs: currentPairs,
                    exchange: exchange,
                    leverage: leverage,
                    algorithm: algorithm,
                    analyzer: {
                      enabled: enabled,
                      period: period,
                      interval: interval,
                      priceChange: priceChange,
                      minPriceChangeNumber: minPriceChangeNumber,
                      minVolume: minVolume,
                    },
                    grid: {
                      size: size,
                      ordersNumber: ordersNumber,
                      martingeil: martingeil,
                      indentFirstOrder: indentFirstOrder,
                      profit: profit,
                      priceFollow: priceFollow,
                      priceFollowDelay: priceFollowDelay,
                      newGridDelay: newGridDelay,
                      endCycleDelay: endCycleDelay,
                    },
                  };
                  dispatch(sendBotSettings(settings));
                }
              }}
            >
              Сохранить
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BotSettings;
