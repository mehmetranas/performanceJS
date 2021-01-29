import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import emailjs from "emailjs-com";
// Components
import { Button, Input, Form, message, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
// Styles
import styles from "./SectionBeratungInputs.module.scss";
let StyledAntButton = styled(Button)`
  background: #36a0fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3f8cd15a;
  border-radius: 10px;
  opacity: 1;
  color: #fff;
  border: none;
`;

function SectionBeratungInputs() {
  const [form] = Form.useForm();

  const [progressSendEmail, setProgressSendEmail] = useState(false);
  const openNotification = () => {
    notification.open({
      placement: "bottomLeft",
      message: "Thank You",
      description: "We will response you as soon as possible.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };
  function onFinish(event) {
    setProgressSendEmail(true);
    emailjs
      .send(
        "service_qlif5l6",
        "template_2qyrxac",
        event,
        "user_1Fl3SPtx2NX4c9MH6QUsB"
      )
      .finally(() => setProgressSendEmail(false))
      .then(
        (result) => {
          openNotification();
          form.resetFields();
        },
        (error) => {
          message.error(
            "An error occurred while sending your message,would you try again?"
          );
        }
      );
  }
  function onFinishFailed(event) {
    const { values } = event;
    displayValidationMessages(values);
  }

  function displayValidationMessages(values) {
    const { user_name, mail, phone } = values;
    if (!user_name) {
      message.warning("Please enter your name");
    }

    if (!mail && !phone) {
      message.warning("Please enter a phone number or a valid email address");
    }
  }

  return (
    <Form
      form={form}
      name="contactForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="gap-4 grid grid-rows-2 md:grid-rows-1 md:gap-0 md:grid-cols-7">
        <div className={`md:col-span-5 row-span-1 ${styles.shadowBox}`}>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="col-span-1 p-4 relative">
              <Form.Item
                noStyle
                name="user_name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  size="large"
                  bordered={false}
                  placeholder="Name, Nachname"
                  className={`${styles.styledPlaceholder}`}
                />
              </Form.Item>
              <div className={`${styles.columnWithRightBorder}`}></div>
            </div>
            <div className={`col-span-1 p-4 relative`}>
              <div className={`${styles.columnWithRightBorder}`}></div>
              <Form.Item
                noStyle
                className="mb-0"
                name="phone"
                rules={[
                  {
                    type: "number",
                    required: !form.isFieldValidating("email"),
                    message: "Please input your phone or email!",
                  },
                ]}
              >
                <Input
                  size="large"
                  bordered={false}
                  placeholder="Telefon"
                  pattern="[0-9\.]+"
                  type="tel"
                  className={`${styles.styledPlaceholder}`}
                />
              </Form.Item>
            </div>
            <div className="col-span-1 p-4 hidden md:block">
              <Form.Item
                noStyle
                name="email"
                rules={[
                  {
                    required: !form.isFieldValidating("phone"),
                    type: "email",
                    message: "Please input your phone or email!",
                  },
                ]}
              >
                <Input
                  size="large"
                  bordered={false}
                  placeholder="E-Mail"
                  className={`${styles.styledPlaceholder}`}
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 row-span-1 md:px-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
          <div className={`col-span-1 p-4 md:hidden ${styles.shadowBox}`}>
            <Form.Item
              noStyle
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Please input your phone or email!",
                },
              ]}
            >
              <Input
                size="large"
                bordered={false}
                placeholder="E-Mail"
                className={`${styles.styledPlaceholder}`}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle>
              <StyledAntButton
                size="large"
                htmlType="submit"
                className={`h-full w-full border-none`}
                loading={progressSendEmail}
              >
                Absenden
              </StyledAntButton>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SectionBeratungInputs;
