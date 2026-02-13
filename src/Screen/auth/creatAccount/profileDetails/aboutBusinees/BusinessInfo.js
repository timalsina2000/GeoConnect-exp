import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'; // Added for the '+' icon

export default function BusinessInfo({ navigation }) {
  // Updated state for business fields
  const [businessName, setBusinessName] = useState('Mario');
  const [industry, setIndustry] = useState('Consultancy');
  const [website, setWebsite] = useState('');
  const [lookingFor, setLookingFor] = useState('Worker');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header with Progress Bar */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <MaterialIcons name="arrow-back" size={20} color="#000000" />
          </TouchableOpacity>

          <View style={styles.sliderTrack1}>
            <View style={[styles.sliderFill1, { width: '30%' }]} />
          </View>
        </View>

        {/* Titles */}
        <Text style={styles.title}>Input your business info</Text>
        <Text style={styles.subtitle}>
          Upload your business information to validate your business identity.
        </Text>

        {/* Form Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Business name*</Text>
          <TextInput
            value={businessName}
            onChangeText={setBusinessName}
            style={styles.input}
            placeholder="Enter business name"
          />

          <Text style={styles.label}>Industry*</Text>
          <TextInput
            value={industry}
            onChangeText={setIndustry}
            style={styles.input}
            placeholder="Enter industry"
          />

          <Text style={styles.label}>Website/ Url</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              value={website}
              onChangeText={setWebsite}
              style={styles.flexInput}
              placeholder="Ex: https://www.ex.com"
              placeholderTextColor="#C4C4C4"
            />
            <Feather name="plus" size={20} color="#000000" />
          </View>

          <Text style={styles.label}>Looking for*</Text>
          <TextInput
            value={lookingFor}
            onChangeText={setLookingFor}
            style={styles.input}
            placeholder="What are you looking for?"
          />
        </View>

        {/* Footer Buttons */}
        <View style={styles.footerRow}>
          <TouchableOpacity 
            style={styles.skipButton} 
            onPress={() => navigation.navigate('OnboardingEducation')}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.continueButton} 
            onPress={() => navigation.navigate('OnboardingEducation')}
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
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7F7F7', // Very light gray like the image
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderTrack1: {
    flex: 1,
    height: 4,
    backgroundColor: '#F0F0F0',
    borderRadius: 2,
    marginLeft: 20,
  },
  sliderFill1: {
    height: 4,
    backgroundColor: '#1A1A1A',
    borderRadius: 2,
  },
  title: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800', // Heavy weight for "Input your business info"
    marginBottom: 8,
  },
  subtitle: {
    color: '#717171',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 30,
  },
  form: {
    flex: 1,
  },
  label: {
    color: '#1A1A1A',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#333333', // Darker borders like design
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#000000',
    fontWeight: '600',
  },
  inputWithIcon: {
    height: 56,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexInput: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 12,
  },
  skipButton: {
    flex: 1,
    height: 58,
    borderRadius: 18,
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
    height: 58,
    borderRadius: 18,
    backgroundColor: '#C6E971', // The lime green color from design
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
});
