import React, { useMemo, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import { MaterialIcons } from '@expo/vector-icons';

const GENDERS = [
  { id: 'women', label: 'Women' },
  { id: 'men', label: 'Men' },
  { id: 'other', label: 'Other' },
];

const DOB_OPTIONS = ['DD', 'MM', 'YYYY'];

export default function GenderAgeScreen({ navigation, route }) {
  const [selectedGender, setSelectedGender] = useState('women');
  const [dob, setDob] = useState(['DD', 'MM', 'YYYY']);

  const canContinue = useMemo(() => {
    return selectedGender && dob.every((value) => value !== 'DD' && value !== 'MM' && value !== 'YYYY');
  }, [selectedGender, dob]);

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

        <Text style={styles.title}>Select your gender & age</Text>
        <Text style={styles.subtitle}>
          Find and connect to unique communities.
        </Text>

        <Text style={styles.sectionLabel}>Date of birth</Text>
        <View style={styles.dobRow}>
          {DOB_OPTIONS.map((label, index) => (
            <TouchableOpacity
              key={label}
              style={[styles.dobChip, index === DOB_OPTIONS.length - 1 && styles.dobChipLast]}
              onPress={() => {
                const next = [...dob];
                next[index] = label === 'DD' ? '09' : label === 'MM' ? '08' : '1998';
                setDob(next);
              }}
            >
              <Text style={styles.dobText}>{dob[index]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Gender</Text>
        <View style={styles.genderList}>
          {GENDERS.map((gender) => {
            const isActive = gender.id === selectedGender;
            return (
              <TouchableOpacity
                key={gender.id}
                style={[styles.genderCard, isActive && styles.genderCardActive]}
                onPress={() => setSelectedGender(gender.id)}
                activeOpacity={0.85}
              >
                <ImageBackground
                  source={require('../../../../assets/image/welcome_bg.jpg')}
                  style={styles.genderImage}
                  imageStyle={styles.genderImageStyle}
                >
                  <View style={styles.genderOverlay}>
                    <Text style={styles.genderText}>{gender.label}</Text>
                  </View>
                </ImageBackground>
                <View style={[styles.genderChip, isActive && styles.genderChipActive]} />
              </TouchableOpacity>
            );
          })}
        </View>

        <PrimaryButton
          title="Next"
          onPress={() =>
            navigation.navigate('CreateUsername', {
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
    paddingTop: 16,
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
  sectionLabel: {
    color: '#5C5C5C',
    fontSize: 12,
    marginBottom: 8,
  },
  dobRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dobChip: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  dobChipLast: {
    marginRight: 0,
  },
  dobText: {
    color: '#141414',
    fontSize: 13,
    fontWeight: '600',
  },
  genderList: {
    flex: 1,
  },
  genderCard: {
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  genderCardActive: {
    borderColor: '#B9F54A',
  },
  genderImage: {
    height: 92,
    justifyContent: 'flex-end',
  },
  genderImageStyle: {
    resizeMode: 'cover',
  },
  genderOverlay: {
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  genderText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  genderChip: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#B9B9B9',
    backgroundColor: '#FFFFFF',
  },
  genderChipActive: {
    backgroundColor: '#B9F54A',
    borderColor: '#B9F54A',
  },
  nextButton: {
    height: 48,
    borderRadius: 12,
    marginBottom: 10,
  },
});
