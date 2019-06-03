import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooksreducer';
import * as ACTIONS from '../store/actions/actions';

import Context from '../utils/context';

const HooksContainer1 = () => {

  const context = useContext(Context);

  // const stateValue = useState(0)[0]
  // const setValue = useState(0)[1]
  //  OR :
  const [stateValue, setValue] = useState(0)

  const [useEffectValue, setUseEffectValue] = useState(null)

  const [hooksState, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

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

  const handleHooksDispatchTrue = () => {
    // dispatch(ACTIONS.SUCCESS)
    // OR:
    // dispatch(type: "SUCCESS")
    // OR:
    dispatch(ACTIONS.success())
  }

  const handleHooksDispatchFalse = () => {
    dispatch(ACTIONS.failure())
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
      <br/>
      <button onClick={() => handleHooksDispatchTrue()}>handleHooksDispatchTrue</button>
      <button onClick={() => handleHooksDispatchFalse()}>handleHooksDispatchFalse</button>
      {hooksState.stateprop1
        ? <p>Stateprop1 is true</p>
        : <p>Stateprop1 is false</p>
      }
      <br/>
      <button onClick={() => context.addGlobalValue()}>context.addGlobalValue</button>
      <button onClick={() => context.decreGlobalValue()}>context.decreGlobalValue</button>
      <p>Hooks Global State (Won't Change even when leave this component): {context.valueGlobalState}</p>
    </div>
   );
}
 
export default HooksContainer1;