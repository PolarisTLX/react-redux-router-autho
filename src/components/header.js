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

        <br />
        <br />

        <p>Auth0 and Redux stuff:</p>
        <Link to='/privateroute' style={{padding: '5px'}}>
          Private Route
        </Link>

        <br />
        <br />
        <Link to='/profile' style={{ padding: '5px' }}>
          Profile
        </Link>

        <br />
        <br />
        <Link to='/hookscontainer' style={{ padding: '5px' }}>
          Hooks Container
        </Link>
        <br />
        <br />
        <Link to='/hooksform' style={{ padding: '5px' }}>
          Hooks Form
        </Link>

      </div>
     );
  }
}
 
export default Header;