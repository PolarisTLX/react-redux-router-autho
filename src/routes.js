import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as ACTIONS from './store/actions/actions';

// import RouterComponent1 from './functional/routercomponent1';
import RouterComponent2 from './functional/routercomponent2';
// import Container1 from './components/Container1'
import AuthContainer from './components/AuthContainer';

import Header from './components/header';
// to make the "back button" on browser work with this kind of SPA
import createBrowserHistory from './utils/history';
import AuthCheck from './utils/authcheck';
import Profile from "./containers/profile";

import { Router, Route, Switch, Redirect } from 'react-router';

import Callback from './functional/callback';
// import ProtectedRoute from './functional/protectedroute';
// import UnauthRedirect from './functional/unauthredirect';

import Auth from './utils/auth';
import ProtectedRoute from './functional/protectedroute';
import UnauthRedirect from './functional/unauthredirect';

import HooksContainer1 from './hooks/hookscontainer1';

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


  // This componentDidMount() is for a "silent authentication"
  // it means a user remains logged in even when the page is refreshed
  // thus fixing an awful flaw
  // this needs to be a Redux Container for this to work?
  // by importing { connect }  above
  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.login_success()
      auth.getProfile()
      // Redux needs time to update the state:
      setTimeout(() => { this.props.add_profile(auth.userProfile) }, 2000)
    } else {
      this.props.login_failure()
      this.props.remove_profile()
    }
  }
  
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
              <PrivateRoute path="/profile" auth={auth} component={Profile}  />
              <Route path="/hookscontainer" component={HooksContainer1} />
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

function mapDispatchToProps (dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
    remove_profile: () => dispatch(ACTIONS.remove_profile())
  }
}
 
export default connect(null, mapDispatchToProps)(Routes);