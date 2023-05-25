const INITIAL_STATE = {}

const expenseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload]
  
    default:
      return state;
  }
}

export default expenseReducer