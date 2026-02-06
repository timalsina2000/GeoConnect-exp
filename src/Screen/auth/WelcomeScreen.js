import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../../components/PrimaryButton';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
        <LinearGradient
          colors={['rgba(11, 11, 11, 0.1)', '#000000']}
          locations={[0, 0.9194]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
          <ImageBackground
            source={require('../../../assets/image/welcome_bg.jpg')}
            style={styles.hero}
            imageStyle={styles.heroImage}
            accessible={false}
          >
            <View style={styles.heroOverlay}>
              <View style={{ marginBottom: 80, flex: 1 }}>
                <Text style={styles.brand}>Geoconnect</Text>
                <Text style={styles.headline}>Connect with{`\n`}<Text style={{ color: '#B9F54A', fontFamily: 'DMSans-Bold' }}>confidence</Text></Text>
                <Text style={styles.subhead}>
                  Geoconnect allows users to find, interact, and meet nearby individuals, whether for casual meetups or business purposes.
                </Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.ctaBlock}>
            <PrimaryButton
              title="Create Account"
              onPress={() => navigation.navigate('AccountType')}
            />
            <PrimaryButton
              title="Sign In"
              variant="secondary"
              onPress={() => navigation.navigate('Login')}
              style={styles.secondaryButton}
            />
            <Text style={styles.legal}>
              By tapping "Sign in", you agree to our Terms,{'\n'} Privacy Policy and
              Cookie Policy.
            </Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFDFD',
  },

  container1: {
    flex: 1,
    top: 83,
    // gradient is applied via LinearGradient; keep a dark fallback for platforms without the native module
    backgroundColor: '#E4E4E4',
    width: screenWidth,
    paddingBottom: 24,
    borderRadius: 32,

  },

  container: {
    flex: 1,
    top: 13,
    width: screenWidth,
    paddingBottom: 24,
    marginBottom: 0
  },
  hero: {
    flex: 1,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',

  },
  heroOverlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.32)',

  },
  heroImage: {
    resizeMode: 'cover',

  },
  brand: {
    color: '#FFFFFF',
    fontSize: 34,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
    fontFamily: 'Alkatra-Bold',
  },

  headline: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: 'DMSans',
  },
  subhead: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 260,
    fontFamily: 'DMSans-Bold',
  },
  ctaBlock: {
    marginBottom: 54,
  },
  secondaryButton: {
    marginTop: 12,
  },
  legal: {
    color: '#8E8E8E',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 16,
  },
});
