import { Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import ColouredButton from "../button/ColouredButton";
import CrossButton from "../button/CrossButton";
import OutlinedButton from "../button/OutlinedButton";

const RightPanel = () => {
  const [isShowForm, setFormVisibility] = useState(false);
  const [values, setValues] = useState({});
  return (
    <>
      {!isShowForm ? (
        <div className="right-panel-bg right-panel">
          <Typography className="side-headings">
            Our website is under construction, but we are ready to go!
          </Typography>
          <p>
            Want to know more about us, tell us about your project or just to
            say hello? Drop us a line and we will get back as soon as possible.
          </p>
          <OutlinedButton
            btnText={"Write a line"}
            onClick={() => setFormVisibility(true)}
          />
        </div>
      ) : (
        <div className="right-panel-bg">
          <div className="right-panel-cross-btn">
            <CrossButton onClick={() => setFormVisibility(false)} />
          </div>
          <div className="right-panel">
            <Typography className="side-headings">Stay in touch</Typography>
            <Form
              // form={form}
              name="contact"
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Row>
                <Col span={24} className="p-5">
                  <Form.Item
                    name="name"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Your Name*"
                      value={values.name}
                      onChange={(e) =>
                        setValues({ ...values, name: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
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

                <Col span={24} className="p-5">
                  <Form.Item
                    name="message"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      placeholder="A Few Words*"
                      value={values.message}
                      onChange={(e) =>
                        setValues({ ...values, message: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <ColouredButton btnText={"Send"} />
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default RightPanel;
