import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Image } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { connect, useDispatch } from "react-redux";
import { createBuddy } from "../store/actions";

const BuddyScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:""
    });
  });

  const dispatch = useDispatch()
  const [BuddyName, setBuddyName] = useState("name");
  const [Amount, setAmount] = useState("0");
  const [BuddyHasError, setBuddyHasError] = useState(false);

  const buddyNameInputRef = useRef(null);
  const amountInputRef = useRef(null);

  const handleCreateBuddy = () => {
    let hasError = false;

    if (BuddyName.trim() === "") {
      setBuddyHasError(true);
      buddyNameInputRef.current.shake();
      hasError = true;
    }
    if (Amount.trim() === "") {
      setBuddyHasError(true);
      amountInputRef.current.shake();
      hasError = true;
    }

    if (!hasError) {
      const amountValue = parseFloat(Amount)
      dispatch(createBuddy({name:BuddyName, startingAmount: amountValue}))
      navigation.navigate("MainStack")
    }
  };

  return (
    <View style={styles.viewStyle}>
      <Spacer>
        <Text style={styles.headerStyle} h3>
          Add your Buddy!
        </Text>
      </Spacer>
      <Spacer>
        <Input
          ref={buddyNameInputRef}
          autoCapitalize="none"
          autoCorrect={false}
          value={BuddyName}
          onChangeText={(text) => setBuddyName(text)}
          label="Their name?"
          style={BuddyName.trim() === "" ? styles.inputError : null}
        />
      </Spacer>
      <Spacer>
        <Input
          ref={amountInputRef}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={Amount}
          onChangeText={(text) => setAmount(text)}
          label="Starting amount"
          style={BuddyName.trim() === "" ? styles.inputError : styles.inputTitleStyle}
        />
      </Spacer>
      {BuddyHasError && (
        <Text style={styles.errorText}>Please fill all details!</Text>
      )}
      <Spacer>
        <Button title="Create Amount" onPress={handleCreateBuddy} />
      </Spacer>
      <Image
        style={styles.iconStyle}
        source={{
          uri:
            "https://cdn.discordapp.com/attachments/727215298792652981/1111306323628408882/tourism.png",
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
  errorText: {
    color: "red",
    marginLeft: 10,
    marginTop: 5,
  },
});


export default connect(null, { createBuddy })(BuddyScreen);
