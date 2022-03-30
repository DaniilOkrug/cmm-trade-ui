import { Formik } from "formik";
import * as Yup from "yup";
import React, { FC, useEffect } from "react";
import { Modal, Button, Col, Row, FormControl, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  createBot,
  getApiList,
  getBots,
  getBotSettings,
} from "../../../store/reducers/ActionCreator";
import "./ModalCreateBot.css";
import { deleteError } from "../../../store/reducers/UserBotSlice";

interface Props {
  showModal: boolean;
  onHide: any;
}

const ModalCreateBot: FC<Props> = ({ showModal, onHide, children }) => {
  const dispatch = useAppDispatch();
  const { apiList, user, isAuth } = useAppSelector(
    (state) => state.userReducer
  );
  const { currentPairs, isLoadingBot } = useAppSelector(
    (state) => state.botReducer
  );

  const { isLoadingBots, error } = useAppSelector(
    (state) => state.userBotReducer
  );

  const initialValues = { name: "", key: "", deposit: 1 };
  const validationSchema = Yup.object().shape({
    deposit: Yup.number()
      .required("Депозит должен быть введен!")
      .min(1, "Депозит должен быть положительным!"),
    name: Yup.string()
        .required("Нзавние должны быть введено!")
  });

  useEffect(() => {
    dispatch(getBotSettings()).then(() => {});

    if (isAuth) {
      dispatch(getApiList(user.id)).then(() => {});
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          const {
            values,
            errors,
            isValid,
            isSubmitting,
            handleChange,
            handleSubmit,
          } = formik;

          if (values.key === "" && apiList.length > 0) {
            values.key = apiList[0].key;
          }

          return (
            <Form onSubmit={handleSubmit}>
              <Modal
                show={showModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onExit={() => dispatch(deleteError())}
              >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Создание торгового робота
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    {error && (
                      <div className="input-feedback pb-3">{error}</div>
                    )}
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Row>
                        <div className="d-flex">
                          <p className="me-4 my-1">Название: </p>
                          <FormControl
                            aria-label="name"
                            name="name"
                            type="string"
                            value={values.name}
                            onChange={handleChange}
                          />
                          {errors.deposit && (
                            <div className="input-feedback">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <div className="d-flex">
                          <p className="me-4 my-1">API: </p>
                          <Form.Select
                            name="key"
                            aria-label="api-list"
                            onChange={handleChange}
                          >
                            {isLoadingBot && <option>Загрузка...</option>}
                            {!isLoadingBot &&
                              apiList.map((api) => (
                                <option key={api.name} value={api.key}>
                                  {api.name}
                                </option>
                              ))}
                          </Form.Select>
                        </div>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <p className="me-4 my-1">Депозит: </p>
                      <FormControl
                        aria-label="deposit"
                        name="deposit"
                        type="number"
                        value={values.deposit}
                        onChange={handleChange}
                      />
                      {errors.deposit && (
                        <div className="input-feedback">{errors.deposit}</div>
                      )}
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      values.key = apiList[0].key;
                      onHide();
                    }}
                  >
                    Закрыть
                  </Button>
                  <Button
                    disabled={!isValid || isSubmitting || isLoadingBot}
                    onClick={() => {
                      dispatch(
                        createBot({
                          name: values.name,
                          key: values.key,
                          deposit: values.deposit,
                        })
                      );
                    }}
                  >
                    Добавить
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ModalCreateBot;
