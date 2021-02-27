import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Drawer, Button } from 'antd';
import Logo from '../../assets/images/the_bois_logo.png';

const { Link } = Anchor;

function AppHeader({ onAnchorChange }) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="the_bois_logo" />
          <a href="#hero">The Bois</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65" onChange={onAnchorChange}>
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#features" title="Feature" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" closable={false} onClose={onClose} visible={visible}>
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#features" title="Feature" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
