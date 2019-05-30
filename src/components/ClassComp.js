import React, { Component } from 'react';

class ClassComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      statevalue1: "Our Initial State",
      statevalue2: 5
    }
  }


  wrongChangeState = () => {
    this.state.statevalue1 = "New State"
    // because cannot mutate state directly
    // must use setState()
  }

  correctChangeState = () => {
    // this.setState({
    //   statevalue1: "New State"
    // })

    // this.setState((prevState, props) => ({
    //   statevalue2: prevState.statevalue2 + 1
    // }))  
    
    // OR Both at the same time:

    this.setState((prevState, props) => ({
      statevalue1: "New State",
      statevalue2: prevState.statevalue2 + 1
    }))
  }

  otherChangeState = () => (
    this.setState({ statevalue2: this.state.statevalue2 + 1 })
  )

  state = {  }
  render() { 
    return ( 
      <div>
        <button onClick={() => this.wrongChangeState()}> Wrong Change Text State </button>
        <button onClick={() => this.correctChangeState()}> Change Text and Number State </button>
        {/*OR can also, (but not recommended for readibility):*/}
        <button onClick={() => this.setState({ statevalue1: "New State" })}> Change Text State </button>
        {this.state.statevalue1}
        {this.state.statevalue2}
        <button onClick={() => this.otherChangeState()}> Other Change Number State </button>
      </div>
    );
  }
}
 
export default ClassComp;