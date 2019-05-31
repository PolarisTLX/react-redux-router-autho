import React, { Component } from 'react';


class AuthContainer extends Component {

  render() {
    return (
      <div>
        <p>BEGINING OF AUTH0 SECTION</p>
        <br />
        <br />
        <button onClick={() => this.props.auth.login()}> Login </button>
        {/* <button onClick={() => { console.log(this.props) }} > Login </button> */}
        <button onClick={() => this.props.auth.logout()}> Logout </button>
        <br />
        <br />
        <p>END OF AUTH0 SECTION</p>
      </div>
    );
  }
}



export default AuthContainer;