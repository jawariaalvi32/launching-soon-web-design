import { Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import CrossButton from "../components/button/CrossButton";
import OutlinedButton from "../components/button/OutlinedButton";
import TextCard from "../components/card/Card";
import Emoji from "../assets/images/emoji.svg";
import ColouredButton from "../components/button/ColouredButton";
import RightPanel from "../components/right-panel/RightPanel";

const Notify = () => {
  const [values, setValues] = useState({});
  return (
    <Row>
      <Col
        lg={16}
        md={24}
        style={{
          padding: "15px 20px 0px 100px",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <CrossButton />
        <div>
          <Typography className="secondary-heading">Get to know about our launch</Typography>
          <p>
          Subscribe to our newsletter and we will send you a notification about the launch of our brand new site.
          </p>

          <Form
            // form={form}
            name="contact"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Row>
              
              <Col span={24} className="p-5">
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
                <ColouredButton btnText={"Send"} />
              </Col>
            </Row>
          </Form>

          <div>
            <img src={Emoji} alt="oops"/>
          <Typography className="secondary-heading">Ooops!</Typography>
          <p>
          Something went wrong. Please try again later.
          </p>
          </div>
        </div>
      </Col>
      <Col lg={8} md={24}>
      <RightPanel />

      </Col>
    </Row>
  );
};

export default Notify;
