import React from 'react';
import { Col, Row } from 'antd';
import { Card } from 'antd';

import img1 from '../../assets/images/modern-design.jpg';
import img2 from '../../assets/images/clean-design.jpg';
import img3 from '../../assets/images/great-support.jpg';
import img4 from '../../assets/images/easy-customise.jpg';
import img5 from '../../assets/images/unlimited-features.jpg';
import img6 from '../../assets/images/advanced-option.jpg';

const { Meta } = Card;

const items = [
  {
    key: '1',
    image: { src: img1, alt: 'modern-design' },
    title: 'Modern Design',
  },
  {
    key: '2',
    image: { src: img2, alt: 'clean-design' },
    title: 'Clean and Elegant',
  },
  {
    key: '3',
    image: { src: img3, alt: 'great-support' },
    title: 'Great Support',
  },
  {
    key: '4',
    image: { src: img4, alt: 'easy-customise' },
    title: 'Easy to customise',
  },
  {
    key: '5',
    image: { src: img5, alt: 'unlimited-features' },
    title: 'Unlimited Features',
  },
  {
    key: '6',
    image: { src: img6, alt: 'advanced-option' },
    title: 'Advanced Options',
  },
];

function AppFeatures() {
  return (
    <div id="features" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam sunt neque illo consequuntur odio sit,
            ut laboriosam ad soluta.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col key={item.key} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                <Card hoverable cover={<img alt={item.image.alt} src={item.image.src} />}>
                  <Meta title={item.title} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppFeatures;
