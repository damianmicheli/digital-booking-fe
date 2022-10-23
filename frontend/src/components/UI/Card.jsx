import React from "react";
import  "./card.css";

export const Card = (props) => {
  const classes = "card" + props.className;

  return <div className={classes}>{props.children}</div>;
};
