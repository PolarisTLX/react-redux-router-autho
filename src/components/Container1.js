import React, { Component } from 'react';
// import ...

import * as ACTION_TYPES from "../store/actions/action_types";
import * as ACTIONS from "../store/actions/actions";

import { connect } from "react-redux";

// a simple container to test out Redux State
class Container1 extends Component {

  render() { 
    const user_text = "text 1";
    return ( 
      <div>
        <button onClick={() => console.log(this.props.stateprop1)}> Read Current State </button>
        <button onClick={() => this.props.action1()}> Dispatch Action 1 </button>
        <button onClick={() => this.props.action2()}> Dispatch Action 2 </button>
        <button onClick={() => this.props.action_creator1()}> Dispatch Action Creator 1 </button>
        <button onClick={() => this.props.action_creator2()}> Dispatch Action Creator 2 </button>
        <br/>
        <button onClick={() => { 
          this.props.action_creator3(user_text); 
          console.log(this.props.stateprop2);
          } }
        > 
          Dispatch Action Creator 3 
        </button>
        {/* Render data to screen from clicking on Dispatch Action Creator 3 */}
        {/* if the date exists, show it: */}
        {this.props.user_input
          ? <h1>{this.props.user_input}</h1>
          : null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // stateprop1: state.stateprop1,
    // stateprop2: state.user_text    
    // changed now that reducers have been joined:
    
    // and need to indicate which reducer each comes from:
    stateprop1: state.reducer1.stateprop1,
    user_input: state.user_reducer.user_text

  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.user_input(text))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Container1);