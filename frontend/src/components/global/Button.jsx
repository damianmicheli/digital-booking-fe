import React from "react";

const Button = ({ css, event, type, text }) => {
  return (
    <button className={css} onClick={event} type={type}>
      {text}
    </button>
  );
};

export default Button;
