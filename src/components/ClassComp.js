import React, { Component } from 'react';

class ClassComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      statevalue1: "Our Initial State"
    }
  }


  wrongChangeState = () => {
    this.state.statevalue1 = "New State"
    // because cannot mutate state directly
    // must use setState()
  }

  correctChangeState = () => {
    this.setState({
      statevalue1: "New State"
    })
  }

  state = {  }
  render() { 
    return ( 
      <div>
        <button onClick={() => this.wrongChangeState()}> Change State </button>
        <button onClick={() => this.correctChangeState()}> Change State </button>
        {/*OR can also:*/}
        <button onClick={() => this.setState({ statevalue1: "New State" })}> Change State </button>
        {this.state.statevalue1}
      </div>
     );
  }
}
 
export default ClassComp;