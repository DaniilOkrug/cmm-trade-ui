import React, { FC } from "react";
import "./AdminMain.css";

interface TitleProps {
  xz?: boolean;
}

const AdminMain: FC<TitleProps> = ({ xz }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <h1>AdminMain</h1>
    </div>
  );
};

export default AdminMain;
