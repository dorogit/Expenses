import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer"
import buddyReducer from "./buddyReducer";

const rootReducer = combineReducers({
  expensesReducer: expenseReducer,
  buddiesReducer: buddyReducer
})

export default rootReducer

