import React, { useEffect } from "react";
import { Layout, Menu, Grid } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import { createBrowserHistory } from "history";

//Components
import { Header, Footer } from "./Components";
import { Home, StaffDetails } from "./Pages";
// Styles
import "./App.scss";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const screens = Grid.useBreakpoint();
  const calculateHeaderHeightByScreenWidth = () =>
    screens.xl ? "120px" : "60px";
  const browserHistory = createBrowserHistory();

  browserHistory.listen((location, action) => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Router history={browserHistory}>
            <ScrollToTop />
            <Layout className="layout bg-white">
              <Layout.Header
                className="bg-transparent sticky bg-white py-2 w-full left-0 z-50 top-0 flex justify-center px-0"
                style={{ height: calculateHeaderHeightByScreenWidth() }}
              >
                <Header />
              </Layout.Header>

              <Layout.Content>
                <div className="site-layout-content pb-5">
                  <Switch>
                    <Route exact path="/">
                      <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/staff/:id" component={StaffDetails} />
                  </Switch>
                </div>
              </Layout.Content>
              <Layout.Footer className="bg-primary-1">
                <Footer />
              </Layout.Footer>
            </Layout>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
