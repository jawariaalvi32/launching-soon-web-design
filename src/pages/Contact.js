import { Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import BackButton from "../components/button/BackButton";
import OutlinedButton from "../components/button/OutlinedButton";
import TextCard from "../components/card/Card";
import Line from "../assets/images/line.svg";
import ColouredButton from "../components/button/ColouredButton";
import RightPanel from "../components/right-panel/RightPanel";

const Contact = () => {
  const form = Form.useForm();
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
        <BackButton />
        <div>
          <Typography className="primary-heading">Get in touch</Typography>
          <img src={Line} alt="underline"  className="contact-us-underline" style={{ marginLeft: "-100px" }} />
          <p>
            You can call us or leave a request here. We are always glad to see
            you in our office from 9:00 to 18:00. Contact us via phone: +1
            212-708-9400 or email: example@example.com
          </p>

          <Form
            // form={form}
            name="contact"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Row>
              <Col md={12} xs={24} className="p-5">
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
              <Col md={12} xs={24} className="p-5">
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

              <Col md={12} xs={24} className="p-5">
                <Form.Item
                  name="company"
                  label=""
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input
                    placeholder="Company Name*"
                    value={values.company}
                    onChange={(e) =>
                      setValues({ ...values, company: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={24} className="p-5">
                <Form.Item
                  name="phone"
                  label=""
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input
                    placeholder="Phone Number*"
                    value={values.phone}
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
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
      </Col>
      <Col lg={8} md={24}>
      <RightPanel />

      </Col>
    </Row>
  );
};

export default Contact;
