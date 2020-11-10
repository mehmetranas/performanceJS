import React from "react";

//Components
import { Header } from "./Components";
import { Layout, Menu } from "antd";
import { Home } from "./Pages";
// Styles
import "./App.scss";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-4/5">
          <Layout className="layout bg-white">
            <Layout.Header className="bg-transparent fixed bg-white py-2 w-full left-0 z-50 flex justify-center px-0">
              <Header />
            </Layout.Header>
            <Layout.Content>
              <div
                className="site-layout-content"
                style={{ paddingTop: "64px" }}
              >
                <Home />
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
