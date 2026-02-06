import React, { useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import { MaterialIcons } from '@expo/vector-icons';



const COUNTRIES = [
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'CA', name: 'Canada', dial: '+1' },
  { code: 'AE', name: 'United Arab Emirates', dial: '+971' },
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'NG', name: 'Nigeria', dial: '+234' },
];

export default function CreateAccountScreen({ navigation, route }) {
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [search, setSearch] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const canContinue = phone.trim().length > 5 && email.trim().length > 3;

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return COUNTRIES;
    return COUNTRIES.filter((item) =>
      `${item.name} ${item.code} ${item.dial}`.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
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
                color="#FAF7F7"
                style={styles.cardArrowIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Create your Geoconnect account!</Text>
          <Text style={styles.subtitle}>Which part of the country do you call home?</Text>

          <TouchableOpacity
            style={styles.countryRow}
            activeOpacity={0.8}
            onPress={() => setCountryOpen((prev) => !prev)}
          >
            <Text style={styles.countryLabel}>Country / Region</Text>
            <Text style={styles.countryValue}>
              {selectedCountry.name} ({selectedCountry.dial})
            </Text>
          </TouchableOpacity>

          {countryOpen ? (
            <View style={styles.countryPanel}>
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search country"
                placeholderTextColor="#7E7E7E"
                style={styles.countrySearch}
              />
              <FlatList
                data={filtered}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => {
                      setSelectedCountry(item);
                      setCountryOpen(false);
                      setSearch('');
                    }}
                  >
                    <Text style={styles.countryItemText}>
                      {item.name} ({item.dial})
                    </Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={styles.countryDivider} />}
                style={styles.countryList}
              />
            </View>
          ) : null}

          <View style={styles.form}>
            <Text style={styles.inputLabel}>Phone</Text>
            <View style={styles.phoneRow}>
              <Text style={styles.phonePrefix}>{selectedCountry.dial}</Text>
              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Your number"
                placeholderTextColor="#7E7E7E"
                keyboardType="phone-pad"
                style={styles.phoneInput}
              />
            </View>

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Your Email"
              placeholderTextColor="#7E7E7E"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View style={styles.footer}>
            <PrimaryButton
              title="Next"
              onPress={() => navigation.navigate('OtpVerify')}
              disabled={!canContinue}
              style={styles.nextButton}
            />
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.footerLink} onPress={() => navigation.navigate('Login')}>
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  container1: {
    flex: 1,
    top: 73,
    // gradient is applied via LinearGradient; keep a dark fallback for platforms without the native module
    backgroundColor: '#E4E4E4',
    width: screenWidth,
    paddingBottom: 24,
    borderRadius: 33,
  },
  container: {
    flex: 1,
    top: 13,
    borderRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: '#0C0C0C',
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
    borderColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#8D8D8D',
    fontSize: 12,
    marginBottom: 16,
  },
  countryRow: {
    backgroundColor: '#121212',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  countryLabel: {
    color: '#7E7E7E',
    fontSize: 11,
    marginBottom: 6,
  },
  countryValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  countryPanel: {
    marginTop: 10,
    backgroundColor: '#101010',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    padding: 12,
  },
  countrySearch: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    paddingHorizontal: 10,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  countryList: {
    maxHeight: 180,
  },
  countryItem: {
    paddingVertical: 8,
  },
  countryItemText: {
    color: '#D9D9D9',
    fontSize: 13,
  },
  countryDivider: {
    height: 1,
    backgroundColor: '#1E1E1E',
  },
  form: {
    marginTop: 16,
  },
  inputLabel: {
    color: '#CFCFCF',
    fontSize: 12,
    marginBottom: 8,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    backgroundColor: '#121212',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  phonePrefix: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    height: 52,
    color: '#FFFFFF',
    fontSize: 14,
  },
  input: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    backgroundColor: '#121212',
    paddingHorizontal: 14,
    color: '#FFFFFF',
    fontSize: 14,
  },
  footer: {

    marginTop: 'auto',
    marginBottom: 64,
  },
  nextButton: {
    height: 48,
    borderRadius: 12,
  },
  footerText: {
    color: '#8D8D8D',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12,
  },
  footerLink: {
    color: '#B9F54A',
    fontWeight: '600',
  },
});
