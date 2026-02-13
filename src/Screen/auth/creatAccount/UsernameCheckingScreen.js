import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UsernameCheckingScreen({ navigation, route }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('TermsPolicies', {
        accountType: route.params?.accountType,
      });
    }, 900);
    return () => clearTimeout(timer);
  }, [navigation, route.params?.accountType]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#B9F54A" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
