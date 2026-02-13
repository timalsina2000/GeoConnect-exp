import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'back'];

export default function OtpVerifyScreen({ navigation, route }) {
  const [code, setCode] = useState('');

  const codeArray = useMemo(() => {
    const padded = code.padEnd(4, ' ');
    return padded.split('');
  }, [code]);

  const handlePress = (value) => {
    if (!value) return;
    if (value === 'back') {
      setCode((prev) => prev.slice(0, -1));
      return;
    }
    if (code.length >= 4) return;
    setCode((prev) => prev + value);
  };

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
                color="#0B0B0B"
                style={styles.cardArrowIcon}
            />

            
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>We just sent you an email</Text>
        <Text style={styles.subtitle}>Enter your 4-digit code to access your account.</Text>

        <View style={styles.codeRow}>
          {codeArray.map((digit, index) => {
            const isFilled = digit.trim().length > 0;
            return (
              <View key={`${digit}-${index}`} style={[styles.codeDot, isFilled && styles.codeDotActive]}>
                <View style={[styles.codeInner, isFilled && styles.codeInnerActive]} />
              </View>
            );
          })}
        </View>

        <PrimaryButton
          title="Submit"
          onPress={() =>
            navigation.navigate('VerifySuccess', {
              accountType: route.params?.accountType,
            })
          }
          style={styles.submit}
          disabled={code.length < 4}
        />

        <View style={styles.keypad}>
          {DIGITS.map((digit, index) => {
            if (!digit) {
              return <View key={`empty-${index}`} style={styles.keyEmpty} />;
            }
            const label = digit === 'back' ? 'DEL' : digit;
            return (
              <TouchableOpacity
                key={`${digit}-${index}`}
                style={styles.key}
                onPress={() => handlePress(digit)}
              >
                <Text style={styles.keyText}>{label}</Text>
              </TouchableOpacity>
            );
          })}
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
    backgroundColor: '#FDFCFC',
  },
  container1: {
    flex: 1,
    top: 73,
    // gradient is applied via LinearGradient; keep a dark fallback for platforms without the native module
    backgroundColor: '#E4E4E4',
    width: screenWidth,
    paddingBottom: 24,
    borderRadius:32,
   
  },
  container: {
    flex: 1,
    borderRadius:32,
    paddingHorizontal: 20,
    backgroundColor: '#0E0D0D',
    paddingTop: 10,
    top: 13,
    width: screenWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#8D8D8D',
    fontSize: 12,
    marginBottom: 22,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  codeDot: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeDotActive: {
    borderColor: '#B9F54A',
  },
  codeInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  codeInnerActive: {
    backgroundColor: '#B9F54A',
  },
  submit: {
    marginBottom: 16,
  },
  keypad: {
    marginTop: 'auto',
    paddingBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  key: {
    width: '30%',
    height: 52,
    borderRadius: 12,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 19,
  },
  keyEmpty: {
    width: '30%',
    height: 52,
    marginBottom: 12,
  },
  keyText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
