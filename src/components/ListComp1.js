import React, { Component } from 'react';

class ListComp1 extends Component {

  Array1 = [
    {id: 1, text: "text 1", number: 1},
    {id: 2, text: "text 2", number: 2},
    {id: 3, text: "text 3", number: 3},
    {id: 4, text: "text 4", number: 4},
    {id: 5, text: "text 5", number: 5},
    {id: 6, text: "text 6", number: 6}
  ]

  renderListItems = () => (
    <div>
      {this.Array1.map((item, index) => (<div key={index}>item</div>))}
    </div>
  )


  render() { 
    return ( 
      <div>
        {this.renderListItems()}
      </div>
     );
  }
}
 
export default ListComp1;