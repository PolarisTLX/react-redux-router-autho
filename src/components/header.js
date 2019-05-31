import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() { 
    return ( 
      <div>
        <Link to='/routercomponent1'>
          RouterComponent1
        </Link>
        <Link to='/routercomponent2'>
          RouterComponent2
        </Link>
      </div>
     );
  }
}
 
export default Header;