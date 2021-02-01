import React, { useState } from "react";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";
// Components
import { Select, Button, Input, Form, message, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
// Styles
import styles from "./SectionBeratungInputs.module.scss";

// Sub Elements
const { Option } = Select;

let StyledAntButton = styled(Button)`
  background: #36a0fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3f8cd15a;
  border-radius: 10px;
  opacity: 1;
  color: #fff;
  border: none;
`;

let StyledAntSelect = styled(Select)`
  text-align: center;
  font: normal normal normal 1em Nunito;
  letter-spacing: 0px;
  color: #162162;
  opacity: 1;
`;

let StyledAntButtonLight = styled(Button)`
  box-shadow: 0px 10px 20px #3f8cd15a;
  border: 2px solid #162162;
  border-radius: 10px;
  opacity: 1;
`;

function SectionBeratungInputs() {
  const [form] = Form.useForm();
  const [formErrors, setFormErrors] = useState({});

  const selectBoxData = {
    treatments: [
      "Zahn-Bleaching",
      "Zahn-Implantate",
      "Kiefer-Orthopedie",
      "Wurzelkanal-Behandlung",
    ],
    clinics: ["Vefadent Ümraniye"],
  };

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
  }
  function onFinishFailed(event) {
    const { values } = event;
    displayValidationMessages(values);
  }

  function displayValidationMessages(values) {
    console.log(values);
    const { name, email, phoneNumber, city, clinic, treatment } = values;
    if (!name) {
      message.warning("Please enter your name");
    }
    if (!city) {
      message.warning("Please select city");
    }
    if (!clinic) {
      message.warning("Please select a clinic");
    }
    if (!treatment) {
      message.warning("Please select a treatment");
    }
    if (!email) {
      message.warning("Please enter your email");
    }
    if (!phoneNumber) {
      message.warning("Please enter your phone");
    }
  }

  return (
    <Form
      form={form}
      name="contactForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="gap-4 xl-gap-0 grid">
        {/* Select Boxes */}
        <div className="gap-4 grid grid-rows-1 md:grid-rows-1 md:gap-0 md:grid-cols-7">
          <div className={`md:col-span-5 row-span-1 ${styles.shadowBox}`}>
            <div className="grid grid-cols-2 md:grid-cols-3">
              <div className={`col-span-1 p-4  relative`}>
                <Form.Item
                  noStyle
                  name="city"
                  initialValue="1"
                  rules={[{ required: true }]}
                >
                  <StyledAntSelect
                    size="large"
                    bordered={false}
                    style={{ width: "100%" }}
                  >
                    <Option value="1">Istanbul</Option>
                  </StyledAntSelect>
                </Form.Item>
                <div className={`${styles.columnWithRightBorder}`}></div>
              </div>
              <div className={`col-span-1 p-4 relative`}>
                <Form.Item
                  noStyle
                  name="treatment"
                  rules={[{ required: true }]}
                >
                  <StyledAntSelect
                    placeholder="Einheit auswählen"
                    size="large"
                    bordered={false}
                    style={{ width: "100%" }}
                    id="treatment"
                  >
                    {selectBoxData.treatments?.map((item, index) => (
                      <Option value={item} key={index}>
                        {item}
                      </Option>
                    ))}
                  </StyledAntSelect>
                </Form.Item>
                <div
                  className={`${styles.columnWithRightBorder} hidden md:block`}
                ></div>
              </div>
              <div className="col-span-1 hidden md:block p-4">
                <Form.Item noStyle name="clinic" rules={[{ required: true }]}>
                  <StyledAntSelect
                    placeholder="Klinik wählen"
                    size="large"
                    bordered={false}
                    style={{ width: "100%" }}
                    id="clinic"
                  >
                    {selectBoxData.clinics?.map((clinic, index) => (
                      <Option value={clinic} key={index}>
                        {clinic}
                      </Option>
                    ))}
                  </StyledAntSelect>
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 row-span-1 md:px-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
            <div className={`md:hidden col-span-1 p-4 ${styles.shadowBox}`}>
              <Form.Item noStyle name="clinic" rules={[{ required: true }]}>
                <StyledAntSelect
                  placeholder="Klinik wählen"
                  size="large"
                  bordered={false}
                  style={{ width: "100%" }}
                  id="clinic-sm-screen"
                >
                  {selectBoxData.clinics?.map((clinic, index) => (
                    <Option value={clinic} key={index}>
                      {clinic}
                    </Option>
                  ))}
                </StyledAntSelect>
              </Form.Item>
            </div>
            <div className="col-span-1">
              <StyledAntButtonLight
                size="large"
                className="h-full whitespace-normal"
                block
                onClick={() => window.tidioChatApi.open()}
              >
                Online Beratung
              </StyledAntButtonLight>
            </div>
          </div>
        </div>

        {/* Input Boxes */}
        <div className="gap-4 grid grid-rows-2 md:grid-rows-1 md:gap-0 md:grid-cols-7">
          <div className={`md:col-span-5 row-span-1 ${styles.shadowBox}`}>
            <div className="grid grid-cols-2 md:grid-cols-3">
              <div className="col-span-1 p-4 relative">
                <Form.Item
                  noStyle
                  name="name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
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
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input a phone number!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    bordered={false}
                    placeholder="Telefon"
                    className={`${styles.styledPlaceholder}`}
                  />
                </Form.Item>
              </div>
              <div className="col-span-1 p-4 hidden md:block relative">
                <Form.Item
                  noStyle
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input an email!",
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
                    message: "Please input an email!",
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
      </div>
    </Form>
  );
}

export default SectionBeratungInputs;
