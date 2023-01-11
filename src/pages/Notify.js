import { Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import CrossButton from "../components/button/CrossButton";
import Emoji from "../assets/images/emoji.svg";
import ColouredButton from "../components/button/ColouredButton";
import RightPanel from "../components/right-panel/RightPanel";
import { motion } from "framer-motion";

const Notify = ({ setPageName }) => {
  const [values, setValues] = useState({});
  const [isShowErr, setErr] = useState(false);

  const onSubmit = () => {
    if (!values.email) {
      setErr(true);
    } else {
      setPageName("home");
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Row>
        <Col lg={16} md={24} className="notify-panel">
          <div style={{ marginBottom: "auto", marginTop: '15px' }}>
            <CrossButton onClick={() => setPageName("home")} />
          </div>
          <div className="notify-content-box">
            <Typography className="secondary-heading">
              Get to know about our launch
            </Typography>
            <p>
              Subscribe to our newsletter and we will send you a notification
              about the launch of our brand new site.
            </p>
            {!isShowErr ? (
              <Form
                // form={form}
                name="contact"
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name="email"
                      label=""
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                        {
                          type: "email",
                          message: "",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Email Address*"
                        value={values.email}
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <ColouredButton
                      btnText={"Send"}
                      type="btn-sm"
                      onClick={() => onSubmit()}
                    />
                  </Col>
                </Row>
              </Form>
            ) : (
              <div>
                <img src={Emoji} alt="oops" />
                <Typography className="secondary-heading">Ooops!</Typography>
                <p>
                  Something went wrong. Please{" "}
                  <span onClick={() => setErr(false)} className="link">
                    try again
                  </span>{" "}
                  later.
                </p>
              </div>
            )}
          </div>
        </Col>
        <Col lg={8} md={24}>
          <RightPanel />
        </Col>
      </Row>
    </motion.div>
  );
};

export default Notify;
