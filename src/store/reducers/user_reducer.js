import * as ACTION_TYPES from "../actions/action_types";

const initialState = {
  user_text: ""
}

const UserREducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_INPUT:
      return {
        ...state,
        user_text: action.payload
      }
    default:
      return state
  }
}

export default UserREducer;