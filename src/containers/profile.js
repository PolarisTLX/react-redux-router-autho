import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Profile extends Component {

  RenderProfile = (props) => (
    <div>
      <h3>None of these are working but should be all possible properties you can get from external profile, like name, avatar, gender, city etc.</h3>
      <h3>{props.profile.profile.nickname}</h3>
      <br/>
      <img src={props.profile.profile.picture} alt="" />
      <br/>
      <h4>{props.profile.profile.email}</h4>
      <br/>
      <h4>{props.profile.profile.name}</h4>
      <br/>
      <h4>Email Verified:</h4> {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p> }
      <br/>
    </div>
  )

  render() { 
    return ( 
      <div>
        <this.RenderProfile profile={this.props.profile} />
      </div>
     );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.auth_reducer.profile
  }
}
 
export default connect(mapStateToProps)(Profile);
