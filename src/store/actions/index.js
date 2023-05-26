import AsyncStorage from "@react-native-async-storage/async-storage";

export const createExpense = (state, expenseData) => {

  return async (dispatch) => {
    try {
      if (!state) {
        await AsyncStorage.setItem('expenses',JSON.stringify(expenseData))
        console.log("set successfully!", expenseData)
      } else {
        const updatedState = [...state, expenseData]
        await AsyncStorage.setItem('expenses',JSON.stringify(updatedState))
        console.log("set successfully!", expenseData)
      }
      dispatch({
        type:"ADD_EXPENSE",
        payload:expenseData
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type:"ADD_EXPENSE",
        payload:expenseData
      })
    }
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

export const fetchExpenses = () => {
  return async (dispatch) => {
    try {
      const expenses = await AsyncStorage.getItem('expenses');
      console.log("success! expenses fetched are:", expenses)
      if (expenses) {
        dispatch({
          type: 'FETCH_EXPENSES',
          payload: JSON.parse(expenses)
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FETCH_EXPENSES',
        payload: {}
      });
    }
  };
};
