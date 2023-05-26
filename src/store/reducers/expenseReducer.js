const INITIAL_STATE = [{title:"expense test", expense:6500, expenseType:"Amusement",id:109200}]

const expenseReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload]
  
    default:
      return state;
  }
}

export default expenseReducer