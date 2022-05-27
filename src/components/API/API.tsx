import React, { FC } from "react";
import "./API.css";
import { Button } from "react-bootstrap";
import { ApiList, ModalAddApi } from "../index";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toast } from "react-toastify";
import { setApiChecked } from "../../store/reducers/UserSlice";

const API: FC = () => {
  const dispatch = useAppDispatch();
  const { isApiChecked, isUserError: isError } = useAppSelector(
    (state) => state.userReducer
  );

  const [modalShow, setModalShow] = React.useState(false);

  const notifySuccess = () =>
    toast.success("API проверен!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  if (isApiChecked && !isError) {
    notifySuccess();
    dispatch(setApiChecked(false));
  }

  return (
    <div>
      <div className="profile-api">
        <div className="profile-api-header d-flex">
          <h3 className="me-3">API ключи</h3>
          <Button onClick={() => setModalShow(true)}>Добавить API ключ</Button>
        </div>
      </div>

      <hr />

      <div className="profile-api-keys">
        <ApiList />
      </div>

      <ModalAddApi showModal={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default API;
