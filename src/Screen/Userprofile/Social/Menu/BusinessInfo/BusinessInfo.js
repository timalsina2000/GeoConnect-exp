import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const NEON = '#B9F54A';
const PINK = '#E95561';
const DARK = '#0B0B0B';
const BLUE = '#4D6CFF';
const LIGHT_BG = '#FFFFFF'; // Changed to pure white for the card look
const TEXT_GRAY = '#7E7E7E';
const BORDER_COLOR = '#E0E0E0';

// Reusable Input Component to match design
const InputField = ({ label, placeholder, icon, value, multiline = false }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputWrapper, multiline && { height: 80, alignItems: 'flex-start', paddingTop: 10 }]}>
      <TextInput
        style={[styles.input, multiline && { textAlignVertical: 'top' }]}
        placeholder={placeholder}
        placeholderTextColor={TEXT_GRAY}
        value={value}
        multiline={multiline}
      />
      {icon && <MaterialIcons name={icon} size={20} color={TEXT_GRAY} />}
    </View>
  </View>
);

export default function BusinessInfo({ navigation }) {
  const [lookingFor, setLookingFor] = useState('Looking for worker');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Background decoration layers */}
      <View style={styles.topGreenBar} />

      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.roundBtn} onPress={() => navigation?.goBack()}>
              <Ionicons name="arrow-back" size={20} color={DARK} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Create Own Business</Text>
            <View style={{ width: 36 }} />
          </View>

          {/* Company Info Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Company Info</Text>
          </View>

          <InputField label="Company name*" placeholder="XXX Digital" />
          <InputField label="Work name*" placeholder="Graphic Design" />
          <InputField label="Industry*" placeholder="Consultancy" />
          <InputField 
            label="Work Bio" 
            placeholder="I am a graphics designer with 4 years of experience in this industry." 
            multiline={true} 
          />
          <InputField 
            label="About company" 
            placeholder="XXX Digital is a well known digital service based company in the worldwide" 
            multiline={true} 
          />

          {/* Contact Info Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Contact Info</Text>
          </View>

          <InputField label="Website" placeholder="https://www.examplewebsite.com" icon="add" />
          <InputField label="Email" placeholder="jenifeer@gmail.com" />
          <InputField label="Location*" placeholder="Savar, Dhaka" icon="my-location" />

          {/* Media Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Logo, Image or business card</Text>
          </View>
          
          <View style={styles.mediaRow}>
            <Image 
               source={{ uri: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=200' }} 
               style={styles.mediaThumbnail} 
            />
            <TouchableOpacity style={styles.addButton}>
               <MaterialCommunityIcons name="plus-circle" size={32} color={PINK} />
            </TouchableOpacity>
          </View>

          {/* "What are you looking for" Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>What are you looking for?</Text>
          </View>
          
          <TouchableOpacity style={styles.dropdownWrapper}>
            <Text style={styles.dropdownText}>{lookingFor}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color={DARK} />
          </TouchableOpacity>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: DARK,
  },
  topGreenBar: {
    height: 100,
    backgroundColor: PINK,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    top: 75,
    width: width - 40,
    alignSelf: 'center',
  },
  mainContainer: {
    top: 53,
    flex: 1,
    backgroundColor: LIGHT_BG,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -70,
    overflow: 'hidden',
  },
  scrollContent: {
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  roundBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: DARK,
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: DARK,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: DARK,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: DARK,
    fontWeight: '500',
  },
  mediaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  mediaThumbnail: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 15,
  },
  addButton: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 30,
  },
  dropdownText: {
    fontSize: 14,
    color: DARK,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: DARK,
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});