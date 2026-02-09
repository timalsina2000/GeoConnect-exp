import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenSocial from '../Screen/Userprofile/HomeScreen/HomeScreenSocial';
import HomeScreenBusiness from '../Screen/Userprofile/HomeScreen/HomeScreenBusiness';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreenSocial" component={HomeScreenSocial} />
      <Stack.Screen name="HomeScreenBusiness" component={HomeScreenBusiness} />
    </Stack.Navigator>
  );
}
