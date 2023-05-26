const INITIAL_STATE = []

const buddyReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "ADD_BUDDY":
      console.log(action.payload)
      return [...state, action.payload]
      
    default:
      return state;
  }
}

export default buddyReducer