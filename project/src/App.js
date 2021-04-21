import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Routes from './router';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
        <div>
            <Navbar/>

            <Switch>
                {Routes.map((e,index)=>(
                    <Route key={'page-'+index} exact path={e.link} children={e.component}/>
                ))}

                <Route key={'page-noMatch'} exact path="*" >
                    <Redirect to="/error"/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
