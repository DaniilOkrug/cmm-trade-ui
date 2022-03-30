import React, { FC } from "react";

interface props {
  pairs: string[];
}

const Pairs: FC<props> = ({ pairs }) => {
  const pairsList = pairs.map((pair) => (
    <option key={pair} value={pair}>{pair}</option>
  ));

  return <>{pairsList}</>;
};

export default Pairs;
