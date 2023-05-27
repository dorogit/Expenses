import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { connect, useDispatch } from "react-redux";
import { fetchExpenses, fetchBuddies } from "../store/actions";
import { Card } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";

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
    const { name, startingAmount } = item;
    const payment = startingAmount > splitAmount ? startingAmount - splitAmount : splitAmount - startingAmount;
    const paymentText = startingAmount > splitAmount ? `Receives: $${payment}` : `Pays: $${payment}`;

    return (
      <Card containerStyle={{borderRadius:25}} >
        <Card.Title style={{fontSize:20}} >{name}</Card.Title>
        <CardDivider />
        <Text style ={{fontSize:20, alignSelf:"center"}}>{paymentText}</Text>
      </Card>
    );
  };

  return (
    <View style = {{flex:1}} >
      <Text style ={{alignSelf:"center", fontSize:30, marginVertical:100}} >Total Expense: ${totalExpense}</Text>
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
