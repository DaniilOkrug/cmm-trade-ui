import React, { FC } from "react";
import { CloseButton } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteActivePair, deleteRsiTimeframe } from "../../../store/reducers/BotSlice";
import "./ActiveElement.css";

interface props {
  timeframe: string;
}

const ActiveTimeframe: FC<props> = ({ timeframe }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="active-element bg-primary align-middle rounded">
      <p>{timeframe}</p>
      <CloseButton
        variant="white"
        aria-label="Delete"
        onClick={() => dispatch(deleteRsiTimeframe(timeframe))}
      />
    </div>
  );
};

export default ActiveTimeframe;
