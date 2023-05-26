export const createExpense = (expenseData) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseData
    });
  };
};
