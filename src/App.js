import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './components/common/Header';
import AppHome from './views/Home';
import AppFooter from './components/common/Footer';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

function App() {
  const [isInHome, setIsInHome] = useState(true);

  const handleAnchorChange = link => {
    if (link === '#hero') setIsInHome(true);
    else setIsInHome(false);
  };

  return (
    <Layout className="mainLayout">
      <Header className={isInHome ? '' : 'ant-layout-header-shadow'}>
        <AppHeader onAnchorChange={handleAnchorChange} />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
