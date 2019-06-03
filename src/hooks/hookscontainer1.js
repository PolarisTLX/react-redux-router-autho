import React, { useState, useEffect } from 'react';

const HooksContainer1 = () => {

  // const stateValue = useState(0)[0]
  // const setValue = useState(0)[1]
  //  OR :
  const [stateValue, setValue] = useState(0)

  const [useEffectValue, setUseEffectValue] = useState(null)

  useEffect(() => {
    // simulate API request to get data from a server:
    setTimeout(() => setUseEffectValue("this shows up after 3s if useEffect Worked"), 3000);
  }, [stateValue])

  const incrementHookValue = () => {
    setValue(stateValue + 1)
  }
  const decrementHookValue = () => {
    setValue(stateValue - 1)
  }

  const changeuseEffectValue = () => {
    setUseEffectValue('We changed the useEffectValue!')
  }

  return ( 
    <div>
      React Hooks
      <br/>
      <button onClick={ () => incrementHookValue()}>Increment with Hooks</button>
      <button onClick={() => decrementHookValue()}>Decrement with Hooks</button>
      <p>Hooks Local state value: {stateValue}</p>
      <br/>
      <button onClick={() => changeuseEffectValue()}>change useEffect Value</button>
      {useEffectValue
        ? <p>{useEffectValue}</p>
        : <p>No Value</p>
      }
    </div>
   );
}
 
export default HooksContainer1;