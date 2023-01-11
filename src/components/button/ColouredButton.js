import React from "react";

const ColouredButton = ({ btnText, onClick, type }) => {
  return (
    <button
      className={
        type === "btn-sm" ? "btn-sm coloured-button" : "coloured-button"
      }
      onClick={() => onClick()}
    >
      {btnText}
    </button>
  );
};

export default ColouredButton;
