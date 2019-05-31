import React, { Component } from 'react';

import RouterComponent1 from './functional/routercomponent1';
import RouterComponent2 from './functional/routercomponent2';
// import Container1 from './components/Container1'
import AuthContainer from './components/AuthContainer';

import Header from './components/header';
// to make the "back button" on browser work with this kind of SPA
import createBrowserHistory from './utils/history';
import { Router, Route, Switch } from 'react-router';

import Callback from './functional/callback';

import Auth from './utils/auth';

const auth = new Auth();

const handleAuthentication = (props) => {
  if(props.location.hash) {
    auth.handleAuth();
  }
}


class Routes extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Router history={createBrowserHistory}>
          <div>
            <Header/>
            <Switch>
              {/* <Route path="/routercomponent1" component={RouterComponent1} /> */}
              {/* <Route path="/routercomponent2" component={RouterComponent2} /> */}
              <Route path="/routercomponent/:id" render={(props) => <div><RouterComponent2 {...props}/> check this line in the code - this isn't right </div> } />

              {/* Note that the Auth stuff below disappears once logged in: */}
              <Route exact path='/' render={ () => <AuthContainer auth={auth} /> } />
              <Route path='/callback' render={ (props) => { handleAuthentication(props); return <Callback/> } } />
            </Switch>
            <p>0Auth route above? (only appears if not logged in) </p>
            <br/>
            <br/>
            <br/>
          </div>
        </Router>
      </div>
     );
  }
}
 
export default Routes;