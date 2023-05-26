import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer"

const rootReducer = combineReducers({
  expensesReducer: expenseReducer
})

export default rootReducer

