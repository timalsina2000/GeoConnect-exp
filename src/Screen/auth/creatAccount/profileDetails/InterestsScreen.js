import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const INTERESTS = [
  'Travel', 'Music', 'Design', 'Cats', 'Games', 'Anime', 'Food',
  'Fashion', 'Movies', 'Culture', 'Crypto', 'Gym', 'Photography',
  'Sneakers', 'Art', 'Books', 'Sports', 'Coffee',
];

export default function InterestsScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(['Music', 'Design']);

  const list = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return INTERESTS;
    return INTERESTS.filter((item) => item.toLowerCase().includes(term));
  }, [query]);

  const toggle = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

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
                            { width: `35%` },
                          ]}
                        />
                       
            </View>
        </View>
        <Text style={styles.title}>Choose minimum 5 things of your interests</Text>
        <Text style={styles.subtitle}>
          Use your interests to be matched with like-minded people.
        </Text>

        <View style={styles.searchRow}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor="#9B9B9B"
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.sectionLabel}>Choose your interests</Text>
        <View style={styles.chips}>
          {list.map((item) => {
            const active = selected.includes(item);
            return (
              <TouchableOpacity
                key={item}
                onPress={() => toggle(item)}
                style={[styles.chip, active && styles.chipActive]}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.count}>{selected.length}/5 Selected</Text>

        <View style={styles.footerRow}>
          <PrimaryButton
            title="Skip"
            variant="secondary"
            style={styles.skipButton}
            onPress={() => navigation.navigate('OnboardingBio')}
          />
          <PrimaryButton
            title="Continue"
            onPress={() => navigation.navigate('OnboardingBio')}
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
    marginBottom: 14,
  },
  searchRow: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    justifyContent: 'center',
    marginBottom: 14,
  },
  searchInput: {
    color: '#141414',
    fontSize: 13,
  },
  sectionLabel: {
    color: '#5C5C5C',
    fontSize: 12,
    marginBottom: 8,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  chipActive: {
    backgroundColor: '#141414',
    borderColor: '#141414',
  },
  chipText: {
    color: '#5C5C5C',
    fontSize: 11,
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  count: {
    color: '#7A7A7A',
    fontSize: 11,
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
