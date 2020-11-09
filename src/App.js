import React from "react";

//Components
import { Header } from "./components";
import { Layout, Menu } from "antd";
// Styles
import "./App.scss";

function App() {
  return (
    <>
      <Layout className="layout bg-white">
        <Layout.Header className="bg-transparent h-full bg-white py-2">
          <Header />
        </Layout.Header>
        <Layout.Content>
          <div className="site-layout-content">Content</div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </>
  );
}

export default App;
