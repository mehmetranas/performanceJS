import React from "react";
import { Layout, Menu, Grid } from "antd";

//Components
import { Header, Footer } from "./Components";
import { Home } from "./Pages";
// Styles
import "./App.scss";

function App() {
  const screens = Grid.useBreakpoint();
  const calculateHeaderHeightByScreenWidth = () =>
    screens.xl ? "120px" : "60px";
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Layout className="layout bg-white">
            {/* <div className="grid-cols-12 grid">
              <div className="col-span-10 col-start-2"> */}
            <Layout.Header
              className="bg-transparent sticky bg-white py-2 w-full left-0 z-50 top-0 flex justify-center px-0"
              style={{ height: calculateHeaderHeightByScreenWidth() }}
            >
              <Header />
            </Layout.Header>

            <Layout.Content>
              <div className="site-layout-content pb-5">
                <Home />
              </div>
            </Layout.Content>
            <Layout.Footer className="bg-primary-1">
              <Footer />
            </Layout.Footer>
          </Layout>
        </div>
      </div>
    </>
  );
}

export default App;
