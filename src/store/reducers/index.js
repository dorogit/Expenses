import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer"

const rootReducer = combineReducers({
  expenseReducer: expenseReducer
})

export default rootReducer

