import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function BioScreen({ navigation }) {
  const [bio, setBio] = useState(
    'I am Akmal Namdi, Efficiently negotiate scalable resources after professional materials. Collaboratively utilize backend convergence via cross-unit catalysts'
  );

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
                            { width: `50%` },
                          ]}
                        />
                       
            </View>
        </View>
        <Text style={styles.title}>Write a bio about yourself</Text>
        <Text style={styles.subtitle}>Add about your focus, goal etc.</Text>

        <TextInput
          value={bio}
          onChangeText={setBio}
          multiline
          style={styles.textArea}
        />
        <Text style={styles.counter}>{Math.min(bio.length, 1000)}/1000 words</Text>

        <View style={styles.footerRow}>
          <PrimaryButton
            title="Skip"
            variant="secondary"
            style={styles.skipButton}
            onPress={() => navigation.navigate('OnboardingAddPhoto')}
          />
          <PrimaryButton
            title="Continue"
            onPress={() => navigation.navigate('OnboardingAddPhoto')}
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
  textArea: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    minHeight: 240,
    padding: 12,
    fontSize: 13,
    color: '#141414',
    textAlignVertical: 'top',
  },
  counter: {
    color: '#7A7A7A',
    fontSize: 11,
    alignSelf: 'flex-end',
    marginTop: 6,
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
