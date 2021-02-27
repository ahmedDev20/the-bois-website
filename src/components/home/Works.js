import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AppWorks = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, molestiae?</p>
        </div>
        <div className="contentHolder">
          <Button onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>
        <Modal title="How it works" visible={isModalVisible} footer={null} onCancel={handleCancel}>
          <iframe
            src="//www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            name="youtube embed"
            allow="autoplay; encrypted-media"
            width="100%"
            height="350"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};

export default AppWorks;
