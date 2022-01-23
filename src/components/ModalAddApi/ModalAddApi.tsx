import React, { FC } from "react";
import "./ModalAddApi.css";
import { Modal, Button, Col, Row, FormControl, Form } from "react-bootstrap";

interface TitleProps {
  showModal: boolean;
  onHide: any;
}

const ModalAddApi: FC<TitleProps> = ({ showModal, onHide, children }) => {
  return (
    <div>
      <Modal
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавление API ключа
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Col>
              <div className="d-flex">
                <p className="me-4 my-1">Название: </p>
                <FormControl aria-label="api-name" />
              </div>
            </Col>
            <Col>
              <Row>
                <div className="d-flex">
                  <p className="me-4 my-1">Биржа: </p>
                  <Form.Select aria-label="TimeZone">
                    <option value="1">Binance Spot</option>
                    <option value="2">Binance Futures</option>
                  </Form.Select>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <p className="me-4 my-1">API ключ: </p>
              <FormControl aria-label="api-name" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <p className="me-4 my-1">Секретный ключ: </p>
              <FormControl aria-label="api-name" />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
          <Button>Добавить</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddApi;
