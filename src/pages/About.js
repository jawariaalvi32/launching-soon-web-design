import { Col, Row, Typography } from "antd";
import React from "react";
import BackButton from "../components/button/BackButton";
import TextCard from "../components/card/Card";
import Line from '../assets/images/line.svg'
import RightPanel from "../components/right-panel/RightPanel";
import { motion } from "framer-motion"

const About = ({pageName, setPageName}) => {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
    <Row >
      <Col lg={16} md={24} className="left-panel-content">
        <BackButton onClick={ () => setPageName('home') }/>
        <div style={{ marginTop: '15px' }}>
          <Typography className="primary-heading">About us</Typography>
          <img src={Line} alt="underline" className="about-us-underline"/>
          <p>
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a little different. But if I'm not the same, the next
            question is 'Who in the world am I?' Ah, that's the great puzzle!
          </p>

          <Row>
            <Col md={12} sm={24}>
                <TextCard text={"I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning."} heading="1. Verification"/>
            </Col>
            <Col md={12} sm={24}>
                <TextCard text={"I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning."} heading="2. Verification"/>
            </Col>
            <Col md={12} sm={24}>
                <TextCard text={"I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning."} heading="3. Verification"/>
            </Col>
            <Col md={12} sm={24}>
                <TextCard text={"I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning."} heading="4. Verification"/>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={8} md={24}>
        <RightPanel />
      </Col>
    </Row>
    </motion.div>
  );
};

export default About;
