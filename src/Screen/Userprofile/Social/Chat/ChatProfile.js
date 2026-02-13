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
  Switch, // Added Switch for Notifications
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const NEON = '#B9F54A';
const DARK = '#0C0C0C';
const LIGHT_BG = '#FFFFFF'; // Changed to pure white to match the image
const TEXT_GRAY = '#7E7E7E';

export default function ChatProfile({ navigation, route }) {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const { name = 'Jenifeer', status = 'Last seen recently', avatar } = route?.params || {};

  const profile = {
    name,
    handle: `@${String(name).toLowerCase().replace(/\s+/g, '')}`,
    lastSeen: status,
    avatar: avatar
      ? { uri: avatar }
      : { uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000' },
  };

  const OptionItem = ({ icon, title, hasSwitch, hasChevron, isDestructive }) => (
    <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
      <View style={styles.optionLeft}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <Text style={[styles.optionTitle, isDestructive && { color: DARK }]}>{title}</Text>
      </View>
      {hasSwitch && (
        <Switch
          trackColor={{ false: '#767577', true: DARK }}
          thumbColor={'#f4f3f4'}
          onValueChange={() => setIsNotificationsEnabled(prev => !prev)}
          value={isNotificationsEnabled}
        />
      )}
      {hasChevron && <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Background Layering */}
      <View style={styles.topGreenBar} />

      <View style={styles.mainContainer}>
        {/* Header Navigation */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.roundBtn}
            onPress={() => navigation?.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={DARK} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundBtn}>
            <MaterialCommunityIcons name="dots-vertical" size={24} color={DARK} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.avatarWrapper}>
              <Image source={profile.avatar} style={styles.avatar} />
            </View>
            <Text style={styles.profileName}>{profile.name}</Text>
            <Text style={styles.profileHandle}>{profile.handle}</Text>
            <Text style={styles.lastSeenText}>{profile.lastSeen}</Text>
          </View>

          {/* Options List */}
          <View style={styles.optionsContainer}>
            <OptionItem 
              title="Search" 
              icon={<Ionicons name="search-outline" size={24} color={DARK} />} 
            />
            <OptionItem 
              title="Notifications" 
              hasSwitch 
              icon={<Ionicons name="notifications-outline" size={24} color={DARK} />} 
            />
            <OptionItem 
              title="Media" 
              hasChevron 
              icon={<Ionicons name="image-outline" size={24} color={DARK} />} 
            />
            <OptionItem 
              title="Vanish Mode" 
              hasChevron 
              icon={<MaterialCommunityIcons name="timer-outline" size={24} color={DARK} />} 
            />
            <OptionItem 
              title={`Block ${profile.name}`} 
              icon={<Ionicons name="ban-outline" size={24} color={DARK} />} 
            />
            <OptionItem 
              title={`Report ${profile.name}`} 
              icon={<MaterialCommunityIcons name="alert-octagon-outline" size={24} color={DARK} />} 
            />
          </View>

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
    backgroundColor: NEON,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    position: 'absolute',
    top: 83,
    width: width - 40,
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: LIGHT_BG,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: 33,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    zIndex: 10,
  },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FF4DAB', // Pink border from image
    padding: 2,
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '800',
    color: DARK,
  },
  profileHandle: {
    fontSize: 14,
    color: DARK,
    marginVertical: 4,
    fontWeight: '500',
  },
  lastSeenText: {
    fontSize: 12,
    color: TEXT_GRAY,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
    width: 24,
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    color: DARK,
    fontWeight: '500',
  },
});
