import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan</Text>
      <Text style={styles.sub}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  sub: { color: '#8E8E8E', marginTop: 6 },
});
