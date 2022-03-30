import React, { FC } from "react";
import { CloseButton } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteActivePair } from "../../../store/reducers/BotSlice";
import "./ActivePair.css";

interface props {
  pair: string;
}

const ActivePair: FC<props> = ({ pair }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="active-pair bg-primary align-middle rounded">
      <p>{pair}</p>
      <CloseButton
        variant="white"
        aria-label="Delete"
        onClick={() => dispatch(deleteActivePair(pair))}
      />
    </div>
  );
};

export default ActivePair;
