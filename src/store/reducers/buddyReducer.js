const INITIAL_STATE = []

const buddyReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "ADD_BUDDY":
      return [...state, action.payload]
    case "FETCH_BUDDIES":
      return action.payload
    default:
      return state;
  }
}

export default buddyReducer