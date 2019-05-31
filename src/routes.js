import React, { Component } from 'react';

import RouterComponent1 from './functional/routercomponent1'
import RouterComponent2 from './functional/routercomponent2'
// import Container1....
import Header from './components/header'


import { Router, Route } from 'react-router'


class Routes extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Router>
          <Route path="/routercomponent1" component={RouterComponent1} />
          <Route path="/routercomponent2" component={RouterComponent2} />
        </Router>
      </div>
     );
  }
}
 
export default Routes;