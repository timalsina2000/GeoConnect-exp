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
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const NEON = '#B9F54A';
const LIGHT_NEON = '#F2FFD4'; // Light tint for icon backgrounds
const DARK = '#0B0B0B';
const LIGHT_BG = '#FFFFFF';
const TEXT_GRAY = '#7E7E7E';
const BORDER_COLOR = '#E0E0E0';

// Reusable Setting Item Component
const SettingItem = ({ icon, title, subtitle, isLast, children, onPress }) => (
  <TouchableOpacity
    style={[styles.itemWrapper, isLast && { borderBottomWidth: 0 }]}
    onPress={onPress}
    activeOpacity={0.7}
    disabled={!onPress}
  >
    <View style={styles.iconCircle}>
      {icon}
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>
        {title} {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
      </Text>
    </View>
    {children ? children : <MaterialIcons name="chevron-right" size={24} color="#C4C4C4" />}
  </TouchableOpacity>
);

export default function Setting({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Visual background decoration */}
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
            <Text style={styles.headerTitle}>Settings</Text>
            <View style={{ width: 36 }} />
          </View>

          {/* Settings List */}
          <View style={styles.listContainer}>
            <SettingItem 
              title="Chat" 
              subtitle="(Vanish Mode, Seen/Unseen)" 
              icon={<MaterialCommunityIcons name="chat-processing-outline" size={22} color={DARK} />} 
            />
            <SettingItem 
              onPress={() => navigation.navigate('Notification')}
              title="Notification" 
              icon={<Ionicons name="notifications-outline" size={22} color={DARK} />} 
            />
            <SettingItem 
              title="Security & Password" 
              icon={<MaterialCommunityIcons name="shield-check-outline" size={22} color={DARK} />} 
            />
            <SettingItem 
              title="System Details" 
              icon={<MaterialCommunityIcons name="tune" size={22} color={DARK} />} 
            />
            <SettingItem 
              title="Plans & Billing" 
              icon={<MaterialCommunityIcons name="wallet-outline" size={22} color={DARK} />} 
            />
            <SettingItem 
              title="Auto Updates" 
              icon={<MaterialCommunityIcons name="cellphone-arrow-down" size={22} color={DARK} />} 
            />
            <SettingItem 
              title="Contact Us" 
              icon={<MaterialCommunityIcons name="message-text-outline" size={22} color={DARK} />} 
            />
            <SettingItem 
              title="About" 
              icon={<Ionicons name="information-circle-outline" size={22} color={DARK} />} 
            />
            
            <SettingItem 
              title="Dark Mode" 
              isLast={true}
              icon={<Ionicons name="moon-outline" size={22} color={DARK} />}
            >
              <Switch
                trackColor={{ false: "#E0E0E0", true: DARK }}
                thumbColor={"#FFF"}
                onValueChange={() => setIsDarkMode(!isDarkMode)}
                value={isDarkMode}
              />
            </SettingItem>
          </View>

          {/* Bottom Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.outlineBtn}>
              <Text style={styles.btnText}>Deactivate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.outlineBtn}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Auth', { screen: 'Welcome' })}
            >
              <Text style={styles.btnText}>Sign out</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.versionText}>App version 0.1</Text>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: LIGHT_BG,
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
    marginBottom: 10,
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
  listContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F9F9F9',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: LIGHT_NEON,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: DARK,
  },
  itemSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: TEXT_GRAY,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  outlineBtn: {
    width: '48%',
    height: 55,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  versionText: {
    textAlign: 'center',
    color: TEXT_GRAY,
    fontSize: 12,
    marginTop: 20,
  },
});
