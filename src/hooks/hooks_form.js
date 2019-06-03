import React, { useState, useReducer, useContext } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserInputHooksReducer from '../store/hooks_state/user_input_hooks_reducer'
import Context from '../utils/context'

const HooksForm = () => {

  const context = useContext(Context)

  const [valueChange, setValueChange] = useState('')
  const [valueSubmit, setValueSubmit] = useState('')

  const [userState, userDispatch] = useReducer(UserInputHooksReducer.UserInputHooksReducer, UserInputHooksReducer.initialState)

  const handleStateChange = (event) => {
    setValueChange(event.target.value)
  }
  const handleStateSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.useState.value)
  }

  const handleuseReducerChange = (event) => {
    userDispatch(ACTIONS.user_input_change(event.target.value))
  }
  const handleuseReducerSubmit = (event) => {
    event.preventDefault();
    userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
  }

  return ( 
    <div>
      <form onSubmit={handleStateSubmit}>
        <label>React useState: </label>
        <input id='useState' type='text' onChange={handleStateChange} />
        <button type="submit"> Submit </button>
      </form>
      <div>
        <h2>React useState: </h2>
        <p>Change: {valueChange}</p>
        <p>Submit: {valueSubmit}</p>
      </div>
      <br/>
      <form onSubmit={handleuseReducerSubmit}>
        <label>React useReducer: </label>
        <input id='useReducer' type='text' onChange={handleuseReducerChange} />
        <button type="submit"> Submit </button>
      </form>
      <div>
        <h2>React useReducer: </h2>
        <p>Change: {userState.user_text_change}</p>
        <p>Submit: {userState.user_text_submit}</p>
      </div>
      <br/>
      <form onSubmit={context.handleuseContextSubmit}>
        <label>React useContext: </label>
        <input id='useContext' type='text' onChange={context.handleuseContextChange} />
        <button type="submit"> Submit </button>
      </form>
      <div>
        <h2>React useContext (not fully working...): </h2>
        <p>Change: {context.useContextChange}</p>
        <p>Submit: {context.useContextSubmit}</p>
      </div>
    </div>
   );
}
 
export default HooksForm;