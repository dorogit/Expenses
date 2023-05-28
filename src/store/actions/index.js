import AsyncStorage from "@react-native-async-storage/async-storage";

export const createExpense = (state, expenseData) => {
  return async (dispatch) => {
    try {
      let updatedState = [...state, expenseData]
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedState));
      console.log("set successfully!", updatedState);

      dispatch({
        type: "ADD_EXPENSE",
        payload: expenseData
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ADD_EXPENSE",
        payload: expenseData
      });
    }
  };
};

export const createBuddy = (state, buddyData) => {
  return async (dispatch) => {
    try {
      let updatedState;
      updatedState = [...state, buddyData]
      await AsyncStorage.setItem('buddies', JSON.stringify(updatedState));
      console.log("set successfully!", updatedState);

      dispatch({
        type: "ADD_BUDDY",
        payload: buddyData
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ADD_BUDDY",
        payload: buddyData
      });
    }
  };
};

export const fetchExpenses = () => {
  return async (dispatch) => {
    try {
      const expenses = await AsyncStorage.getItem('expenses');
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

export const fetchBuddies = () => {
  return async (dispatch) => {
    try {
      const buddies = await AsyncStorage.getItem('buddies');
      console.log("success! buddies fetched are:", buddies)
      if (buddies) {
        dispatch({
          type: 'FETCH_BUDDIES',
          payload: JSON.parse(buddies)
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FETCH_BUDDIES',
        payload: {}
      });
    }
  };
};
