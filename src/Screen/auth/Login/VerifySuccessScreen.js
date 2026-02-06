import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';

export default function VerifySuccessScreen({ navigation }) {
  const goNext = () => {
    navigation.navigate('NamePassword');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>✓</Text>
        </View>
        <Text style={styles.title}>Successfully verified!</Text>
        <Text style={styles.subtitle}>
          Geoconnect allows users to find, interact with, and meet nearby individuals, whether for casual meetups or business purposes.
        </Text>
        <PrimaryButton title="Next" onPress={goNext} style={styles.button} />
      </View>
      </View>
    </SafeAreaView>
  );
}
 const { width: screenWidth } = Dimensions.get('window');
 
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F7F4F4',
  },
   container1: {
   
    flex: 1,
    top: 73,
     borderRadius:32,
    // gradient is applied via LinearGradient; keep a dark fallback for platforms without the native module
    backgroundColor: '#E4E4E4',
    width: screenWidth,
    paddingBottom: 24,
   
   
  },
  container: {
    flex: 1,
    top:13,
    alignItems: 'center',
    justifyContent: 'center',
     borderRadius:32,
    paddingHorizontal: 20,
    backgroundColor: '#0F0F0F',
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#B9F54A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    color: '#0B0B0B',
    fontSize: 36,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    color: '#9E9E9E',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 28,
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 12,
  },
});
