import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Nav from './Components/Nav'
import Routers from './router';


function App() {
  return (
    <Router>
      <div>
        <Nav/>

        <Switch>
          {Routers.map((e,index)=>(
            <Route key={'page-'+index} exact path={e.link} children={e.component}/>
          ))}

          <Route key={'page-noMatch'} exact path="*" >
            <Redirect to="/error"/>
          </Route>

          {/* <Route key={'page-5'} exact path="/about/:id" children={<About/>}> */}
            {/* <About id=""/> */}
          {/* </Route> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;
