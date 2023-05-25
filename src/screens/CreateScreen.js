import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Image } from "@rneui/themed";
import Spacer from "../components/Spacer";
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";
import { createExpense } from "../store/actions";


const CreateScreen = ({ navigation, expenses }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:""
    });
  });

  const [open, setOpen] = useState(false);
  const [ExpenseTitle, setExpenseTitle] = useState("title");
  const [Expense, setExpense] = useState("0");
  const [ExpenseType, setExpenseType] = useState("");
  const [Items, setItems] = useState([
    { label: "Travel", value: "Travel" },
    { label: "Food", value: "Food" },
    { label: "Amusement", value: "Amusement" },
    { label: "Other", value: "Other" },
  ]);
  const [ExpenseTypeHasError, setExpenseTypeHasError] = useState(false);

  const expenseTitleInputRef = useRef(null);
  const expenseInputRef = useRef(null);

  const handleCreateExpense = () => {
    let hasError = false;

    if (ExpenseTitle.trim() === "") {
      expenseTitleInputRef.current.shake();
      hasError = true;
    }
    if (Expense.trim() === "") {
      expenseInputRef.current.shake();
      hasError = true;
    }
    if (ExpenseType === "") {
      setExpenseTypeHasError(true);
      hasError = true;
    } else {
      setExpenseTypeHasError(false);
    }

    if (!hasError) {
      console.log("Create Expense:", ExpenseTitle, Expense, ExpenseType);
    }
  };

  return (
    <View style={styles.viewStyle}>
      <Spacer>
        <Text style={styles.headerStyle} h3>
          Create an Expense!
        </Text>
      </Spacer>
      <Spacer>
        <Input
          ref={expenseTitleInputRef}
          autoCapitalize="none"
          autoCorrect={false}
          value={ExpenseTitle}
          onChangeText={(text) => setExpenseTitle(text)}
          label="Title for your expense!"
          style={ExpenseTitle.trim() === "" ? styles.inputError : null}
        />
      </Spacer>
      <Spacer>
        <Input
          ref={expenseInputRef}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={Expense}
          onChangeText={(text) => setExpense(text)}
          label="Set your Expense!"
          style={Expense.trim() === "" ? styles.inputError : styles.inputTitleStyle}
        />
      </Spacer>
      <Spacer>
        <DropDownPicker
          dropDownDirection="TOP"
          placeholder="Pick an Expense Type!"
          open={open}
          setOpen={setOpen}
          value={ExpenseType}
          setValue={(value) => {
            setExpenseType(value);
            setExpenseTypeHasError(false);
          }}
          items={Items}
          setItems={setItems}
          zIndex={9999} // Set a high zIndex for the dropdown
          searchable={false}
          onClose={() => {
            if (ExpenseType === "") {
              setExpenseTypeHasError(true);
            }
          }}
          style={ExpenseTypeHasError ? styles.dropdownError : styles.inputExpenseStyle}
        />
      </Spacer>
      {ExpenseTypeHasError && (
        <Text style={styles.errorText}>Please fill all details!</Text>
      )}
      <Spacer>
        <Button title="Create Expense" onPress={handleCreateExpense} />
      </Spacer>
      <Image
        style={styles.iconStyle}
        source={{
          uri:
            "https://cdn.discordapp.com/attachments/758365800615903253/1111315407178047640/sexxeeee1e.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
  },
  headerStyle: {
    alignSelf: "center",
  },
  iconStyle: {
    width: 220,
    height: 220,
    marginHorizontal: "25%",
    marginTop: "10%",
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  dropdownError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginLeft: 10,
    marginTop: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    expenses: state.expenseReducer
  };
};

export default connect(mapStateToProps, { createExpense })(CreateScreen);
