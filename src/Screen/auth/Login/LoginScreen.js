import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import InputField from '../../../components/InputField';
import PrimaryButton from '../../../components/PrimaryButton';
import { login } from '../../../services/auth';

export default function LoginScreen({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // const { access } = await login(email, password);
    // route.params?.onAuthSuccess?.(access);
    navigation.navigate('HomeTabs');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Enter your ID & password to access your account.
          </Text>

          <View style={styles.form}>
            <InputField
              label="ID"
              placeholder="Username, email or mobile number"
              value={email}
              onChangeText={setEmail}
            />
            <InputField
              label="Password"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.forgot}>
              <Text style={styles.forgotText}>Forgot password</Text>
            </TouchableOpacity>

            <PrimaryButton
              title="Sign In"
              onPress={handleLogin}
              style={styles.signInButton}
            />
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footer}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('AccountType')}>
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  container1: {
    flex: 1,
    top: 73,
    // gradient is applied via LinearGradient; keep a dark fallback for platforms without the native module
    backgroundColor: '#E4E4E4',
    width: screenWidth,
    paddingBottom: 24,
    borderRadius: 32,

  },
  container: {
    flex: 1,
    top: 13,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#0A0A0A',
    borderRadius: 32,
    marginBottom: 0
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#9E9E9E',
    fontSize: 13,
    marginBottom: 26,
  },
  form: {
    marginTop: 8,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#B9F54A',
    fontSize: 12,
  },
  signInButton: {
    marginTop: 6,
  },
  footer: {
    color: '#9E9E9E',
    fontSize: 12,
  },
  footerRow: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '#B9F54A',
    fontWeight: '600',
    fontSize: 12,
  },
});
