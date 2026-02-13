// FilterScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const NEON = '#B9F54A';
const DARK = '#0B0B0B';
const BORDER = '#E6E6E6';


const GENDER = ['Male', 'Female', 'Others'];
const AGES = ['20-25', '25-28', '30-35', '36-40', '40-45'];
const INTERESTS = ['Workout', 'Drink', 'Smoke', 'Kids', 'Games', 'Travel'];
const LANGUAGES = ['🇬🇧 English', '🇫🇷 French', '🇮🇹 Italian', '🇳🇱 Dutch'];
const PERSONALITIES = ['Introvert', 'Extrovert', 'Ambivert', 'Friendly'];
const RELATIONSHIPS = ['Single', 'Widowed'];

export default function FilterScreen({ navigation }) {
  // form state
  const [connectedTo, setConnectedTo] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedPersonalities, setSelectedPersonalities] = useState([]);
  const [relationship, setRelationship] = useState('');
  const [nationality, setNationality] = useState('');
  const [distance, setDistance] = useState(1.2);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleAge = (age) => {
    setSelectedAges((prev) =>
      prev.includes(age) ? prev.filter((a) => a !== age) : [...prev, age]
    );
  };

  const toggleInterest = (i) => {
    setSelectedInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const toggleMultiOption = (value, setter) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setConnectedTo('');
    setVerifiedOnly(false);
    setSelectedAges([]);
    setSelectedInterests([]);
    setSelectedLanguages([]);
    setSelectedPersonalities([]);
    setRelationship('');
    setNationality('');
    setDistance(1.2);
    setOpenDropdown(null);
  };

  const applyFilters = () => {
    const payload = {
      connectedTo,
      verifiedOnly,
      ages: selectedAges,
      interests: selectedInterests,
      languages: selectedLanguages,
      personalities: selectedPersonalities,
      relationship,
      nationality,
      distance,
    };
    console.log('apply filters', payload);
    if (navigation && navigation.goBack) navigation.goBack();
  };

  const renderSelectRow = (label, value, onPress) => (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <TouchableOpacity style={styles.selectBox} onPress={onPress}>
        <Text style={[styles.selectText, !value && { color: '#A0A0A0' }]}>
          {value || 'Select'}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#9E9E9E" />
      </TouchableOpacity>
    </View>
  );

  const renderDropdownRow = ({
    label,
    keyName,
    options,
    value,
    onSelect,
    multi = false,
  }) => {
    const isOpen = openDropdown === keyName;
    const displayValue = multi
      ? value.length
        ? value.join(', ')
        : ''
      : value;

    return (
      <View style={styles.row}>
        <Text style={styles.rowLabel}>{label}</Text>
        <TouchableOpacity
          style={styles.selectBox}
          onPress={() => setOpenDropdown(isOpen ? null : keyName)}
        >
          <Text
            style={[
              styles.selectText,
              !displayValue && { color: '#A0A0A0' },
            ]}
            numberOfLines={1}
          >
            {displayValue || 'Select'}
          </Text>
          <Ionicons
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={18}
            color="#9E9E9E"
          />
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdownMenu}>
            {options.map((option) => {
              const selected = multi ? value.includes(option) : value === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => onSelect(option)}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      selected && styles.dropdownItemTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                  {selected && (
                    <Ionicons name="checkmark" size={16} color={DARK} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Set status bar to match the grey modal background */}
      <StatusBar barStyle="dark-content" backgroundColor="#D8D8D8" />

      <View style={styles.headerWrap}>
        <View style={styles.headerTop}>
          <View style={styles.handle} />
        </View>

        <View style={styles.headerRow}>
          <Text style={styles.title}>Filter</Text>

          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => (navigation && navigation.goBack ? navigation.goBack() : null)}
          >
            <Ionicons name="close" size={20} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {renderDropdownRow({
          label: 'Connected to',
          keyName: 'connectedTo',
          options: GENDER,
          value: connectedTo,
          onSelect: (option) => {
            setConnectedTo(option);
            setOpenDropdown(null);
          },
        })}

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Profile Types</Text>
          <View style={styles.verifiedRow}>
            <Text style={styles.verifiedText}>Verified User</Text>
            <TouchableOpacity
              onPress={() => setVerifiedOnly((v) => !v)}
              style={[
                styles.switch,
                verifiedOnly ? styles.switchOn : styles.switchOff,
              ]}
            >
              <View
                style={[
                  styles.switchDot,
                  verifiedOnly ? styles.switchDotOn : styles.switchDotOff,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Age</Text>
          <View style={styles.chipsWrap}>
            {AGES.map((a) => {
              const selected = selectedAges.includes(a);
              return (
                <TouchableOpacity
                  key={a}
                  onPress={() => toggleAge(a)}
                  style={[styles.chip, selected && styles.chipSelected]}
                >
                  <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                    {a}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.chipsWrap}>
            {INTERESTS.map((i) => {
              const sel = selectedInterests.includes(i);
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => toggleInterest(i)}
                  style={[styles.chip, sel && styles.chipSelected]}
                >
                  <Text style={[styles.chipText, sel && styles.chipTextSelected]}>
                    {i}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {renderDropdownRow({
          label: 'Language',
          keyName: 'language',
          options: LANGUAGES,
          value: selectedLanguages,
          multi: true,
          onSelect: (option) => toggleMultiOption(option, setSelectedLanguages),
        })}
        {renderDropdownRow({
          label: 'Personality',
          keyName: 'personality',
          options: PERSONALITIES,
          value: selectedPersonalities,
          multi: true,
          onSelect: (option) => toggleMultiOption(option, setSelectedPersonalities),
        })}
        {renderDropdownRow({
          label: 'Relationship',
          keyName: 'relationship',
          options: RELATIONSHIPS,
          value: relationship,
          onSelect: (option) => {
            setRelationship(option);
            setOpenDropdown(null);
          },
        })}
        {renderSelectRow('Nationality', nationality, () => console.log('open nationality'))}

        <View style={[styles.section, { marginTop: 6 }]}>
          <Text style={styles.sectionTitleSmall}>Set your area</Text>
          <View style={styles.areaInfoRow}>
            <Text style={styles.areaCaption}>Up to 02 kilometers away</Text>
            <Text style={styles.areaValue}>{distance.toFixed(1)} Km</Text>
          </View>

          <View style={{ paddingHorizontal: 6, marginTop: 8 }}>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0.5}
              maximumValue={50}
              step={0.1}
              minimumTrackTintColor={NEON}
              maximumTrackTintColor={'#EDEDED'}
              thumbTintColor={DARK}
              value={distance}
              onValueChange={(val) => setDistance(val)}
            />
          </View>
        </View>

        <View style={{ height: 28 }} />
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.resetBtn} onPress={resetFilters}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.applyBtn} onPress={applyFilters}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#D8D8D8',
    // Ensures the status bar area is accounted for
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  headerWrap: {
    // Adjusted marginTop: on iOS it looks like a modal offset, 
    // on Android we already added the StatusBar height to safe padding.
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 6,
    paddingHorizontal: 14,
  },
  headerTop: {
    alignItems: 'center',
    marginBottom: 8,
  },
  handle: {
    width: 48,
    height: 5,
    backgroundColor: '#EDEDED',
    borderRadius: 3,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: DARK,
  },

  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 110,
    backgroundColor: '#fff',
    // Important: fill the rest of the screen with white
    minHeight: Dimensions.get('window').height,
  },

  row: {
    marginBottom: 16,
  },

  rowLabel: {
    color: '#222',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '700',
  },

  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },

  selectText: {
    fontSize: 14,
    color: '#222',
    flex: 1,
    marginRight: 8,
  },

  dropdownMenu: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  dropdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#222',
  },
  dropdownItemTextSelected: {
    fontWeight: '700',
  },

  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  verifiedText: {
    color: '#454545',
    fontSize: 14,
    marginRight: 10,
  },

  switch: {
    width: 48,
    height: 28,
    borderRadius: 20,
    padding: 4,
    justifyContent: 'center',
  },
  switchOn: {
    backgroundColor: NEON,
  },
  switchOff: {
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    borderColor: BORDER,
  },
  switchDot: {
    width: 20,
    height: 20,
    borderRadius: 12,
  },
  switchDotOn: {
    backgroundColor: DARK,
    alignSelf: 'flex-end',
  },
  switchDotOff: {
    backgroundColor: '#BFBFBF',
    alignSelf: 'flex-start',
  },

  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#222',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '700',
  },
  sectionTitleSmall: {
    color: '#222',
    fontSize: 13,
    marginBottom: 6,
    fontWeight: '700',
  },

  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  chipSelected: {
    backgroundColor: NEON,
    borderColor: NEON,
  },
  chipText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },
  chipTextSelected: {
    color: DARK,
  },

  areaInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  areaCaption: {
    color: '#9B9B9B',
    fontSize: 13,
  },
  areaValue: {
    color: '#9B9B9B',
    fontSize: 13,
    fontWeight: '700',
  },

  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: BORDER,
  },

  resetBtn: {
    flex: 1,
    marginRight: 12,
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  resetText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 16,
  },

  applyBtn: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: NEON,
  },
  applyText: {
    color: DARK,
    fontWeight: '800',
    fontSize: 16,
  },
});
