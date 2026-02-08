// FilterScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');
const NEON = '#B9F54A';
const DARK = '#0B0B0B';
const CARD_BG = '#FFFFFF';
const BORDER = '#E6E6E6';

const AGES = ['20-25', '25-28', '30-35', '36-40', '40-45'];
const INTERESTS = ['Workout', 'Drink', 'Smoke', 'Kids', 'Games', 'Travel'];

export default function FilterScreen({ navigation }) {
  // form state
  const [connectedTo, setConnectedTo] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [language, setLanguage] = useState('');
  const [relationship, setRelationship] = useState('');
  const [nationality, setNationality] = useState('');
  const [distance, setDistance] = useState(1.2); // in km

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

  const resetFilters = () => {
    setConnectedTo('');
    setVerifiedOnly(false);
    setSelectedAges([]);
    setSelectedInterests([]);
    setLanguage('');
    setRelationship('');
    setNationality('');
    setDistance(1.2);
  };

  const applyFilters = () => {
    const payload = {
      connectedTo,
      verifiedOnly,
      ages: selectedAges,
      interests: selectedInterests,
      language,
      relationship,
      nationality,
      distance,
    };
    // TODO: send payload to parent / store / API
    console.log('apply filters', payload);
    // close screen if navigation available
    if (navigation && navigation.goBack) navigation.goBack();
  };

  // Simple select placeholders: you can replace these TouchableOpacity with real pickers
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

  return (
    <SafeAreaView style={styles.safe}>
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
        {/* Connected to */}
        {renderSelectRow('Connected to', connectedTo, () =>
          console.log('open connected to picker')
        )}

        {/* Profile Types (verified switch style) */}
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

        {/* Age chips */}
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

        {/* Interests */}
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

        {/* Language / Relationship / Nationality */}
        {renderSelectRow('Language', language, () => console.log('open language'))}
        {renderSelectRow('Relationship', relationship, () =>
          console.log('open relationship')
        )}
        {renderSelectRow('Nationality', nationality, () => console.log('open nationality'))}

        {/* Area slider */}
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

        {/* Spacer so bottom buttons don't overlap */}
        <View style={{ height: 28 }} />
      </ScrollView>

      {/* Bottom actions */}
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
  },

  headerWrap: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    // top neon accent
   
   
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
  },

  title: {
    fontFamily: 'DMSans-Bold',
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
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 110, // allow space for bottom bar
    backgroundColor: '#fff',
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
    left: 14,
    right: 14,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginLeft: 0,
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
