import { Col, Row, Typography } from "antd";
import React from "react";
import ColouredButton from "../components/button/ColouredButton";
import OutlinedButton from "../components/button/OutlinedButton";
import { Navbar } from "../components/navbar/Navbar";
import RightPanel from "../components/right-panel/RightPanel";

export const Home = () => {
  return (
    <Row>
      <Col lg={16} md={24}>
        <Navbar />
        <div className="left-panel">
            <div style={{width:'525px'}}>
            <Typography className="side-headings"> We are</Typography>
          <span className="primary-heading text-red">Experience</span>
          <p>
            We are preparing something amazing and exciting for you. Special
            surprise for our subscribers only.
          </p>
          <ColouredButton btnText={"Notify Us"} />
            </div>
         
        </div>
      </Col>
      <Col lg={8} md={24}>
      <RightPanel />

      </Col>
    </Row>
  );
};
