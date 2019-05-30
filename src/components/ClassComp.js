import React, { Component } from 'react';
import FunctComp1 from "./FunctComp1";

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

  // alternative conditional if/else usage:
  conditionalFunction = () => {
    if (true) {
      return (<div>alterternate conditiona use 1</div>)
    } else {
      return (<div>alterternate conditiona use 2</div>)
    }
  }

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
        <br/>

        {/*passing state as props (not a recommended patter!):*/}
        <FunctComp1 passedprop1={this.state.statevalue2}/>
        <br/>
        <br/>
        <br/>
        {/*if/else is done usually through ternary expressions:*/}
        {true ? <div>Condition 1</div> : <div>Condition 2</div>}
        <br/>
        {true 
          ? <div>Condition 1</div> 
          : <div>Condition 2</div>
        }
        <br/>

        {/* nested ternery example: */}
        {false 
          ? true ? <div>Nested Condition 1</div> : <div>Nested Condition 2</div>
          : false ? <div>Nested Condition 3</div> : <div>Nested Condition 4</div>
        }

        <br/>
        {/* alternate conditional use: */}
        {this.conditionalFunction()}
      </div>

    );
  }
}
 
export default ClassComp;