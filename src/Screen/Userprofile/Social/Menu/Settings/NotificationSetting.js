import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const NEON = '#B9F54A';
const DARK = '#0B0B0B';
const LIGHT_BG = '#FFFFFF';
const TEXT_GRAY = '#7E7E7E';

// Reusable Section Header Component
const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

// Reusable Notification Row Component
const NotificationItem = ({ title, value, onToggle }) => (
  <View style={styles.itemWrapper}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Switch
      trackColor={{ false: "#E0E0E0", true: DARK }}
      thumbColor={"#FFF"}
      ios_backgroundColor="#E0E0E0"
      onValueChange={onToggle}
      value={value}
    />
  </View>
);

export default function NotificationSetting({ navigation }) {
  // States for all toggles
  const [settings, setSettings] = useState({
    newMessages: true,
    newAdmirers: true,
    newMatches: true,
    expiringMatches: false,
    profileTips: false,
    vibrations: true,
  });

  const toggleSwitch = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Background decoration layers */}
      <View style={styles.topGreenBar} />

      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.roundBtn}
              onPress={() => navigation?.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color={DARK} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notification Settings</Text>
            <View style={{ width: 36 }} />
          </View>

          {/* Message Notifications Section */}
          <SectionHeader title="MESSAGE NOTIFICATIONS" />
          <NotificationItem 
            title="New Messages" 
            value={settings.newMessages} 
            onToggle={() => toggleSwitch('newMessages')} 
          />

          {/* Match Notifications Section */}
          <SectionHeader title="Match notifications" />
          <NotificationItem 
            title="New admirers" 
            value={settings.newAdmirers} 
            onToggle={() => toggleSwitch('newAdmirers')} 
          />
          <NotificationItem 
            title="New matches" 
            value={settings.newMatches} 
            onToggle={() => toggleSwitch('newMatches')} 
          />
          <NotificationItem 
            title="Expiring matches" 
            value={settings.expiringMatches} 
            onToggle={() => toggleSwitch('expiringMatches')} 
          />

          {/* Match Notifications Section (Repeat as per design) */}
          <SectionHeader title="MATCH NOTIFICATIONS" />
          <NotificationItem 
            title="Top profile tips" 
            value={settings.profileTips} 
            onToggle={() => toggleSwitch('profileTips')} 
          />

          {/* Vibrations Section */}
          <SectionHeader title="VIBRATIONS" />
          <NotificationItem 
            title="Enable app vibrations" 
            value={settings.vibrations} 
            onToggle={() => toggleSwitch('vibrations')} 
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Slightly off-white background behind the card
  },
  topGreenBar: {
    height: 100,
    backgroundColor: NEON,
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
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 25,
  },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: DARK,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 12,
    fontWeight: '600',
    color: TEXT_GRAY,
    textTransform: 'uppercase',
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: LIGHT_BG,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
});