import React, { useState } from 'react';
import { Content, Header } from "./components";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import {
    OrderList as OrderListScene
} from "./scenes";

function App() {
  const [activeTab, setActiveTab] = useState('3');

  const toggle = (tab:any) => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <Router>
      <Header>
        <Header.AlignLeft>
          
        </Header.AlignLeft>
        <Header.AlignRight>
          <div className="d-flex">
            <Link to={Routes.ORDERLIST.use()} className={ activeTab === '3' ? 'z99' : 'z90' }>
              <div
                className={ activeTab === '3' ? 'active-last-nav-item' : 'last-nav-item' }
                onClick={() => { toggle('3'); }}
              >
                Orders
              </div>
            </Link>
          </div>
        </Header.AlignRight>
      </Header>
      <Content>
        <Switch>
          <Route path={Routes.ORDERLIST.route} component={OrderListScene} />
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
