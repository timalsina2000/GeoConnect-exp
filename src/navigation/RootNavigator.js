import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { isAuthenticated } from '../services/auth';
import FilterScreen from '../Screen/Userprofile/HomeScreen/HomeSetup/FilterScreen';
import FriendScan from '../Screen/Userprofile/HomeScreen/HomeSetup/FriendScan';
import CreatePostScreen from '../Screen/Userprofile/HomeScreen/HomeSetup/Createpost';
import ViewProfile from '../Screen/Userprofile/HomeScreen/HomeSetup/ViewProfile';
import ProfileActions from '../Screen/Userprofile/HomeScreen/HomeSetup/ProfileActions';
import ChatDetail from '../Screen/Userprofile/chatScreen/ChatDetail';
import ShakeConnect from '../Screen/Userprofile/HomeScreen/HomeSetup/ShakeConnect';
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  const bootstrap = useCallback(async () => {
    try {
      const savedToken = await isAuthenticated();
      setToken(savedToken);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  const handleAuthSuccess = (accessToken) => {
    setToken(accessToken);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#B9F54A" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      key={token ? 'user' : 'guest'}
      screenOptions={{ headerShown: false }}
      initialRouteName={token ? 'HomeTabs' : 'Auth'}
    >
      <Stack.Screen name="Auth">
        {() => <AuthStack onAuthSuccess={handleAuthSuccess} />}
      </Stack.Screen>
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="FriendScan" component={FriendScan} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
      <Stack.Screen name="ProfileActions" component={ProfileActions} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
      <Stack.Screen name="ShakeConnect" component={ShakeConnect} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B0B0B',
  },
});
