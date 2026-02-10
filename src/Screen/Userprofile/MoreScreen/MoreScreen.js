import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const DARK = '#000000';
const DARK_GREY = '#0B0B0B';
const ICON_BG = '#2B2B2B';
const NEON_LIME = '#CCF16A'; // The "Upgrade" banner color
const MENU_ICON = '#C2E96A';
const TEXT_GREY = '#9E9E9E';

const MoreScreen = ({ navigation }) => {
  
  // Reusable Menu Item Component
  const MenuItem = ({ icon, title, showArrow = true, isSignout = false, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <View style={styles.iconCircle}>
          <MaterialIcons name={icon} size={22} color={isSignout ? NEON_LIME : MENU_ICON} />
        </View>
        <Text style={styles.menuTitle}>{title}</Text>
      </View>
      {showArrow && (
        <MaterialIcons name="chevron-right" size={24} color="#444" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        
        {/* Top Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>More</Text>
        </View>

        {/* Profile Card */}
        
        <TouchableOpacity
          style={styles.profileCard}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('SocialProfile')}
        >
          <View style={styles.profileInfo}>
            <Image
              source={require('../../../../assets/image/welcome_bg.jpg')} // Update with your image path
              style={styles.avatar}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Jesmin</Text>
              <Text style={styles.subText}>Social Profile</Text>
            </View>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={28} color="#888" />
         
        </TouchableOpacity>
       

        {/* Black Container */}
        <View style={styles.mainContent}>
          
          {/* Upgrade Banner */}
          <TouchableOpacity style={styles.banner}>
            <View style={styles.bannerContent}>
              <MaterialCommunityIcons name="lightning-bolt" size={24} color={DARK} />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerTitle}>Upgrade to Geo Plus today!</Text>
                <Text style={styles.bannerSub}>Unlock all premium in updated plan</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Menu List */}
          <View style={styles.menuList}>
            <MenuItem icon="storefront" title="Geo Shop" />
            <View style={styles.separator} />
            
            <MenuItem icon="stars" title="Point & Wallet" />
            <View style={styles.separator} />
            
            <MenuItem icon="label" title="Plans & Billing" />
            <View style={styles.separator} />
            
            <MenuItem icon="settings" title="Settings" />
            <View style={styles.separator} />
            
            <MenuItem icon="person-add" title="Invite a Friend" />
            <View style={styles.separator} />
            
            <MenuItem
              icon="logout"
              title="Signout"
              showArrow={false}
              isSignout={true}
              onPress={() => navigation.navigate('Auth', { screen: 'Welcome' })}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '800',
    color: DARK,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 16,
    borderRadius: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 3,
    zIndex: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: '#E91E63', // Pinkish border from image
  },
  nameContainer: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: DARK,
  },
  subText: {
    fontSize: 13,
    color: TEXT_GREY,
    marginTop: 2,
  },
  mainContent: {
    flex: 1,
    backgroundColor: DARK_GREY,
    marginTop: -40, // Pulls up to overlap slightly behind card
    paddingTop: 60,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
  },
  banner: {
    backgroundColor: NEON_LIME,
    borderRadius: 20,
    padding: 18,
    marginBottom: 30,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerTextContainer: {
    marginLeft: 10,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: DARK,
  },
  bannerSub: {
    fontSize: 12,
    color: DARK,
    opacity: 0.7,
    marginTop: 2,
  },
  menuList: {
    marginBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: ICON_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginLeft: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#1A1A1A',
    marginLeft: 60, // Align with text
  },
});

export default MoreScreen;
