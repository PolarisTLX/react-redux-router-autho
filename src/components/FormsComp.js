import React, { Component } from 'react';

class FormsComp extends Component {

  state = {
    value: ''
  }

  // arrow functions for the below avoids the need to do the whole:
  // constructor(props) {
  //   super(props)

  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  // 
  // because of how "this" is handled


  handleChange = (event) => {
    console.log(event.target.value);    
    this.setState({ value: event.target.value });    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value);
  }

  
  render() { 
    return ( 
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input 
            id="name"
            type="text" 
            onChange={this.handleChange} 
          />
          <button type="submit"> Submit </button>
        </form>

        <br/>

        {this.state.value}

      </div>
     );
  }
}
 
export default FormsComp;