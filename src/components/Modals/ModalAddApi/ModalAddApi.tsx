import React, { FC, useState } from "react";
import "./ModalAddApi.css";
import { Modal, Button, Col, Row, FormControl, Form } from "react-bootstrap";
import { addApi } from "../../../store/reducers/ActionCreator";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

interface TitleProps {
  showModal: boolean;
  onHide: any;
}

const ModalAddApi: FC<TitleProps> = ({ showModal, onHide, children }) => {
  const dispatch = useAppDispatch();
  const { isLoading, userError: error } = useAppSelector(
    (state) => state.userReducer
  );

  const [name, setName] = useState<string>("");
  const [exchange, setExchange] = useState<string>("Binance Spot");
  const [key, setkKey] = useState<string>("");
  const [secret, setSecret] = useState<string>("");

  return (
    <div>
      <Modal
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавление API ключа
            {isLoading && <p>Загрузка</p>}
            {!isLoading && error && <div className="error">{error}</div>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Col>
              <div className="d-flex">
                <p className="me-4 my-1">Название: </p>
                <FormControl
                  aria-label="api-name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <div className="d-flex">
                  <p className="me-4 my-1">Биржа: </p>
                  <Form.Select
                    aria-label="TimeZone"
                    onChange={(e) => setExchange(e.target.value)}
                  >
                    <option value="Binance Spot">Binance Spot</option>
                    <option value="Binance Futures">Binance Futures</option>
                  </Form.Select>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <p className="me-4 my-1">API ключ: </p>
              <FormControl
                aria-label="api-name"
                onChange={(e) => setkKey(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <p className="me-4 my-1">Секретный ключ: </p>
              <FormControl
                aria-label="api-name"
                onChange={(e) => setSecret(e.target.value)}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={isLoading}>
            Закрыть
          </Button>
          <Button
            onClick={() => dispatch(addApi({ name, exchange, key, secret }))}
          >
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddApi;
