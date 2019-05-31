import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

  state = {
    numbers:
      [
        {id: 1},
        {id: 2}
      ]
  }

  render() { 
    return ( 
      <div>
        <Link to='/routercomponent1' style={{padding: '5px'}}>
          RouterComponent1
        </Link>
        <Link to='/routercomponent2' style={{padding: '5px'}}>
          RouterComponent2
        </Link>

        <br/>
        <br/>

        <p>Dynamically rendered links:</p>
        {this.state.numbers.map( number => 
          <Link key={number.id} to={{pathname:'/routercomponent/' + number.id}} style = {{ padding: '5px' }}>
            RouterComponent{number.id}
          </Link>
        )}
      </div>
     );
  }
}
 
export default Header;