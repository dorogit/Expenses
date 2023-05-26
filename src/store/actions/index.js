export const createExpense = (expenseData) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseData
    });
  };
};

export const createBuddy = (expenseData) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_BUDDY',
      payload: expenseData
    });
  };
};
