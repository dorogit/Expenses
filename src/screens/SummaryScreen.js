import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { connect, useDispatch } from "react-redux";
import { fetchExpenses, fetchBuddies } from "../store/actions";

const SummaryScreen = ({ expenses, buddies }) => {
  console.log("buddies logged by summary are:", buddies)
  const dispatch = useDispatch();
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    dispatch(fetchExpenses());
    dispatch(fetchBuddies());
  }, []);

  useEffect(() => {
    // Calculate the total expense
    let sum = 0;
    expenses.forEach((expense) => {
      sum += expense.expense;
    });
    setTotalExpense(sum);
  }, [expenses]);

  const splitAmount = totalExpense / buddies.length;

  const renderItem = ({ item }) => {
    const { name, amount } = item;
    const payment = amount > splitAmount ? amount - splitAmount : splitAmount - amount;
    const paymentText = amount > splitAmount ? `Receives: $${payment}` : `Pays: $${payment}`;

    return (
      <View>
        <Text>{name}</Text>
        <Text>{paymentText}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Total Expense: ${totalExpense}</Text>
      <FlatList data={buddies} renderItem={renderItem} key={Math.floor(Math.random() * 10000)} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expensesReducer,
    buddies: state.buddiesReducer,
  };
};

export default connect(mapStateToProps)(SummaryScreen);
