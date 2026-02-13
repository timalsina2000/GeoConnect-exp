import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Modal,
  Pressable,
  Platform,
  StatusBar,
} from 'react-native';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

// Colors
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
    image: require('../../../../../assets/image/welcome_bg.jpg'),
    badge: 'Business',
    meta: 'Compellingly morph enterprise web readiness whereas user-centric methods of empowerment. 💝',
  },
  {
    id: 'p2',
    type: 'post',
    name: '@john',
    age: '24yrs',
    location: 'Downtown',
    image: require('../../../../../assets/image/welcome_bg.jpg'),
    badge: 'Business',
    meta: 'Want to meet someone new! 🌟',
  },
];

export default function HomeScreenBusiness({ navigation }) {
  const CARD_WIDTH = Math.round(width * 0.72);
  const [isOnline, setIsOnline] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.postCard, { width: CARD_WIDTH }]}>
        <Image source={item.image} style={styles.postImage} resizeMode="cover" />

        <View style={styles.postBadge}>
          <Text style={styles.postBadgeText}>{item.badge}</Text>
        </View>

        <View style={styles.viewBadge}>
          <MaterialIcons name="visibility" size={12} color="#fff" />
          <Text style={styles.viewText}> 12</Text>
        </View>

        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="edit" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="movie" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="delete" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.postMeta}>
          <View style={styles.metaRow}>
            <Text style={styles.postText} numberOfLines={2}>
              {item.meta}
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Makes the status bar transparent so the DARK background goes behind it */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Top curved dark background */}
      <View style={styles.topBackground}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>Geoconnect</Text>
            <Text style={styles.subtitle}>Welcome to Business account!</Text>
          </View>

          <View style={styles.headerBadges}>
            <View style={styles.coinBadge}>
              <Image
                source={require('../../../../../assets/Icon/coin.png')}
                style={{ width: 16, height: 16, marginRight: 6 }}
              />
              <Text style={styles.coinText}>1200</Text>
              <MaterialIcons name="chevron-right" size={16} color="#6C6C6C" />
            </View>

            <TouchableOpacity
              style={styles.onlineBadge}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons
                                name="radio-button-checked"
                                size={15}
                                color={isOnline ? '#37C871' : '#FF4D4F'}
                                style={styles.onlineDotIcon}
                              />
                              <Text style={styles.onlineText}>{isOnline ? 'Online' : 'Offline'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Profile Card overlapping */}
      <View style={styles.profileWrapper}>
        <View style={styles.profileCard}>
          <Image
            source={require('../../../../../assets/image/welcome_bg.jpg')}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>
              @jenifeer <Text style={styles.age}>20 yrs</Text>
            </Text>
            <Text style={styles.roleText}>Manager At Apple</Text>
            <View style={styles.locRow}>
              
              <Text style={styles.location}> Savar, Dhaka</Text>
              <MaterialCommunityIcons name="target" size={14} color="#FDFCFC" style={{marginLeft: 4}} />
            </View>
          </View>

          <TouchableOpacity
            style={styles.socialToggle}
            onPress={() => navigation.navigate('SwitchProfile')}
          >
            <Image source={require('../../../../../assets/Icon/redo.png')} 
                            style={{ width: 12, height: 12, }} />
            <Text style={styles.socialToggleText}>Social</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content panel */}
      <View style={styles.contentPanel}>
        <View style={styles.statusHeader}>
          <View style={styles.statusLeft}>
            <Text style={styles.statusTitle}>Status</Text>
            <TouchableOpacity style={styles.plusCircle}>
              <MaterialIcons name="add" size={18} color={DARK} />
            </TouchableOpacity>
          </View>

          <View style={styles.statusTabs}>
            <Text style={styles.tabActive}>Post</Text>
            <Text style={styles.tab}>Reels</Text>
            <MaterialCommunityIcons name="tune-variant" size={20} color='#818181' style={{ marginLeft: 10 , borderWidth: 2, borderColor: '#F7F7F7', borderRadius: 50, padding: 6 }} />
          </View>
        </View>

        <FlatList
          data={POSTS}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 8 }}
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
            <MaterialIcons name="track-changes" size={20} color={DARK} style={{ marginRight: 8 }} />
            <Text style={styles.scanText}>Scan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.connectBtn}>
            <Text style={styles.connectText}>Shake to Connect</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirmation Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setModalVisible(false)}>
          <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
          <View style={styles.modalDim} />
        </Pressable>
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
              onPress={() => {
                setIsOnline(!isOnline);
                setModalVisible(false);
              }}
            >
              <Text style={styles.modalBtnYesText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },

  topBackground: {
    backgroundColor: DARK,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    // Adjust padding to move text below status bar icons while background stays behind them
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 20 : 60,
    paddingHorizontal: 16,
    paddingBottom: 42,
  },

  header: { flexDirection: 'row', 
    justifyContent: 'space-between',
     alignItems: 'center',
     marginTop: 10,
     },
  logo: { 
    fontFamily:'Alkatra',
    fontSize: 24,
    fontWeight: '800',
    color: '#FFF'
  },
  subtitle: { fontSize: 12, color: '#A8A8A8', marginTop: 0 },

  headerBadges: { flexDirection: 'row', alignItems: 'center' },
  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)',
  },
  coinText: { fontWeight: '700', fontSize: 13, color: '#fff' },

  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)',
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  onlineText: { fontSize: 12,
    
      fontWeight: '600',
     color: '#fff' ,
      marginLeft: 4,
    },

  profileWrapper: {
    paddingHorizontal: 16,
    marginTop: -28,
    zIndex: 50,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY_CORAL,
    borderRadius: 20,
    padding: 14,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
  },
  avatar: { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: '#FFF' },
  profileInfo: { flex: 1, marginLeft: 12 },
  name: { color: '#FFF', fontWeight: '800', fontSize: 17 },
  age: { fontWeight: '600', fontSize: 13, color: '#fff', opacity: 0.95 },
  roleText: { color: '#FFF', fontSize: 13, opacity: 0.95, marginTop: 2 },
  locRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  location: { color: '#FFF', fontSize: 11 },

  socialToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0E0E0E',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  socialToggleText: { color: '#FFF', fontSize: 12, fontWeight: '700', marginLeft: 6 },

  contentPanel: {
    flex: 1,
    backgroundColor:'#FFF',
    paddingHorizontal: 16,
    paddingTop: 22,
    marginTop: 16,
  },

  statusHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  statusLeft: { flexDirection: 'row', alignItems: 'center' },
  statusTitle: { color: '#121212', fontSize: 20, fontWeight: '700', marginRight: 10 },
  plusCircle: { backgroundColor: '#D1D1D1', padding: 6, borderRadius: 20 },

  statusTabs: { flexDirection: 'row', alignItems: 'center' },
  tabActive: { color: '#121212', fontWeight: '700', borderBottomWidth: 2, borderBottomColor: '#121212', paddingBottom: 6, marginRight: 12 },
  tab: { color: '#888', paddingBottom: 6 },

  postCard: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: CARD_BG,
    height: Math.round(height * 0.46),
  },
  postImage: { width: '100%', height: '100%' },

  postBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: PRIMARY_CORAL,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    zIndex: 20,
  },
  postBadgeText: { color: '#FFF', fontWeight: '800', fontSize: 11 },

  viewBadge: {
    position: 'absolute',
    top: 14,
    left: 110,
    backgroundColor: 'rgba(0,0,0,0.45)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  viewText: { color: '#FFF', fontSize: 11 },

  postActions: { position: 'absolute', top: 14, right: 14, zIndex: 20 },
  actionIcon: { backgroundColor: 'rgba(0,0,0,0.55)', padding: 10, borderRadius: 12, marginBottom: 10 },

  postMeta: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  metaRow: { flexDirection: 'row', alignItems: 'flex-end' },
  postText: { color: '#FFF', flex: 1, fontSize: 13, lineHeight: 18 },

  footerActions: { flexDirection: 'row', paddingVertical: 20, paddingBottom: 28, alignItems: 'center' },
  scanBtn: { flex: 1,
     backgroundColor: '#FFFFFF', 
     flexDirection: 'row', 
     alignItems: 'center', 
     justifyContent: 'center',
     borderRadius: 16,
     borderWidth: 1,
    borderColor: '#0B0B0B',

     height: 56, 
     marginRight: 12 },

  scanText: { fontWeight: '700', color: DARK },
  connectBtn: { flex: 1.4, backgroundColor: PRIMARY_CORAL, alignItems: 'center', justifyContent: 'center', borderRadius: 16, height: 56 },
  connectText: { color: '#FFF', fontWeight: '800', fontSize: 16 },

  modalDim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  modalSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
    paddingBottom: Platform.OS === 'android' ? 24 : 30,
  },
  modalTitle: { fontSize: 20, fontWeight: '800', marginBottom: 10 },
  modalSubtitle: { textAlign: 'center', color: '#666', marginBottom: 24 },
  modalButtons: { flexDirection: 'row', width: '100%' },
  modalBtnNo: { flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#EEE', borderRadius: 12, marginRight: 12 },
  modalBtnNoText: { fontWeight: '700' },
  modalBtnYes: { flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
  modalBtnYesText: { color: '#FFF', fontWeight: '700' },
});
