import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
export default function NamePasswordScreen({ navigation, route }) {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const checks = useMemo(() => {
    return [
      { label: '8 characters or more', ok: password.length >= 8 },
      { label: '1 uppercase letter', ok: /[A-Z]/.test(password) },
      { label: '1 lowercase letter', ok: /[a-z]/.test(password) },
      { label: '1 number', ok: /\d/.test(password) },
    ];
  }, [password]);

  const canSubmit = fullName.trim().length > 1 && checks.every((item) => item.ok);

  const handleNext = () => {
    navigation.navigate('GenderAge', {
      accountType: route.params?.accountType,
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Name & Password</Text>
        <Text style={styles.subtitle}>Input your name & password</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            placeholder="Your full name"
            placeholderTextColor="#9B9B9B"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
            style={styles.input}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9B9B9B"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.checklist}>
          <Text style={styles.checkTitle}>Must match:</Text>
          {checks.map((item) => (
            <View key={item.label} style={styles.checkRow}>
              <View style={[styles.checkDot, item.ok && styles.checkDotActive]}>
                {item.ok ? <Text style={styles.checkMark}>✓</Text> : null}
              </View>
              <Text style={[styles.checkText, item.ok && styles.checkTextActive]}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.rememberRow}
          onPress={() => setRemember((prev) => !prev)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, remember && styles.checkboxChecked]}>
            {remember ? <Text style={styles.checkboxText}>✓</Text> : null}
          </View>
          <Text style={styles.rememberText}>Remember Password</Text>
        </TouchableOpacity>

        <PrimaryButton
          title="Next"
          onPress={handleNext}
          disabled={!canSubmit}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    color: '#141414',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#6C6C6C',
    fontSize: 12,
    marginBottom: 16,
  },
  label: {
    color: '#5C5C5C',
    fontSize: 12,
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    color: '#141414',
    fontSize: 14,
    marginBottom: 16,
  },
  form: {
    marginBottom: 12,
  },
  checklist: {
    marginBottom: 16,
  },
  checkTitle: {
    color: '#6C6C6C',
    fontSize: 12,
    marginBottom: 8,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkDotActive: {
    backgroundColor: '#2F9B3B',
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
    marginTop: -1,
  },
  checkText: {
    color: '#6C6C6C',
    fontSize: 12,
  },
  checkTextActive: {
    color: '#2F9B3B',
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#B9F54A',
    borderColor: '#B9F54A',
  },
  checkboxText: {
    color: '#0B0B0B',
    fontSize: 12,
    fontWeight: '700',
  },
  rememberText: {
    color: '#6C6C6C',
    fontSize: 12,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 10,
    height: 48,
    borderRadius: 12,
  },
});
