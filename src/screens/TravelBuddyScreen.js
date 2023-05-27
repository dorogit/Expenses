import React, { useEffect } from "react";
import { View,Text,TouchableOpacity,FlatList,StyleSheet } from "react-native";
import { connect, useDispatch } from "react-redux";
import { Card } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import { fetchBuddies } from "../store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TravelBuddyScreen = ( {navigation, buddies } ) => {
  console.log("buddies logged by index:",buddies)
  const dispatch = useDispatch()
  useEffect(() => {(
    dispatch(fetchBuddies()))
  }, [navigation])

  return (
    <View style= {styles.view} >
      <FlatList
        data={buddies}
        renderItem={({ item }) => (
          <Card containerStyle={{borderRadius:25}} >
            <Card.Title style={{fontSize:20}} >{item.name}</Card.Title>
            <CardDivider />
            <Text style ={styles.text}>{item.startingAmount} is the starting amount for this buddy</Text>
          </Card>
        )}
        key={Math.floor(Math.random() * 10000)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("CreateBuddy")} style={styles.buttonStyle}>
        <Feather size={32} name="plus" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex:1
  },
  buttonStyle: {
    width: 60,
    height: 60,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#EDEADE",
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  text: {
    fontSize:24,
    alignSelf:"center"
  }
})

const mapStateToProps = (state) => {
  return {
    buddies: state.buddiesReducer
  }
}

export default connect(mapStateToProps)(TravelBuddyScreen)