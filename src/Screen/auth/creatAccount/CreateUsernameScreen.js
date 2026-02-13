import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import { MaterialIcons } from '@expo/vector-icons';

const SUGGESTIONS = ['jennifer02', 'jenni_98', 'jennifer'];

export default function CreateUsernameScreen({ navigation, route }) {
  const [username, setUsername] = useState('');

  const status = useMemo(() => {
    if (!username.trim()) return { type: 'idle', message: 'Create a unique username.' };
    if (username.trim().length < 3) return { type: 'error', message: 'Username too short.' };
    if (['jennifer', 'john'].includes(username.trim().toLowerCase())) {
      return { type: 'error', message: 'That username is taken. Try another.' };
    }
    return { type: 'ok', message: 'Available: ' + SUGGESTIONS.join(', ') };
  }, [username]);

  const canContinue = status.type === 'ok';

  return (
    <SafeAreaView style={styles.safe}>
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
              color="#0B0B0B"
              style={styles.cardArrowIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Create username</Text>
        <Text style={styles.subtitle}>
          Find and create a unique username.
        </Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Your username"
          placeholderTextColor="#9B9B9B"
          autoCapitalize="none"
          style={[
            styles.input,
            status.type === 'error' && styles.inputError,
          ]}
        />
        <Text
          style={[
            styles.helper,
            status.type === 'error' && styles.helperError,
            status.type === 'ok' && styles.helperOk,
          ]}
        >
          {status.message}
        </Text>

        <Text style={styles.note}>
          You cannot change this username before 12 months.
        </Text>

        <PrimaryButton
          title="Next"
          onPress={() =>
            navigation.navigate('UsernameChecking', {
              accountType: route.params?.accountType,
            })
          }
          disabled={!canContinue}
          style={styles.nextButton}
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
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  backText: {
    color: '#141414',
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    color: '#141414',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#7A7A7A',
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
  },
  inputError: {
    borderColor: '#E04B4B',
  },
  helper: {
    color: '#7A7A7A',
    fontSize: 11,
    marginTop: 8,
  },
  helperError: {
    color: '#E04B4B',
  },
  helperOk: {
    color: '#2F9B3B',
  },
  note: {
    color: '#7A7A7A',
    fontSize: 11,
    marginTop: 10,
  },
  nextButton: {
    marginTop: 'auto',
    height: 48,
    borderRadius: 12,
    marginBottom: 10,
  },
});
