import React from "react";

const OutlinedButton = ({ btnText, onClick, type }) => {
  return (
    <button
      className={
        type === "btn-sm" ? "btn-sm outlined-button" : "outlined-button"
      }
      onClick={() => onClick()}
    >
      {btnText}
    </button>
  );
};

export default OutlinedButton;
