import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const AVATAR = require('../../../../../../assets/image/welcome_bg.jpg');

const DARK = '#0B0B0B';
const LIGHT_BG = '#FFFFFF';
const CARD_BG = '#FFFFFF';
const GREEN = '#C2E96A';
const TEXT_GRAY = '#7A7A7A';
const CORAL = '#E95561';

export default function BusinessProfileScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <LinearGradient
            colors={['#000000', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerContainer}
          >
            <View style={styles.headerTopRow}>
              <View style={styles.headerSpacer} />
              <TouchableOpacity style={styles.moreBtn} onPress={() => setMenuOpen(true)}>
                <MaterialIcons name="more-vert" size={22} color={LIGHT_BG} />
              </TouchableOpacity>
            </View>

            <View style={styles.profileSection}>
              <View style={styles.avatarWrap}>
                <Image source={AVATAR} style={styles.avatar} />
              </View>

              <View style={styles.nameRow}>
                <Text style={styles.name}>Jesmin</Text>
                <Text style={styles.age}> 24 yrs</Text>
                <MaterialIcons name="verified" size={16} color="#0095f6" style={{ marginLeft: 6 }} />
              </View>
              <Text style={styles.handle}>@jesmin</Text>
              <Text style={styles.businessMeta}>My business Account</Text>

              <View style={styles.activePill}>
                <View style={styles.activeDot} />
                <Text style={styles.activeText}>Active</Text>
                <MaterialIcons name="keyboard-arrow-down" size={14} color="#D1D5DB" />
              </View>
            </View>

            <TouchableOpacity
              style={styles.switchButton}
              activeOpacity={0.1}
              onPress={() => navigation.navigate('SwitchProfile')}
            >
              <Text style={styles.switchText}>Switch to Social</Text>
            </TouchableOpacity>

          </LinearGradient>

          <View style={styles.content}>
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Complete Profile</Text>
                <Text style={styles.sectionPercent}>60%</Text>
              </View>
              <View style={styles.progressBackground}>
                <View style={[styles.progressFill, { width: '60%' }]} />
              </View>
            </View>

            <TouchableOpacity
              style={styles.sectionCard}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('VerifyProfile')}
            >
              <View style={styles.verifyRow}>
                <View style={styles.verifyItem}>
                  <MaterialIcons name="check-circle" size={18} color="#2EA44F" />
                  <Text style={styles.verifyText}> Verify my profile</Text>
                </View>
                <Text style={styles.verifiedBadge}>Verified</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Business Info</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('BusinessInfo')}
                style={styles.editSmall}>
                  <MaterialIcons name="edit" size={12} color="#4B5563" />
                  <Text style={styles.editLabel}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.infoLabel}>Business name</Text>
              <Text style={styles.infoValue}>Jenifeer Co.</Text>
              <View style={styles.divider} />
              <Text style={styles.infoLabel}>Industry</Text>
              <Text style={styles.infoValue}>Consultancy</Text>
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Contact Info</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={12} color="#4B5563" />
                  <Text style={styles.editLabel}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.infoLabel}>Website</Text>
              <Text style={styles.infoValue}>https://www.examplewebsite.com</Text>
              <View style={styles.addMoreTag}>
                <Text style={styles.addMoreText}>+ Add More</Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>jenifeer@gmail.com</Text>
              <View style={styles.divider} />
              <Text style={styles.infoLabel}>Location</Text>
              <View style={styles.locationRow}>
                <Text style={[styles.infoValue, { flex: 1 }]}>
                  "123 Main Street, Apt 101, NewYork, CA 12345.
                </Text>
                <MaterialIcons name="my-location" size={14} color={DARK} />
              </View>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Upload Picture (1/5)</Text>
              <View style={styles.uploadRow}>
                <Image source={AVATAR} style={styles.uploadThumb} />
                <TouchableOpacity style={styles.uploadAdd}>
                  <Text style={styles.uploadAddText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.sectionCard}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('WorkDetails')}
            >
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>I'm looking for work</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={12} color="#4B5563" />
                  <Text style={styles.editLabel}>Edit</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
               onPress={() => navigation.navigate('ExplorePeople')}
            style={styles.exploreBtn}>
              <Text style={styles.exploreText}>Explore People</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={menuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <Pressable style={styles.menuOverlay} onPress={() => setMenuOpen(false)}>
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
              <MaterialIcons name="workspace-premium" size={18} color={DARK} />
              <Text style={styles.menuText}>Upgrade Membership</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuOpen(false);
                navigation.navigate('BlockList');
              }}
              style={styles.menuItem}
            >
              <MaterialIcons name="block" size={18} color={DARK} />
              <Text style={styles.menuText}>Block list</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
              <MaterialIcons name="settings" size={18} color={DARK} />
              <Text style={styles.menuText}>Profile Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuOpen(false);
                navigation.navigate('Auth', { screen: 'Welcome' });
              }}
              style={styles.menuItem}
            >
              <MaterialIcons name="logout" size={18} color={DARK} />
              <Text style={styles.menuText}>Signout</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: LIGHT_BG,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  },
  scroll: { padding: 10, paddingBottom: 20 },
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 24,
    overflow: 'hidden',
  },
  headerContainer: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 12,
    borderRadius: 16,
    margin: 0,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerSpacer: {
    width: 22,
    height: 22,
  },
  moreBtn: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
  },
  avatarWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#E91E63',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
    color: LIGHT_BG,
  },
  age: {
    fontSize: 24,
    color: '#E5E7EB',
    fontWeight: '500',
  },
  handle: {
    fontSize: 13,
    color: '#D1D5DB',
    marginTop: 2,
  },
  businessMeta: {
    fontSize: 13,
    color: '#A1A1AA',
    marginTop: 6,
  },
  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 8,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7BC96F',
    marginRight: 6,
  },
  activeText: {
    color: '#D1D5DB',
    fontSize: 12,
    marginRight: 4,
  },
  switchButton: {
    backgroundColor: CORAL,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  switchText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  sectionCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: DARK,
  },
  sectionPercent: {
    fontSize: 13,
    color: TEXT_GRAY,
    fontWeight: '700',
  },
  progressBackground: {
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: CORAL,
  },
  verifyRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  verifyItem: { flexDirection: 'row', alignItems: 'center' },
  verifyText: { color: '#374151', marginLeft: 6, fontWeight: '600' },
  verifiedBadge: {
    color: '#4B6B38',
    backgroundColor: '#EAF7C7',
    fontWeight: '700',
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  editSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: '#FDE2E0',
  },
  editLabel: {
    marginLeft: 3,
    fontSize: 11,
    color: DARK,
    fontWeight: '700',
  },
  infoLabel: { color: TEXT_GRAY, fontSize: 10, marginTop: 8 },
  infoValue: { fontSize: 12, fontWeight: '600', color: DARK, marginTop: 2 },
  divider: { height: 1, backgroundColor: '#EEEEEE', marginTop: 8 },
  addMoreTag: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#F7F7F7',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  addMoreText: { fontSize: 11, color: TEXT_GRAY, fontWeight: '600' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  uploadRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  uploadThumb: { width: 46, height: 46, borderRadius: 8, marginRight: 10 },
  uploadAdd: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FDE2E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadAddText: { color: CORAL, fontWeight: '800', fontSize: 14 },
  exploreBtn: {
    backgroundColor: CORAL,
    borderRadius: 10,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  exploreText: { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 80,
    paddingRight: 20,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
    width: 200,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 13,
    color: DARK,
    fontWeight: '600',
  },
});
