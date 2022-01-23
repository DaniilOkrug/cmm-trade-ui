import React, { FC, useState } from "react";
import "./API.css";
import { Modal, Button } from "react-bootstrap";

import { Apilist, ModalAddApi } from "../index";

interface TitleProps {
  xz?: boolean;
}

const API: FC<TitleProps> = ({ xz }) => {
  const [modalShow, setModalShow] = React.useState(false);
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
        <Apilist title="12" status="12" key="12" />
      </div>

      <ModalAddApi showModal={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default API;
