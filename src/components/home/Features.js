import React from 'react';
import { Col, Row } from 'antd';
import { Card } from 'antd';

import img1 from '../../assets/images/boubidi.JPG';
import img2 from '../../assets/images/nassim.jpg';
import img3 from '../../assets/images/mazegh.JPG';
import img4 from '../../assets/images/balady.JPG';
import img5 from '../../assets/images/stofe.JPG';
import img6 from '../../assets/images/mouad.JPG';
import img7 from '../../assets/images/taha.JPG';

const { Meta } = Card;

const items = [
  {
    key: '1',
    image: { src: img1, alt: 'boubidi' },
    title: 'Boubidi',
  },
  {
    key: '2',
    image: { src: img2, alt: 'nassim' },
    title: 'Nassim',
  },
  {
    key: '3',
    image: { src: img3, alt: 'mazegh' },
    title: 'Mazegh',
  },
  {
    key: '4',
    image: { src: img4, alt: 'balady' },
    title: 'Balady',
  },
  {
    key: '5',
    image: { src: img5, alt: 'stofe' },
    title: 'Stofe',
  },
  {
    key: '6',
    image: { src: img6, alt: 'mouad' },
    title: 'Mouad',
  },
  {
    key: '7',
    image: { src: img7, alt: 'taha' },
    title: 'Taha',
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
