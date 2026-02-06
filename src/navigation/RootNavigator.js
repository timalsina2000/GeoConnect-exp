import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { isAuthenticated } from '../services/auth';

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
