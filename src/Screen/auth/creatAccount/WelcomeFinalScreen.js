import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';

export default function WelcomeFinalScreen({ navigation, route }) {
  const handleFinish = () => {
    navigation.navigate('OnboardingDistance', {
      accountType: route.params?.accountType,
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
      <View style={styles.container}>
        <Text style={styles.brand}>Geoconnect.</Text>
        <Text style={styles.title}>
          Welcome to{'\n'}Geoconnect
        </Text>
        <Text style={styles.body}>
          Geoconnect allows users to find, interact, and meet nearby individuals,
          whether for casual meetups or business purposes.
        </Text>
        <PrimaryButton
          title="Finish Your Profile"
          onPress={handleFinish}
          style={styles.button}
        />
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
    container1: {
    top: 73,
    flex: 1,
    backgroundColor: '#E4E4E4',
    borderRadius: 32,
  },
  container: {
    flex: 1,
    top: 13,
     borderRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 48,
    backgroundColor: '#0A0A0A',
    marginBottom:24,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  title: {
    color: '#B9F54A',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
  },
  body: {
    color: '#9E9E9E',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 24,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 60,
    height: 48,
    borderRadius: 12,
  },
});
