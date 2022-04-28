import React, { FC, useState } from "react";

enum alertType {
  Success = "alert alert-success",
  Danger = "alert alert-danger",
  Warning = "alert alert-warning",
}

interface props {
  type: alertType;
  text: string;
  show: boolean;
}

const Alert: FC<props> = ({ type, text, show }) => {
  return (
    <div className={show ? type : "d-none"} role="alert">
      {text}
    </div>
  );
};

export default Alert;
