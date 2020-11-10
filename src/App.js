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
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <Layout className="layout bg-white">
            <Layout.Header
              className="bg-transparent sticky bg-white py-2 w-full left-0 z-50 top-0 flex justify-center px-0"
              style={{ height: "120px" }}
            >
              <Header />
            </Layout.Header>
            <Layout.Content>
              <div className="site-layout-content">
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
