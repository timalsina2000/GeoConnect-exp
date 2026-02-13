import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function EducationInfo({ navigation }) {
  // Updated state names to match the context
  const [educationLevel, setEducationLevel] = useState('Graduation');
  const [instituteName, setInstituteName] = useState('XXX College');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header with Progress Bar */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <MaterialIcons name="arrow-back" size={22} color="#000000" />
          </TouchableOpacity>

          <View style={styles.sliderTrack}>
            <View style={[styles.sliderFill, { width: '50%' }]} />
          </View>
        </View>

        {/* Titles */}
        <Text style={styles.title}>Input your education info</Text>
        <Text style={styles.subtitle}>
          Upload your education information
        </Text>

        {/* Form Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Education level (Optional)</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              value={educationLevel}
              onChangeText={setEducationLevel}
              style={styles.flexInput}
              placeholder="Select level"
            />
            <Feather name="plus" size={24} color="#000000" />
          </View>

          <Text style={styles.label}>Institute name (Optional)</Text>
          <TextInput
            value={instituteName}
            onChangeText={setInstituteName}
            style={styles.input}
            placeholder="Enter institute name"
          />
        </View>

        {/* Footer Buttons */}
        <View style={styles.footerRow}>
          <TouchableOpacity 
            style={styles.skipButton} 
            onPress={() => navigation.navigate('NextScreen')}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.continueButton} 
            onPress={() => navigation.navigate('NextScreen')}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderTrack: {
    flex: 1,
    height: 8, // Thicker track as seen in image
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    marginLeft: 20,
    overflow: 'hidden',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#1A1A1A',
    borderRadius: 4,
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#8E8E8E', // Lighter gray
    fontSize: 16,
    marginBottom: 35,
  },
  form: {
    flex: 1,
  },
  label: {
    color: '#1A1A1A',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    height: 60,
    borderWidth: 1.5,
    borderColor: '#1A1A1A', // Sharp dark border
    borderRadius: 18,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    marginBottom: 20,
  },
  inputWithIcon: {
    height: 60,
    borderWidth: 1.5,
    borderColor: '#1A1A1A',
    borderRadius: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flexInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    gap: 15,
  },
  skipButton: {
    flex: 1,
    height: 64,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  continueButton: {
    flex: 1,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#D1F366', // Adjusted lime green
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
});