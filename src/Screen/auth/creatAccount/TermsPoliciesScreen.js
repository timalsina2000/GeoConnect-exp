import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import { MaterialIcons } from '@expo/vector-icons';

export default function TermsPoliciesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name="arrow-back"
                size={26}
                color="#FAF9F9"
                style={styles.cardArrowIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 100 }}>
            <View style={styles.iconWrap}>
              <MaterialIcons
                name="newspaper"
                size={26}
                color="#000000"
                style={styles.cardArrowIcon}
              />
            </View>
            <Text style={styles.title}>Agree to Geoconnect's{'\n'}terms and policies</Text>
            <Text style={styles.body}>
              People who user our service may have uploaded your contact information to Instagram. Learn more
              {'\n'}{'\n'}

              By tapping you agree to create an account and confirm that you have read
              the Geoconnect Terms and Privacy Policy.
              {'\n'}{'\n'}
              The Privacy Policy describes the ways we can use the information we collect when your create an account. For example, wer use this information to provide, personalize and improve our products, including ads.
            </Text>
            <PrimaryButton
              title="I Agree"
              onPress={() => navigation.navigate('Notifications')}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FAF9F9',
  },
  container1: {
    top: 83,
    flex: 1,
    backgroundColor: '#E4E4E4',
    borderRadius: 32,
  },
  container: {
    flex: 1,
    top: 13,
    paddingHorizontal: 20,

    backgroundColor: '#0E0D0D',
    borderRadius: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
    paddingTop: 30,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    marginBottom: 90
  },
  backText: {

    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#B9F54A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    color: '#0B0B0B',
    fontSize: 22,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  body: {
    color: '#9E9E9E',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 24,
  },
  button: {
    height: 48,
    borderRadius: 12,
  },
});
