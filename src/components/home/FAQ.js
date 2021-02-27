import React from 'react';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;

const items = [
  {
    key: '1',
    header: 'How to setup the theme?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, ex.',
  },
  {
    key: '2',
    header: 'Can I change plan or cancel at any time?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, ex.',
  },
  {
    key: '3',
    header: 'How to access through cloud?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, ex.',
  },
  {
    key: '4',
    header: 'Can I manage multiple task?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, ex.',
  },
  {
    key: '5',
    header: 'How can I change my password?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, ex.',
  },
  {
    key: '6',
    header: 'How to manage my account?',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, ex.',
  },
];

function AppFAQ() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          {items.map(item => (
            <Panel header={item.header} key={item.key}>
              <p>{item.content}</p>
            </Panel>
          ))}
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid
            eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab
            excepturi nobis! Porro!
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppFAQ;
