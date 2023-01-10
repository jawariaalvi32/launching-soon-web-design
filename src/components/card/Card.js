import { Card } from "antd";
import React from "react";
import Bullet from "../../assets/images/bullet.svg";

const TextCard = ({ heading, text }) => {
  return (
    <>
      <h2>{heading}</h2>
      <Card className="card">
        <img src={Bullet} alt="bullet" className="card-image" />
        <p>{text}</p>
      </Card>
    </>
  );
};

export default TextCard;
