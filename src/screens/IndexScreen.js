import React from "react";
import { View,Text,Button } from "react-native";

const IndexScreen = ( {navigation} ) => {
  return (
    <View style={{marginTop:100}} >
      <Text>
        <Button title="navigate to goofy create screen" onPress={()  => navigation.navigate("Create")}/>
      </Text>
    </View>
  )
}

export default IndexScreen;