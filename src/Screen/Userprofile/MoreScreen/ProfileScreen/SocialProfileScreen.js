import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const AVATAR = require('../../../../../assets/image/welcome_bg.jpg');

const DARK = '#0B0B0B';
const LIGHT_BG = '#FFFFFF';
const CARD_BG = '#FFFFFF';
const GREEN = '#C2E96A';
const TEXT_GRAY = '#7A7A7A';

export default function SocialProfileScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaTab, setMediaTab] = useState('Photo');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <LinearGradient
      colors={['#CFF47A', '#CBEF6B']} // Matching the lime green theme
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.headerContainer}
    >
      {/* Top Row: Avatar + Geo Plus + More */}
      <View style={styles.headerTopRow}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrap}>
            <Image source={AVATAR} style={styles.avatar} />
          </View>
          <View style={styles.onlineDot} />
        </View>

        <View style={styles.rightHeaderGroup}>
          <View style={styles.geoPlusPill}>
            <MaterialIcons name="bolt" size={14} color={DARK} />
            <Text style={styles.geoPlusText}>Geo Plus</Text>
          </View>

          <TouchableOpacity style={styles.moreBtn} onPress={() => setMenuOpen(true)}>
            <MaterialIcons name="more-vert" size={24} color={DARK} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.infoBlock}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>Jesmin</Text>
            <Text style={styles.age}> 24 yrs</Text>
            <MaterialIcons name="verified" size={20} color="#0095f6" style={{ marginLeft: 6 }} />
          </View>
          <Text style={styles.handle}>@jesmin</Text>
          
          <View style={styles.statsRow}>
            <Text style={styles.statText}>
              30 <Text style={styles.statLabel}>Connection/ day</Text>
            </Text>
            <Text style={styles.statText}>
              500 <Text style={styles.statLabel}>Views</Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Switch Account Button */}
      <TouchableOpacity
        style={styles.switchButton}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('SwitchProfile')}
      >
        <Text style={styles.switchText}>Switch to Business Account</Text>
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

            <View style={styles.sectionCard}>
              <View style={styles.verifyRow}>
                <View style={styles.verifyItem}>
                  <MaterialIcons name="check-circle" size={18} color="#2EA44F" />
                  <Text style={styles.verifyText}> Verify my profile</Text>
                </View>
                <Text style={styles.verifiedBadge}>Verified</Text>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>About</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <Text style={styles.bodyText}>
                I'm Akmal Nasrulloh. Efficiently negotiate scalable resources after professional
                materials. Collaboratively utilize flexible convergence via cross-unit catalysts.
              </Text>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Media</Text>
              <View style={styles.mediaTabs}>
                <TouchableOpacity onPress={() => setMediaTab('Photo')}>
                  <Text style={mediaTab === 'Photo' ? styles.mediaTabActive : styles.mediaTab}>
                    Photo (1/5)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMediaTab('Reels')}>
                  <Text style={mediaTab === 'Reels' ? styles.mediaTabActive : styles.mediaTab}>
                    Reels
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMediaTab('Friends')}>
                  <Text style={mediaTab === 'Friends' ? styles.mediaTabActive : styles.mediaTab}>
                    Friends
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMediaTab('Work')}>
                  <Text style={mediaTab === 'Work' ? styles.mediaTabActive : styles.mediaTab}>
                    Looking for work
                  </Text>
                </TouchableOpacity>
              </View>
              {mediaTab === 'Friends' ? (
                <View style={styles.friendsBlock}>
                  <View style={styles.friendsHeader}>
                    <Text style={styles.friendsCount}>Total Friends 25</Text>
                    <TouchableOpacity
                       onPress={() => navigation.navigate('FriendList')}    
                    style={styles.viewAllBtn}>
                      <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                  </View>

                  {[1, 2, 3, 4].map((i) => (
                    <View key={i} style={styles.friendCard}>
                      <View style={styles.friendLeft}>
                        <View style={styles.friendAvatarWrap}>
                          <Image source={AVATAR} style={styles.friendAvatar} />
                        </View>
                        <View style={styles.friendInfo}>
                          <Text style={styles.friendName}>Nora</Text>
                          <Text style={styles.friendHandle}>@nora 35yrs</Text>
                          <Text style={styles.friendCountry}>USA</Text>
                        </View>
                      </View>
                      <View style={styles.friendActions}>
                        <TouchableOpacity style={styles.messageBtn}>
                          <Text style={styles.messageText}>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.giftBtn}>
                          <Text style={styles.giftText}>Gift</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.moreMini}>
                          <MaterialIcons name="more-vert" size={20} color={DARK} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              ) : mediaTab === 'Work' ? (
                <View style={styles.workBlock}>
                  <View style={styles.workSection}>
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionTitle}>Work Info</Text>
                      <TouchableOpacity 
                        onPress={() => navigation.navigate('WorkDetails')}
                      style={styles.editSmall}>
                        <MaterialIcons name="edit" size={16} color={DARK} />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.infoLabel}>Work name</Text>
                    <Text style={styles.infoValue}>Graphic Design</Text>
                    <View style={styles.divider} />
                    <Text style={styles.infoLabel}>Industry</Text>
                    <Text style={styles.infoValue}>Design</Text>
                  </View>

                  <View style={styles.workSection}>
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionTitle}>Experience</Text>
                      <TouchableOpacity style={styles.editSmall}>
                        <MaterialIcons name="edit" size={16} color={DARK} />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.infoLabel}>Company name</Text>
                    <Text style={styles.infoValue}>XXX Digital</Text>
                    <View style={styles.divider} />
                    <Text style={styles.infoLabel}>Role</Text>
                    <Text style={styles.infoValue}>Graphic Designer</Text>
                    <View style={styles.divider} />
                    <View style={styles.dateRow}>
                      <View style={styles.dateItem}>
                        <Text style={styles.infoLabel}>Start date</Text>
                        <View style={styles.dateValueRow}>
                          <Text style={styles.infoValue}>12 Aug 2015</Text>
                          <MaterialIcons name="calendar-today" size={14} color={TEXT_GRAY} />
                        </View>
                      </View>
                      <View style={styles.dateItem}>
                        <Text style={styles.infoLabel}>End date</Text>
                        <View style={styles.dateValueRow}>
                          <Text style={styles.infoValue}>12 Aug 2020</Text>
                          <MaterialIcons name="calendar-today" size={14} color={TEXT_GRAY} />
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.workSection}>
                    <View style={styles.sectionHeaderRow}>
                      <Text style={styles.sectionTitle}>Contact Info</Text>
                      <TouchableOpacity style={styles.editSmall}>
                        <MaterialIcons name="edit" size={16} color={DARK} />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.infoLabel}>Email</Text>
                    <Text style={styles.infoValue}>jenifeer@gmail.com</Text>
                    <View style={styles.divider} />
                    <Text style={styles.infoLabel}>Location</Text>
                    <Text style={styles.infoValue}>
                      123 Main Street, Apt 101, NewYork, CA 12345.
                    </Text>
                  </View>

                  <View style={styles.workSection}>
                    <Text style={styles.sectionTitle}>CV</Text>
                    <View style={styles.fileRow}>
                      <View style={styles.fileCard}>
                        <View style={styles.fileBadge}>
                          <Text style={styles.fileBadgeText}>PDF</Text>
                        </View>
                      </View>
                      <View style={styles.fileAdd}>
                        <Text style={styles.fileAddText}>+</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.workSection}>
                    <Text style={styles.sectionTitle}>Cover letter</Text>
                    <View style={styles.fileRow}>
                      <View style={styles.fileCard}>
                        <View style={styles.fileBadge}>
                          <Text style={styles.fileBadgeText}>PDF</Text>
                        </View>
                      </View>
                      <View style={styles.fileAdd}>
                        <Text style={styles.fileAddText}>+</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.mediaRow}>
                  <Image source={AVATAR} style={styles.mediaThumb} />
                  <View style={styles.mediaThumbSmall} >
                    <Text style={{margin:'auto'}}>+</Text>
                  </View>
                </View>
              )}
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Personal Info</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Full name</Text>
                <Text style={styles.infoValue}>Akmal Nasrulloh</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>User name</Text>
                <Text style={styles.infoValue}>@akmalnasrulloh</Text>
              </View>
              <View style={styles.metaGrid}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Age</Text>
                  <Text style={styles.metaValue}>45</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Height</Text>
                  <Text style={styles.metaValue}>5'7"</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Weight</Text>
                  <Text style={styles.metaValue}>72</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>123 Main Street, Apt 101, NewYork, CA 12345.</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Religion</Text>
                <Text style={styles.infoValue}>Christian</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Relationship</Text>
                <Text style={styles.infoValue}>Single</Text>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Bio</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <Text style={styles.bodyText}>
                I'm Akmal Nasrulloh. Efficiently negotiate scalable resources after professional
                materials. Collaboratively utilize flexible convergence via cross-unit catalysts.
              </Text>
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Interests</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <View style={styles.interestsRow}>
                {['Workout', 'Drink', 'Smoke', 'Kids'].map((t) => (
                  <View key={t} style={styles.interestPill}>
                    <Text style={styles.interestText}>{t}</Text>
                  </View>
                ))}
                <View style={styles.addPill}>
                  <Text style={styles.addPillText}>+</Text>
                </View>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Work Info</Text>
                <TouchableOpacity 
                style={styles.editSmall}>

                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <Text style={styles.bodyText}>
                Recruiter | Helping healthcare professional finance consultant at XXX Digital
              </Text>
              <View style={styles.addNewRow}>
                <Text style={styles.addNewText}>+ Add New</Text>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Education Info</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <Text style={styles.bodyText}>Graduation in Finance from XXX University</Text>
              <View style={styles.addNewRow}>
                <Text style={styles.addNewText}>+ Add New</Text>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Nationality</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <Text style={styles.bodyText}>Indonesia</Text>
              <View style={styles.addNewRow}>
                <Text style={styles.addNewText}>+ Add New</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Menu Popup */}
      <Modal
        visible={menuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <Pressable style={styles.menuOverlay} onPress={() => setMenuOpen(false)}>
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialIcons name="workspace-premium" size={18} color={DARK} />
              <Text style={styles.menuText}>Upgrade Membership</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('BlockList')}
            style={styles.menuItem}>
              <MaterialIcons name="block" size={18} color={DARK} />
              <Text style={styles.menuText}>Block list</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialIcons name="settings" size={18} color={DARK} />
              <Text style={styles.menuText}>Profile Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
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
  safe: { flex: 1, backgroundColor: LIGHT_BG },
  scroll: { padding: 12 },
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 6,
  },
 headerContainer: {
    padding: 20,
    borderRadius: 35, // Large rounded corners for the card
    margin: 10,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rightHeaderGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  geoPlusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White pill
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    // Subtle shadow
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  geoPlusText: {
    fontSize: 14,
    fontWeight: '700',
    color: DARK,
    marginLeft: 4,
  },
  moreBtn: {
    padding: 4,
  },
  profileSection: {
    marginTop: 2,
  },
  avatarContainer: {
    width: 86,
    height: 86,
    position: 'relative',
    marginBottom: 5,
  },
  avatarWrap: {
    width: 86,
    height: 86,
    borderRadius: 43,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#E91E63', // Pink border
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  onlineDot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50', // Green online dot
    borderWidth: 2,
    borderColor: '#CFF47A', // Match background color
  },
  infoBlock: {
    marginBottom: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: '900',
    color: DARK,
  },
  age: {
    fontSize: 22,
    color: DARK,
    marginLeft: 8,
    fontWeight: '500',
  },
  handle: {
    fontSize: 16,
    color: DARK,
    marginTop: 2,
    opacity: 0.8,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  statText: {
    fontSize: 20,
    fontWeight: '800',
    color: DARK,
    marginRight: 25,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: TEXT_GRAY,
  },
  switchButton: {
    backgroundColor: DARK,
    paddingVertical: 18,
    borderRadius: 15, // Squared but rounded corners
    alignItems: 'center',
    marginTop: 5,
  },
  switchText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  content: { padding: 12, backgroundColor: LIGHT_BG },
  sectionCard: {
    backgroundColor: CARD_BG,
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { fontSize: 14, fontWeight: '800', color: DARK },
  sectionPercent: { fontSize: 12, color: TEXT_GRAY },
  progressBackground: {
    height: 6,
    backgroundColor: '#E9E9E9',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressFill: { height: '100%', backgroundColor: GREEN },
  verifyRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  verifyItem: { flexDirection: 'row', alignItems: 'center' },
  verifyText: { color: '#374151', marginLeft: 6, fontWeight: '600' },
  verifiedBadge: { color: '#10B981', fontWeight: '700' },

  editSmall: { padding: 6 },
  bodyText: { color: '#374151', marginTop: 8, lineHeight: 18, fontSize: 12 },

  mediaTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    paddingBottom: 6,
  },
  mediaTabActive: {
    fontSize: 11,
    fontWeight: '800',
    color: DARK,
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: DARK,
    paddingBottom: 6,
  },
  mediaTab: { fontSize: 11, color: TEXT_GRAY, marginRight: 10 },
  mediaRow: { flexDirection: 'row', alignItems: 'center' },
  mediaThumb: { width: 56, height: 56, borderRadius: 10 },
  mediaThumbSmall: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: GREEN,
    marginLeft: 10,
  },
  friendsBlock: {
    marginTop: 6,
  },
  friendsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  friendsCount: {
    fontSize: 13,
    fontWeight: '700',
    color: DARK,
  },
  viewAllBtn: {
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  viewAllText: {
    fontSize: 12,
    color: DARK,
    fontWeight: '600',
  },
  friendCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  friendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  friendAvatarWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#E91E63',
    overflow: 'hidden',
    marginRight: 10,
  },
  friendAvatar: {
    width: '100%',
    height: '100%',
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 14,
    fontWeight: '800',
    color: DARK,
  },
  friendHandle: {
    fontSize: 12,
    color: TEXT_GRAY,
    marginTop: 2,
  },
  friendCountry: {
    fontSize: 12,
    color: TEXT_GRAY,
    marginTop: 2,
  },
  friendActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  messageBtn: {
    backgroundColor: '#4B64FF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  messageText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  giftBtn: {
    backgroundColor: DARK,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 6,
  },
  giftText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  moreMini: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workBlock: {
    marginTop: 6,
  },
  workSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  divider: {
    height: 1,
    backgroundColor: '#EFEFEF',
    marginVertical: 8,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateItem: {
    flex: 1,
    marginRight: 10,
  },
  dateValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  fileCard: {
    width: 46,
    height: 46,
    borderRadius: 8,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  fileBadge: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  fileBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#E53935',
  },
  fileAdd: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAF7C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileAddText: {
    fontSize: 16,
    fontWeight: '800',
    color: DARK,
  },

  infoRow: { marginTop: 8 },
  infoLabel: { color: TEXT_GRAY, fontSize: 11 },
  infoValue: { fontSize: 12, fontWeight: '700', color: DARK, marginTop: 2 },
  metaGrid: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  metaItem: { width: (width - 72) / 3 },
  metaLabel: { color: TEXT_GRAY, fontSize: 11 },
  metaValue: { fontWeight: '700', color: DARK, fontSize: 12 },

  interestsRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  interestPill: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  interestText: { fontSize: 11, color: DARK, fontWeight: '600' },
  addPill: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPillText: { fontSize: 16, color: DARK, fontWeight: '700' },

  addNewRow: {
    marginTop: 8,
    paddingVertical: 6,
  },
  addNewText: { color: TEXT_GRAY, fontWeight: '700', fontSize: 12 },
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
