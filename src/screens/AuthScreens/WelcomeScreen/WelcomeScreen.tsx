import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//common
import commonStyles from "../../../common/CommonStyles";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={commonStyles.centerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>WELCOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
