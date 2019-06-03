import React, { useState } from 'react';

const HooksContainer1 = () => {

  // const stateValue = useState(0)[0]
  // const setValue = useState(0)[1]
  //  OR :
  const [stateValue, setValue] = useState(0)

  const incrementHookValue = () => {
    setValue(stateValue + 1)
  }
  const decrementHookValue = () => {
    setValue(stateValue - 1)
  }

  return ( 
    <div>
      React Hooks
      <br/>
      <button onClick={ () => incrementHookValue()}>Increment with Hooks</button>
      <button onClick={() => decrementHookValue()}>Decrement with Hooks</button>
      <p>Hooks Local state value: {stateValue}</p>
    </div>
   );
}
 
export default HooksContainer1;