import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, qui.</p>
        </div>

        <Form name="basic" initialValues={{ agreement: true }}>
          <Form.Item name="fullname" rules={[{ required: true, message: 'Please input your Full Name!' }]}>
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email Adress!' }]}>
            <Input placeholder="Email Address" />
          </Form.Item>

          <Form.Item name="phone" rules={[{ required: true, message: 'Please input your Phone Number!' }]}>
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item name="subject" rules={[{ required: true, message: 'Please input a subject!' }]}>
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item name="message" rules={[{ required: true, message: 'Please input a message!' }]}>
            <Input.TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            name="agreement"
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')),
              },
            ]}
          >
            <Checkbox>I agree with terms and conditions.</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
