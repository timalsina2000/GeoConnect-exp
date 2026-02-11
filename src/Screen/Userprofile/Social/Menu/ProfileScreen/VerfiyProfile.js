import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const NEON_GREEN = '#CFF47A';
const DARK = '#0B0B0B';
const GRAY_TEXT = '#6B7280';
const BORDER_COLOR = '#E5E7EB';

export default function VerifyProfile({ navigation }) {
  const [selectedID, setSelectedID] = useState('ID Card');
  const [isAgreed, setIsAgreed] = useState(true);

  const idTypes = ['Driver\'s License', 'ID Card', 'Passport'];

  const RadioButton = ({ label }) => {
    const isSelected = selectedID === label;
    return (
      <TouchableOpacity
        style={[
          styles.radioOption,
          isSelected ? styles.radioSelected : styles.radioUnselected,
        ]}
        onPress={() => setSelectedID(label)}
      >
        <View style={[styles.outerCircle, isSelected && styles.outerCircleActive]}>
          {isSelected && <View style={styles.innerCircle} />}
        </View>
        <Text style={[styles.radioLabel, isSelected && styles.radioLabelActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={24} color={DARK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify Your Profile</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.mainTitle}>Upload your document</Text>
        <Text style={styles.description}>
          you have to upload your govt. valid document to verify your first steps of profile verification in Geo app
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select your ID type</Text>
          <Text style={styles.sectionSubtitle}>
            We'll take 2 pictures of your ID. What ID would like to use?
          </Text>

          {/* ID Type Selection */}
          <View style={styles.radioGroup}>
            {idTypes.map((type) => (
              <RadioButton key={type} label={type} />
            ))}
          </View>
        </View>

        {/* Checkbox Section */}
        <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setIsAgreed(!isAgreed)}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons 
            name={isAgreed ? "checkbox-marked" : "checkbox-blank-outline"} 
            size={24} 
            color={DARK} 
          />
          <Text style={styles.checkboxText}>
            This photo won't be uploaded to your profile. It, will only be used to verify you <Text style={styles.boldText}>Contact Support</Text>
          </Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Take a Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Upload from Device</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: DARK,
    marginRight: 44, // Offset for back button to center title
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: DARK,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: GRAY_TEXT,
    lineHeight: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: GRAY_TEXT,
    marginBottom: 20,
  },
  radioGroup: {
    gap: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
  },
  radioUnselected: {
    borderColor: BORDER_COLOR,
    backgroundColor: '#FFF',
  },
  radioSelected: {
    borderColor: DARK,
    backgroundColor: DARK,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GRAY_TEXT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  outerCircleActive: {
    borderColor: NEON_GREEN,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: NEON_GREEN,
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: GRAY_TEXT,
  },
  radioLabelActive: {
    color: '#FFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  checkboxText: {
    flex: 1,
    fontSize: 13,
    color: GRAY_TEXT,
    marginLeft: 10,
    lineHeight: 18,
  },
  boldText: {
    fontWeight: '700',
    color: DARK,
  },
  footer: {
    gap: 12,
    marginBottom: 20,
  },
  primaryBtn: {
    backgroundColor: NEON_GREEN,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  secondaryBtn: {
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
});