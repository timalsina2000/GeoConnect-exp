import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function AboutScreen({ navigation }) {
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('7');
  const [weight, setWeight] = useState('70');

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
                            color="#000000"
                            style={styles.cardArrowIcon}
                          />
          </TouchableOpacity>

          <View style={styles.sliderTrack1}>
                        <View
                          style={[
                            styles.sliderFill1,
                            { width: `25%` },
                          ]}
                        />
                        
            </View>
        </View>
        <Text style={styles.title}>Talk about yourself</Text>
        <Text style={styles.subtitle}>
          Help us personalize your experience with a few details.
        </Text>

        <Text style={styles.label}>Your height</Text>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <TextInput
              value={heightFt}
              onChangeText={setHeightFt}
              keyboardType="number-pad"
              style={styles.input}
            />
            <Text style={styles.unit}>ft</Text>
          </View>
          <View style={[styles.inputWrap, styles.inputWrapLast]}>
            <TextInput
              value={heightIn}
              onChangeText={setHeightIn}
              keyboardType="number-pad"
              style={styles.input}
            />
            <Text style={styles.unit}>inch</Text>
          </View>
        </View>

        <Text style={styles.label}>Your Weight</Text>
        <View style={styles.weightRow}>
          <TextInput
            value={weight}
            onChangeText={setWeight}
            keyboardType="number-pad"
            style={styles.input}
          />
          <Text style={styles.unit}>kg</Text>
        </View>

        <View style={styles.footerRow}>
          <PrimaryButton
            title="Skip"
            variant="secondary"
            style={styles.skipButton}
            onPress={() => navigation.navigate('OnboardingInterests')}
          />
          <PrimaryButton
            title="Continue"
            onPress={() => navigation.navigate('OnboardingInterests')}
            style={styles.continueButton}
          />
        </View>
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
    paddingTop: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
    sliderTrack1: {
    flex: 1,               // take remaining space
  height: 5,             // slightly thinner
  backgroundColor: '#E8E8E8',
  borderRadius: 3,
  marginLeft: 12,        // space from arrow
  position: 'relative',
  marginRight: 30,       // space on right side
  },
   sliderFill1: {
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 4,
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
    lineHeight: 18,
    marginBottom: 16,
  },
  label: {
    color: '#5C5C5C',
    fontSize: 12,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
    marginRight: 10,
  },
  inputWrapLast: {
    marginRight: 0,
  },
  input: {
    flex: 1,
    color: '#141414',
    fontSize: 14,
  },
  unit: {
    color: '#7A7A7A',
    fontSize: 12,
  },
  weightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
  },
  footerRow: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 10,
  },
  skipButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    marginRight: 10,
  },
  continueButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
  },
});
