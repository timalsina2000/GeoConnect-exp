import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize = 'none',
}) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#7E7E7E"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    color: '#CFCFCF',
    fontSize: 12,
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    backgroundColor: '#121212',
    paddingHorizontal: 14,
    color: '#FFFFFF',
    fontSize: 14,
  },
});
