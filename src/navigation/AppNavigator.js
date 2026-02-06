import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import SplashScreen from '../Screen/auth/SplashScreen';
import WelcomeScreen from '../Screen/auth/WelcomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import VerifySuccessScreen from '../Screen/VerifySuccessScreen';
import BottomTabs from './BottomTabs';

enableScreens();

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="VerifySuccess" component={VerifySuccessScreen} />
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
