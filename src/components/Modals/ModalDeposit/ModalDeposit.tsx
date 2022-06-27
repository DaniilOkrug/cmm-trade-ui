import React, { FC } from "react";
import "./ModalDeposit.css";
import { Modal, Button, Col, Row, FormControl, Form } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/redux";

interface Props {
  showModal: boolean;
  onHide: any;
}

const ModalDeposit: FC<Props> = ({ showModal, onHide, children }) => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <div>
      <Modal
        onHide={onHide}
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Пополнение
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <p className="me-4 my-1">
              Для пополнения используйте USDT, сеть BEP20 и в МЕМО укажите:{" "}
              {user.id}
            </p>

            <p className="me-4 my-1">
              Адрес для перевода: bnb17w4qnszku99ef5zp8uwueayefrqa0sw8d4axgv
            </p>
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

export default ModalDeposit;
