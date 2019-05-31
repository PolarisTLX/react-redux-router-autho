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
import ClassComp from "./components/ClassComp"
import ListComp1 from "./components/ListComp1"
import FormsComp from "./components/FormsComp"
import Container1 from "./components/Container1"
import Routes from './routes'

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

    const object1 = {
      key1: "some data"
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
        <Routes/>

      </div>

     );
  }
}

const Appinstance = new App()

// console.log(Appinstance.name);
console.log(Appinstance);

 
export default App;
