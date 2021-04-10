import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Layout} from 'antd';

import Nav from './Components/Nav'
import Routers from './router';

const {Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
          <Header>
            <Nav/>
          </Header>

          <Content >
            <Switch>
              {Routers.map((e,index)=>(
                <Route key={'page-'+index} exact path={e.link} children={e.component}/>
              ))}

              <Route key={'page-noMatch'} exact path="*" >
                <Redirect to="/error"/>
              </Route>
            </Switch>
          </Content >
      </Layout>
    </Router>
  );
}


export default App;
