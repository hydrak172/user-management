import React from 'react';
// import HomeWork2 from './HomeWork2';
// import { useState } from 'react';
import Exam05 from './components/Exam05'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `System ${key}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Exam05/>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >

        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          textTransform:'uppercase',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>

  ); 
  // return (
  //   <div> <HomeWork2 /></div>
  // )
};
export default App;