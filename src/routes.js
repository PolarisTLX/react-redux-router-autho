import React, { Component } from 'react';

import RouterComponent1 from './functional/routercomponent1'
import RouterComponent2 from './functional/routercomponent2'
// import Container1....
import Header from './components/header'
// to make the "back button" on browser work with this kind of SPA
import createBrowserHistory from './utils/history'


import { Router, Route, Switch } from 'react-router'


class Routes extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Router history={createBrowserHistory}>
          <div>
            <Header/>
            <Switch>
              <Route path="/routercomponent1" component={RouterComponent1} />
              {/* <Route path="/routercomponent2" component={RouterComponent2} /> */}
              <Route path="/routercomponent2" render={(props) => <div><RouterComponent2 {...props}/> </div> } />
            </Switch>
          </div>
        </Router>
      </div>
     );
  }
}
 
export default Routes;