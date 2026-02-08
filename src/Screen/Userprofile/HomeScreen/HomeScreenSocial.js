import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
  Modal,
  Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

// Updated Design Palette based on image
const PRIMARY_CORAL = '#F26464'; 
const DARK = '#0B0B0B';
const CARD_BG = '#151515';

const POSTS = [
  {
    id: 'p1',
    type: 'post',
    name: '@jenifeer',
    age: '20yrs',
    location: 'Savar, Dhaka',
    image: require('../../../../assets/image/welcome_bg.jpg'), // Replace with your actual image path
    badge: 'Business',
    meta: 'Compellingly morph enterprise web readiness whereas user-centric methods of empowerment. 💝',
  },
  {
    id: 'p2',
    type: 'post',
    name: '@john',
    age: '24yrs',
    location: 'Downtown',
    image: require('../../../../assets/image/welcome_bg.jpg'),
    badge: 'Business',
    meta: 'Want to meet someone new! 🌟',
  },
];

export default function HomeScreenSocial({ navigation }) {
  const CARD_WIDTH = Math.round(width * 0.72);
  const [isOnline, setIsOnline] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.postCard, { width: CARD_WIDTH }]}>
        <Image source={item.image} style={styles.postImage} resizeMode="cover" />
        
        {/* Overlay Vertical Actions */}
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="edit" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="movie" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="delete" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Business Badge */}
        <View style={styles.postBadge}>
          <Text style={styles.postBadgeText}>{item.badge}</Text>
        </View>

        {/* View Count Badge */}
        <View style={styles.viewBadge}>
           <MaterialIcons name="visibility" size={12} color="#fff" />
           <Text style={styles.viewText}> 12</Text>
        </View>

        {/* Bottom Meta */}
        <View style={styles.postMeta}>
          <View style={styles.metaRow}>
            <Text style={styles.postText} numberOfLines={2}>{item.meta}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.topSection}>
          <View style={styles.header}>
            <View>
              <Text style={styles.logo}>Geoconnect</Text>
              <Text style={styles.subtitle}>Welcome to Business account!</Text>
            </View>

            <View style={styles.headerBadges}>
              <View style={styles.coinBadge}>
                <Image
                  source={require('../../../../assets/Icon/coin.png')}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <Text style={styles.coinText}>1200</Text>
                <MaterialIcons name="chevron-right" size={16} color="#6C6C6C" />
              </View>

              <TouchableOpacity
                style={styles.onlineBadge}
                onPress={() => setModalVisible(true)}
              >
                <View style={[styles.dot, { backgroundColor: isOnline ? '#37C871' : '#FF4D4F' }]} />
                <Text style={styles.onlineText}>{isOnline ? 'Online' : 'Offline'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Red Profile Card */}
          <View style={styles.profileWrapper}>
            <View style={styles.profileCard}>
              <Image
                source={require('../../../../assets/image/welcome_bg.jpg')}
                style={styles.avatar}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.name}>
                  @jenifeer <Text style={styles.age}>20 yrs</Text>
                </Text>
                <Text style={styles.roleText}>Manager At Apple</Text>
                <View style={styles.locRow}>
                   <MaterialIcons name="explore" size={12} color="#fff" />
                   <Text style={styles.location}> Savar, Dhaka</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.socialToggle}>
                <MaterialIcons name="redo" size={14} color="#fff" style={{ transform: [{ scaleX: -1 }] }} />
                <Text style={styles.socialToggleText}>Social</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Black Content Panel */}
        <View style={styles.contentPanel}>
          <View style={styles.statusHeader}>
            <View style={styles.statusLeft}>
              <Text style={styles.statusTitle}>Status</Text>
              <TouchableOpacity style={styles.plusCircle}>
                <MaterialIcons name="add" size={18} color={PRIMARY_CORAL} />
              </TouchableOpacity>
            </View>

            <View style={styles.statusTabs}>
              <Text style={styles.tabActive}>Post</Text>
              <Text style={styles.tab}>Reels</Text>
              <MaterialIcons name="tune" size={20} color="#8E8E8E" style={{ marginLeft: 12 }} />
            </View>
          </View>

          <FlatList
            data={POSTS}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 4 }}
            snapToInterval={CARD_WIDTH + 16}
            decelerationRate="fast"
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          />

          {/* Fixed Bottom Actions */}
          <View style={styles.footerActions}>
            <TouchableOpacity 
                style={styles.scanBtn}
                onPress={() => navigation.getParent()?.navigate('FriendScan')}
            >
              <MaterialIcons name="track-changes" size={20} color={DARK} style={{marginRight: 8}} />
              <Text style={styles.scanText}>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.connectBtn}>
              <Text style={styles.connectText}>Shake to Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Confirmation Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>Are you sure!</Text>
            <Text style={styles.modalSubtitle}>
              {isOnline ? "You will go offline and hidden from others." : "You will become visible to others again."}
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalBtnNo} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalBtnNoText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalBtnYes, { backgroundColor: PRIMARY_CORAL }]} 
                onPress={() => { setIsOnline(!isOnline); setModalVisible(false); }}
              >
                <Text style={styles.modalBtnYesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  container: { flex: 1, backgroundColor: '#FFF', marginTop: 10 },
  topSection: { paddingHorizontal: 16, zIndex: 10 },
  
  /* Header */
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  logo: { fontSize: 24, fontWeight: '800', color: DARK },
  subtitle: { fontSize: 12, color: '#6C6C6C' },
  headerBadges: { flexDirection: 'row', alignItems: 'center' },
  coinBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6, marginRight: 8 },
  coinText: { fontWeight: '700', fontSize: 13 },
  onlineBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F2F2', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: '#DDD' },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  onlineText: { fontSize: 12, fontWeight: '600' },

  /* Profile Card */
  profileWrapper: { marginBottom: -40, zIndex: 20 },
  profileCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: PRIMARY_CORAL, borderRadius: 24, padding: 16 },
  avatar: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#FFF' },
  profileInfo: { flex: 1, marginLeft: 12 },
  name: { color: '#FFF', fontWeight: '800', fontSize: 18 },
  age: { fontWeight: '400', fontSize: 15 },
  roleText: { color: '#FFF', fontSize: 13, opacity: 0.9, marginTop: 2 },
  locRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  location: { color: '#FFF', fontSize: 11 },
  socialToggle: { flexDirection: 'row', alignItems: 'center', backgroundColor: DARK, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8 },
  socialToggleText: { color: '#FFF', fontSize: 12, fontWeight: '700', marginLeft: 4 },

  /* Content */
  contentPanel: { flex: 1, backgroundColor: DARK, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 16, paddingTop: 50 },
  statusHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  statusLeft: { flexDirection: 'row', alignItems: 'center' },
  statusTitle: { color: '#FFF', fontSize: 20, fontWeight: '700', marginRight: 10 },
  plusCircle: { backgroundColor: '#222', padding: 6, borderRadius: 20 },
  statusTabs: { flexDirection: 'row', alignItems: 'center' },
  tabActive: { color: PRIMARY_CORAL, fontWeight: '700', borderBottomWidth: 2, borderBottomColor: PRIMARY_CORAL, paddingBottom: 4, marginRight: 15 },
  tab: { color: '#888', paddingBottom: 4 },

  /* Post Card */
  postCard: { borderRadius: 24, overflow: 'hidden', backgroundColor: CARD_BG, height: height * 0.45 },
  postImage: { width: '100%', height: '100%' },
  postBadge: { position: 'absolute', top: 15, left: 15, backgroundColor: PRIMARY_CORAL, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  postBadgeText: { color: '#FFF', fontWeight: '800', fontSize: 11 },
  viewBadge: { position: 'absolute', top: 15, left: 90, backgroundColor: 'rgba(0,0,0,0.4)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  viewText: { color: '#FFF', fontSize: 10 },
  postActions: { position: 'absolute', top: 15, right: 15 },
  actionIcon: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, borderRadius: 12, marginBottom: 10 },
  postMeta: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 15, backgroundColor: 'rgba(0,0,0,0.3)' },
  metaRow: { flexDirection: 'row', alignItems: 'flex-end' },
  postText: { color: '#FFF', flex: 1, fontSize: 13, lineHeight: 18 },

  /* Footer */
  footerActions: { flexDirection: 'row', paddingVertical: 20, paddingBottom: 30 },
  scanBtn: { flex: 1, backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 16, height: 56, marginRight: 12 },
  scanText: { fontWeight: '700', color: DARK },
  connectBtn: { flex: 1.5, backgroundColor: PRIMARY_CORAL, alignItems: 'center', justifyContent: 'center', borderRadius: 16, height: 56 },
  connectText: { color: '#FFF', fontWeight: '800', fontSize: 16 },

  /* Modal */
  modalOverlay: { flex: 1, justifyContent: 'flex-end' },
  modalSheet: { backgroundColor: '#FFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: '800', marginBottom: 10 },
  modalSubtitle: { textAlign: 'center', color: '#666', marginBottom: 24 },
  modalButtons: { flexDirection: 'row', width: '100%' },
  modalBtnNo: { flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#EEE', borderRadius: 12, marginRight: 12 },
  modalBtnNoText: { fontWeight: '700' },
  modalBtnYes: { flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
  modalBtnYesText: { color: '#FFF', fontWeight: '700' },
});