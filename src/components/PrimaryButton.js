import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function PrimaryButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        isPrimary && styles.primary,
        isSecondary && styles.secondary,
        variant === 'ghost' && styles.ghost,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          isPrimary && styles.textPrimary,
          isSecondary && styles.textSecondary,
          variant === 'ghost' && styles.textGhost,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#B9F54A',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
  },
  ghost: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  textPrimary: {
    color: '#0B0B0B',
  },
  textSecondary: {
    color: '#0B0B0B',
  },
  textGhost: {
    color: '#E6E6E6',
  },
});
