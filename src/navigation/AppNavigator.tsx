import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/Splash";
import HomeScreen from "../screens/HomeScreen";
import SelectLanguage from "../screens/SelectLanguage";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  SelectLanguage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
