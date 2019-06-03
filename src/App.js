// import React from 'react';

// let name = "Paul"

// function App() {
//   return (
//     <div className="App">
//       React
//       {name}
//     </div>
//   );
// }

// export default App;


// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import * as styles from "./styles"
import ClassComp from "./components/ClassComp"
import ListComp1 from "./components/ListComp1"
import FormsComp from "./components/FormsComp"
import Container1 from "./components/Container1"
import Routes from './routes'

import Context from './utils/context'

// class App extends Component {
const App = () => {
  // name = "Paul"

  // state = {
  let state = {
    counter: 0
  }

  // increment = () => {
  let increment = () => {
    this.setState({counter: 5})
  }

  // render() { 

    const name = "Paul"

    // const styles = {
    //   border: 'solid',
    //   textAlign: 'center',
    //   boxShadow: '2px 2px'
    // }

    const object1 = {
      key1: "some data"
    }

    const [stateGlobalHook, setStateGlobalHook] = useState(0);

    const incrementGlobalStateHook = () => {
      setStateGlobalHook(stateGlobalHook + 1)
    }
    const decrementGlobalStateHook = () => {
      setStateGlobalHook(stateGlobalHook - 1)
    }

    return ( 

      <div className="App">
        {/*this.name*/}
        {name}
        <br /><br />

        <button>
          Button 1
        </button>

        {/*<div style={styles}>*/} 
        <div style={styles.styles}> 
          Style
        </div>

        {/* <button onClick={() => this.increment()}> Button </button> */}
        <button onClick={() => increment()}> Button </button>

        <div>
          {/* Div 1 {this.state.counter} */}
          Div 1 {state.counter}
        </div>
        <div>
          Div 2
        </div>
        <div>
          Div 3
        </div>

        <div>
          {/*can't display an entire object in JSX*/}
          {/*object1*/}
          {/*can only do one key:*/}
          {object1.key1}
        </div>

        <ClassComp/>

        <br/>
        <br/>
        <ListComp1/>

        <br/>
        <br/>
        <FormsComp/>

        <br />
        <br />
        <p>Redux stuff below:</p>

        <br/>
        <br/>
        <Container1/>


        <br/>
        <br/>
        <p>Router stuff below:</p>
        {/* Context.Provider is a new Hooks take on Redux: */}
        <Context.Provider
          value={{
            valueGlobalState: stateGlobalHook,
            addGlobalValue: () => incrementGlobalStateHook(),
            decreGlobalValue: () => decrementGlobalStateHook()
          }}
        >
          <Routes/>
        </Context.Provider>

      </div>

     );
  // }
}

// const Appinstance = new App()

// // console.log(Appinstance.name);
// console.log(Appinstance);

 
export default App;
