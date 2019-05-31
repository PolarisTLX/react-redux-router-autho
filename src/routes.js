import React, { Component } from 'react';

import RouterComponent1 from './functional/routercomponent1';
import RouterComponent2 from './functional/routercomponent2';
// import Container1 from './components/Container1'
import AuthContainer from './components/AuthContainer';

import Header from './components/header';
// to make the "back button" on browser work with this kind of SPA
import createBrowserHistory from './utils/history';
import AuthCheck from './utils/authcheck';
import { Router, Route, Switch, Redirect } from 'react-router';

import Callback from './functional/callback';
// import ProtectedRoute from './functional/protectedroute';
// import UnauthRedirect from './functional/unauthredirect';

import Auth from './utils/auth';
import ProtectedRoute from './functional/protectedroute';
import UnauthRedirect from './functional/unauthredirect';


const auth = new Auth();

const handleAuthentication = (props) => {
  if(props.location.hash) {
    auth.handleAuth();
  }
}

const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth.isAuthenticated() === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/redirect'}} /> 
  }/>
)


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
              <Route path='/redirect' component={UnauthRedirect} />
              <Route path='/callback' render={ (props) => { handleAuthentication(props); return <Callback/> } } />
              <Route path='/authcheck' render={() => <AuthCheck auth={auth} /> } />

              <PrivateRoute path="/privateroute" auth={auth} component={ProtectedRoute} />
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