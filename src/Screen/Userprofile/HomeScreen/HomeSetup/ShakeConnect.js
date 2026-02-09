import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Colors based on the image
const NEON_GREEN = '#B9F54A';
const BLUE = '#4D6CFF';
const DARK_GRAY = '#333333';
const WHITE = '#FFFFFF';

const ShakeConnect = ({ navigation }) => {
  // Placeholder image used in the example
  const bgImage = { uri: 'https://randomuser.me/api/portraits/women/68.jpg' };

  return (
    <ImageBackground source={bgImage} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Dark overlay for better text visibility */}
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}
        style={styles.gradientOverlay}
      >
        <View style={styles.safeArea}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation?.goBack()}>
              <Ionicons name="arrow-back" size={24} color={WHITE} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Socialise (1/25)</Text>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="options-outline" size={24} color={WHITE} />
            </TouchableOpacity>
          </View>

          {/* Main Content - Right Side Icons */}
          <View style={styles.mainContent}>
            <View style={styles.rightIconsContainer}>
              <TouchableOpacity style={styles.sideIconButton}>
                <MaterialCommunityIcons name="movie-open-outline" size={22} color={WHITE} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sideIconButton}>
                <Feather name="gift" size={22} color={WHITE} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            {/* User Info */}
            <View style={styles.userInfoContainer}>
              <View style={styles.tagContainer}>
                <Text style={styles.tagText}>Social</Text>
              </View>
              <View style={styles.nameRow}>
                <Text style={styles.username}>@mikestoins</Text>
                <Text style={styles.age}>35yrs</Text>
                <MaterialCommunityIcons name="check-decagram" size={18} color={BLUE} style={styles.verifiedIcon} />
              </View>
              <Text style={styles.subtitle}>Digital Marketer</Text>
              <TouchableOpacity style={styles.downArrowButton}>
                <Ionicons name="chevron-down" size={24} color={WHITE} />
              </TouchableOpacity>
            </View>

            {/* Bottom Action Bar */}
            <View style={styles.actionBar}>
              <TouchableOpacity style={[styles.actionButton, styles.connectButton]}>
                <Ionicons name="heart-outline" size={18} color={DARK_GRAY} />
                <Text style={styles.connectButtonText}>Connect</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.actionButton, styles.messageButton]}>
                <Ionicons name="chatbubble-outline" size={18} color={WHITE} />
                <Text style={styles.actionButtonText}>Message</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.actionButton, styles.giftButton]}>
                <Feather name="gift" size={18} color={WHITE} />
                <Text style={styles.actionButtonText}>Gift</Text>
              </TouchableOpacity>

              <View style={styles.locationContainer}>
                <FontAwesome5 name="map-marker-alt" size={14} color={WHITE} />
                <Text style={styles.locationText}>400m</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  gradientOverlay: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: WHITE,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightIconsContainer: {
    marginBottom: 20,
  },
  sideIconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  bottomSection: {
    width: '100%',
  },
  userInfoContainer: {
    marginBottom: 20,
  },
  tagContainer: {
    backgroundColor: BLUE,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  tagText: {
    color: WHITE,
    fontSize: 12,
    fontWeight: '600',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: WHITE,
    marginRight: 8,
  },
  age: {
    fontSize: 16,
    color: WHITE,
    marginRight: 4,
  },
  verifiedIcon: {
    marginTop: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#DDDDDD',
  },
  downArrowButton: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  connectButton: {
    backgroundColor: NEON_GREEN,
    flex: 2,
    marginRight: 10,
  },
  messageButton: {
    backgroundColor: BLUE,
    flex: 2,
    marginRight: 10,
  },
  giftButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flex: 1.5,
    marginRight: 10,
  },
  connectButtonText: {
    color: DARK_GRAY,
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  actionButtonText: {
    color: WHITE,
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: WHITE,
    fontSize: 12,
    marginLeft: 4,
  },
});

export default ShakeConnect;