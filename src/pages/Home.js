import { Col, Row, Typography } from "antd";
import React from "react";
import ColouredButton from "../components/button/ColouredButton";
import { motion } from "framer-motion";
import { Navbar } from "../components/navbar/Navbar";
import RightPanel from "../components/right-panel/RightPanel";

export const Home = ({ pageName, setPageName }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Row>
        <Col lg={16} md={24}>
          <Navbar pageName={pageName} setPageName={setPageName} />
          <div className="left-panel">
            <div className="main-content-box">
              <Typography className="side-headings"> We are</Typography>
              <span className="primary-heading text-red">Experience</span>
              <p>
                We are preparing something amazing and exciting for you. Special
                surprise for our subscribers only.
              </p>
              <ColouredButton
                btnText={"Notify Us"}
                onClick={() => setPageName("notify")}
              />
            </div>
          </div>
        </Col>
        <Col lg={8} md={24}>
          <RightPanel />
        </Col>
      </Row>
    </motion.div>
  );
};
