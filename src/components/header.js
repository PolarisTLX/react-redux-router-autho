import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() { 
    return ( 
      <div>
        <Link to='/routercomponent1' style={{padding: '5px'}}>
          RouterComponent1
        </Link>
        <Link to='/routercomponent2' style={{padding: '5px'}}>
          RouterComponent2
        </Link>
      </div>
     );
  }
}
 
export default Header;