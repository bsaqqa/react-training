import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Layout} from 'antd';

import Nav from './Components/Nav'
import Routers from './router';

const {Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
          <Header className="nav-header">
            <Nav/>
          </Header>

          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 32 }}>
            <Switch>
              {Routers.map((e,index)=>(
                <Route key={'page-'+index} exact path={e.link} children={e.component}/>
              ))}

              <Route key={'page-noMatch'} exact path="*" >
                <Redirect to="/error"/>
              </Route>
            </Switch>
          </Content >
          <Footer style={{ textAlign: 'center' }}>FTC ©{new Date().getFullYear()}</Footer>

      </Layout>
    </Router>
  );
}


export default App;
