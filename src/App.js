import React from "react";

//Components
import { Header } from "./components";
import { Layout, Menu } from "antd";
import { AppSwiper } from "./components";
// Styles
import "./App.scss";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-4/5">
          <Layout className="layout bg-white">
            <Layout.Header className="bg-transparent h-full bg-white py-2">
              <Header />
            </Layout.Header>
            <Layout.Content>
              <div className="site-layout-content">
                <AppSwiper />
              </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Layout.Footer>
          </Layout>
        </div>
      </div>
    </>
  );
}

export default App;
