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


import React, { Component } from 'react';
import './App.css';
import * as styles from "./styles"

class App extends Component {
  // name = "Paul"

  state = {
    counter: 0
  }

  increment = () => {
    this.setState({counter: 5})
  }

  render() { 

    const name = "Paul"

    // const styles = {
    //   border: 'solid',
    //   textAlign: 'center',
    //   boxShadow: '2px 2px'
    // }

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

        <button onClick={() => this.increment()}> Button </button>

        <div>
          Div 1 {this.state.counter}
        </div>
        <div>
          Div 2
        </div>
        <div>
          Div 3
        </div>

      </div>

     );
  }
}

const Appinstance = new App()

// console.log(Appinstance.name);
console.log(Appinstance);

 
export default App;
