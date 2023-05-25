export const createExpense = (expenseData) => {
  return (dispatch) => {
    dispatch({
      type: 'CREATE_EXPENSE',
      payload: expenseData
    });
  };
};
