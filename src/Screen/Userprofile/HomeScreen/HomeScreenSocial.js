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
} from 'react-native';
// Use SafeAreaView from this library for proper Android support
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from '../../../components/PrimaryButton';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

const NEON = '#B9F54A'; 
const DARK = '#0B0B0B';

const POSTS = [
  { id: 'create', type: 'create' },
  {
    id: 'p1',
    type: 'post',
    name: '@jenifeer',
    age: '20yrs',
    location: 'Savar, Dhaka',
    image: require('../../../../assets/image/welcome_bg.jpg'),
    badges: ['Social'],
    views: '12',
    meta: 'Want to meet someone new 💝',
  },
  {
    id: 'p2',
    type: 'post',
    name: '@sofia',
    age: '22yrs',
    location: 'Uptown',
    image: require('../../../../assets/image/welcome_bg.jpg'),
    badges: ['Social'],
    views: '8',
    meta: 'Want to meet · English',
  },
];

export default function HomeScreenSocial({ navigation }) {
  const CARD_WIDTH = Math.round(width * 0.76);

  const [isOnline, setIsOnline] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    if (item.type === 'create') {
      return (
        <View style={[styles.emptyCard, { width: CARD_WIDTH }]}>
          <View style={styles.emptyIconWrap}>
            
            <Text style={styles.emptyIcon}>+</Text>

          </View>
          <Text style={styles.emptyText}>You don't create any post</Text>
          <PrimaryButton
            title="+ Create Post"
            onPress={() => navigation.navigate('CreatePost')}
            style={[styles.createPost]}
            textStyle={styles.createPostText}
          />
        </View>
      );
    }

    return (
      <View style={[styles.postCard, { width: CARD_WIDTH }]}>
        <Image source={item.image} style={styles.postImage} resizeMode="cover" />
        
        <View style={styles.badgeRow}>
          <View style={styles.socialBadge}>
            <Text style={styles.socialText}>Social</Text>
          </View>
          <View style={styles.viewsBadge}>
            <Ionicons name="eye-outline" size={12} color="#fff" />
            <Text style={styles.viewsText}>{item.views}</Text>
          </View>
        </View>

        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="edit" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialCommunityIcons name="instagram" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="delete-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.postMeta}>
          <Text style={styles.postText}>{item.meta}</Text>
          <TouchableOpacity>
             <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleConfirmToggle = () => {
    setIsOnline((prev) => !prev);
    setModalVisible(false);
  };

  return (
    // edges={['top']} ensures it only applies padding to the top of the screen
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.topSection}>
          <View style={styles.header}>
            <View>
              <Text style={styles.logo}>Geoconnect</Text>
              <Text style={styles.subtitle}>Welcome to Social account!</Text>
            </View>

            <View style={styles.headerBadges}>
              <View style={styles.coinBadge}>
                <Image
                  source={require('../../../../assets/Icon/coin.png')}
                  style={{ width: 14, height: 14, marginRight: 4 }}
                />
                <Text style={styles.coinText}>1200</Text>
                <MaterialIcons name="chevron-right" size={16} color="#6C6C6C" />
              </View>

              <TouchableOpacity
                style={styles.onlineBadge}
                activeOpacity={0.8}
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

          {/* Profile Neon Card */}
          <View style={styles.profileWrapper}>
            <View style={styles.profileCard}>
              <View style={styles.avatarBorder}>
                <Image
                  source={require('../../../../assets/image/welcome_bg.jpg')}
                  style={styles.avatar}
                />
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.name}>
                  @jenifeer <Text style={styles.age}>20yrs</Text>
                </Text>
                <View style={styles.locationRow}>
                  <Text style={styles.location}>Savar, Dhaka</Text>
                  <MaterialCommunityIcons name="target" size={14} color="#2D2D2D" style={{marginLeft: 4}} />
                </View>
              </View>

              <TouchableOpacity 
                style={styles.businessBtn}
                onPress={() => navigation.navigate('HomeScreenBusiness')}
              >
                <Image source={require('../../../../assets/Icon/redo.png')} 
                       style={{ width: 16, height: 16, }} />
                <Text style={styles.businessText}>Business</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Black Content Panel */}
        <View style={styles.contentPanel}>
          <View style={styles.statusHeader}>
            <View style={styles.statusLeft}>
              <Text style={styles.statusTitle}>Status</Text>
              <TouchableOpacity 
              style={styles.plusBtn}
              onPress={() => navigation.navigate('CreatePost')}
              >
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.statusTabs}>
              <Text style={styles.tabActive}>Post</Text>
              <Text style={styles.tab}>Reels</Text>
              <TouchableOpacity 
              onPress={() => navigation.navigate('Filter')}
              >
                <MaterialCommunityIcons name="tune-variant" size={20} color="#fff" style={{ marginLeft: 10, borderWidth: 2, borderColor: '#3E3E3E', borderRadius: 50, padding: 6 }} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={POSTS}
            keyExtractor={(i) => i.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10 }}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={CARD_WIDTH + 16}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            renderItem={renderItem}
          />

          <View style={styles.footerActions}>
            <TouchableOpacity
              style={styles.scanBtn}
              onPress={() => navigation.getParent()?.navigate('FriendScan')}
            >
              <MaterialIcons name="track-changes" size={20} color={DARK} style={{ marginRight: 8 }} />
              <Text style={styles.scanText}>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.connectBtn}
              onPress={() => navigation.navigate('ShakeConnect')}
            >
              <Text style={styles.connectText}>Shake to Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        statusBarTranslucent
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setModalVisible(false)}>
          <BlurView intensity={35} tint="dark" style={StyleSheet.absoluteFill} />
          <View style={styles.modalDim} />
        </Pressable>
        <View style={styles.modalSheet}>
          <Text style={styles.modalTitle}>Are you sure!</Text>
          <Text style={styles.modalSubtitle}>
            {isOnline ? `You will not be able to View status & Reels ${'\n'} And you will not be able to connect to this person.` : `You will go online...`}
          </Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalBtnNo} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalBtnNoText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalBtnYes} onPress={handleConfirmToggle}>
              <Text style={styles.modalBtnYesText}>{isOnline ? 'Yes' : 'Go Online'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  topSection: { paddingHorizontal: 16, paddingTop: 10, zIndex: 10 },
  
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 },
  logo: {
     color: DARK,
      fontSize: 24,
      fontWeight: '800',
      fontFamily:'Alkatra',
   },
  subtitle: { color: '#6C6C6C', fontSize: 12 },
  headerBadges: { flexDirection: 'row', alignItems: 'center' },
  coinBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FDF7E7', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6, marginRight: 8 },
  coinText: { color: DARK, fontSize: 13, fontWeight: '700' },
  onlineBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EAF9D1', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6 },
  onlineText: { color: DARK, fontSize: 12, fontWeight: '600' ,marginLeft: 4},

  profileWrapper: { marginBottom: -35, zIndex: 20 },
  profileCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: NEON, borderRadius: 35, padding: 15, elevation: 5 },
  avatarBorder: { borderWidth: 2, borderColor: '#EB6A8C', borderRadius: 50, padding: 0 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  profileInfo: { flex: 1, marginLeft: 12 },
  name: { color: DARK, fontWeight: '800', fontSize: 18 },
  age: { fontWeight: '400', fontSize: 16 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  location: { color: '#2D2D2D', fontSize: 12 },
  businessBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: DARK, borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10 },
  businessText: { color: '#FFFFFF', fontSize: 10, fontWeight: '700', marginLeft: 3 },

  contentPanel: { flex: 1, backgroundColor: DARK, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingTop: 50, paddingBottom: 20 },
  statusHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15 },
  statusLeft: { flexDirection: 'row', alignItems: 'center' },
  statusTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '700', marginRight: 10 },
  plusBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2A2A2A', alignItems: 'center', justifyContent: 'center' },
  plusText: { color: '#fff', fontSize: 20 },
  statusTabs: { flexDirection: 'row', alignItems: 'center' },
  tabActive: { color: NEON, fontSize: 14, fontWeight: '700', borderBottomWidth: 2, borderBottomColor: NEON, paddingBottom: 4, marginRight: 15 },
  tab: { color: '#8E8E8E', fontSize: 14, marginRight: 15 },

  postCard: { borderRadius: 30, overflow: 'hidden', backgroundColor: '#1A1A1A', height: height * 0.45, position: 'relative' },
  postImage: { width: '100%', height: '100%' },
  badgeRow: { position: 'absolute', top: 15, left: 15, flexDirection: 'row', zIndex: 5 },
  socialBadge: { backgroundColor: '#1A8BFF', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5, marginRight: 8 },
  socialText: { color: '#fff', fontWeight: '700', fontSize: 11 },
  viewsBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5 },
  viewsText: { color: '#fff', fontSize: 11, marginLeft: 4 },
  postActions: { position: 'absolute', right: 15, top: 15, zIndex: 10 },
  actionIcon: { width: 42, height: 42, borderRadius: 21, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center', marginBottom: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  postMeta: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  postText: { color: '#FFFFFF', fontSize: 15, fontWeight: '500' },

  emptyCard: { backgroundColor: '#1A1A1A', borderRadius: 30, alignItems: 'center', justifyContent: 'center', height: height * 0.45 },
  emptyIconWrap: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#2A2A2A', alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  emptyIcon: { color: NEON, fontSize: 30, fontWeight: 'bold' },
  emptyText: { color: '#888', marginBottom: 20 },
  createPost: { backgroundColor: NEON, paddingHorizontal: 20, borderRadius: 15, height: 45 },
  createPostText: { color: DARK, fontWeight: 'bold' },

  footerActions: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 20, paddingBottom: 10 },
  scanBtn: { flex: 1, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, height: 55, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  scanText: { color: DARK, fontWeight: '800', fontSize: 16 },
  connectBtn: { flex: 1.5, backgroundColor: NEON, borderRadius: 20, height: 55, alignItems: 'center', justifyContent: 'center' },
  connectText: { color: DARK, fontWeight: '800', fontSize: 16 },

  modalDim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  modalSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: Platform.OS === 'android' ? 24 : 30,
  },
  modalTitle: { fontSize: 22, fontWeight: '800', textAlign: 'center', marginBottom: 10 },
  modalSubtitle: { color: '#666', textAlign: 'center', marginBottom: 20 },
  modalButtons: { flexDirection: 'row' },
  modalBtnNo: { flex: 1, height: 50, borderRadius: 15, borderWidth: 1, borderColor: '#DDD', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  modalBtnNoText: { fontWeight: '700' },
  modalBtnYes: { flex: 1, height: 50, borderRadius: 15, backgroundColor: NEON, alignItems: 'center', justifyContent: 'center' },
  modalBtnYesText: { fontWeight: '800' },
});
