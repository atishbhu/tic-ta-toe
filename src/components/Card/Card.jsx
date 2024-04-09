import React from "react";
import "./card.css";
import Icon from "../icon/icon";

const Card = ({ name, onPlay, disable }) => {
  let symbol;

  if (name === "O") {
    symbol = "circle";
  } else if (name === "X") {
    symbol = "cross";
  } else {
    symbol = "";
  }
  return (
    <div
      className={disable ? "card-disable" : " card"}
      onClick={onPlay}
      disable={disable}
    >
      <Icon name={symbol} />
    </div>
  );
};

export default Card;
