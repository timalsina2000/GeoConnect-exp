// HomeScreen.js
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
import PrimaryButton from '../../../components/PrimaryButton';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';


const { width, height } = Dimensions.get('window');

const NEON = '#B9F54A'; // profile card green
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
    meta: 'Want to meet · English',
  },
];

export default function HomeScreen({ navigation }) {
  const CARD_WIDTH = Math.round(width * 0.72);

  // state for online/offline & modal visibility
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
            style={[styles.createPost]}
            textStyle={styles.createPostText}
          />
        </View>
      );
    }

    return (
      <View style={[styles.postCard, { width: CARD_WIDTH }]}>
        <Image source={item.image} style={styles.postImage} resizeMode="cover" />
        {/* overlay vertical actions */}
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="edit" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="videocam" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <MaterialIcons name="delete" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* badge */}
        <View style={styles.socialBadge}>
          <Text style={styles.socialText}>Social</Text>
        </View>

        {/* bottom meta */}
        <View style={styles.postMeta}>
          <Text style={styles.postText}>{item.meta}</Text>
        </View>
      </View>
    );
  };

  // confirm toggle
  const handleConfirmToggle = () => {
    setIsOnline((prev) => !prev);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Top white header */}
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
                  style={{ width: 15, height: 15, marginRight: 6 }}
                />
                <Text style={styles.coinText}>1200</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={12}
                  color="#6C6C6C"
                  style={{ marginLeft: 4 }}
                />
              </View>

              {/* make badge touchable and reflect online/offline */}
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

          {/* Profile neon card that overlaps contentPanel */}
          <View style={styles.profileWrapper}>
            <View style={styles.profileCard}>
              <Image
                source={require('../../../../assets/image/welcome_bg.jpg')}
                style={styles.avatar}
              />

              <View style={styles.profileInfo}>
                <Text style={styles.name}>
                  @jesmin <Text style={styles.age}>20yrs</Text>
                </Text>
                <Text style={styles.location}>Savar, Dhaka</Text>
              </View>

              <TouchableOpacity style={styles.businessTag}
                onPress={() => navigation.navigate('HomeScreenSocial')}
              >
               
                <Text style={styles.businessText}> 
                   <Image source={require('../../../../assets/Icon/redo.png')} 
                style={{ width: 12, height: 12, }} />  Business</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Black content panel */}
        <View style={styles.contentPanel}>
          {/* Status header */}
          <View style={styles.statusHeader}>
            <View style={styles.statusLeft}>
              <Text style={styles.statusTitle}>Status</Text>

              <View style={styles.plusCircle}>
                <Text style={styles.plusText}>+</Text>
              </View>
            </View>

            <View style={styles.statusTabs}>
              <Text style={styles.tabActive}>Post</Text>
              <Text style={styles.tab}>Reels</Text>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => navigation.navigate('Filter')}
              >
                <MaterialIcons
                  name="tune"
                  size={20}
                  color="#8E8E8E"
                  style={{ marginLeft: 6 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Horizontal slider for posts */}
          <View style={styles.sliderWrap}>
            <FlatList
              data={POSTS}
              keyExtractor={(i) => i.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 8 }}
              snapToAlignment="start"
              decelerationRate="fast"
              snapToInterval={Math.round(width * 0.72 + 12)} // card width + margin
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              renderItem={renderItem}
            />
          </View>

          {/* bottom actions pinned inside content panel */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.scanBtn]}
              onPress={() => navigation.getParent()?.navigate('FriendScan')}
            >
              <Image
                source={require('../../../../assets/Icon/scan.png')}
                style={{ width: 18, height: 18, marginRight: 8 }}
              />
              <Text style={styles.scanText}>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.connectBtn]}>
              <Text style={styles.connectText}>Shake to Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal bottom-sheet confirmation with blurred background */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Pressable + BlurView that covers whole screen; tapping it closes the modal */}
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setModalVisible(false)}>
          <BlurView intensity={35} tint="dark" style={StyleSheet.absoluteFill} />
        </Pressable>

        {/* bottom sheet (placed after the overlay so it's on top) */}
        <View style={styles.modalSheet}>
          <Text style={styles.modalTitle}>Are you sure!</Text>
          <Text style={styles.modalSubtitle}>
            {isOnline
              ? `You will turn offline. You will not be able to view status & reels and you will not be able to connect to people while offline.`
              : `You will go online and be visible to others.`}
          </Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalBtnNo]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalBtnNoText}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalBtnYes]}
              onPress={handleConfirmToggle}
            >
              <Text style={styles.modalBtnYesText}>
                {isOnline ? 'Yes' : 'Go Online'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 24,
  },

  topSection: {
    paddingHorizontal: 16,
    paddingTop: 10,
    zIndex: 10,
    backgroundColor: '#FFFFFF',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingRight: 8,
  },
  logo: {
    color: DARK,
    fontWeight: '800',
    fontSize: 22,
    fontFamily: 'Alkatra-Bold',
  },
  subtitle: {
    color: '#6C6C6C',
    fontSize: 12,
    marginTop: 0,
  },

  headerBadges: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
  },
  coinText: {
    color: '#141414',
    fontSize: 12,
    fontWeight: '700',
  },

  // online badge is now TouchableOpacity
  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF9D1',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  onlineDotIcon: {
    marginRight: 4,
  },
  onlineText: {
    color: DARK,
    fontSize: 12,
    fontWeight: '600',
  },

  /* Profile neon card (overlapping) */
  profileWrapper: {
    marginBottom: -45,
    zIndex: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NEON,
    borderRadius: 20,
    padding: 12,
    // shadow
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: '#222',
    borderColor: '#EC8144',
    borderWidth: 1,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    color: '#0B0B0B',
    fontWeight: '800',
    fontSize: 16,
  },
  age: {
    fontWeight: '700',
    color: '#0B0B0B',
    fontSize: 14,
  },
  location: {
    color: '#2D2D2D',
    fontSize: 12,
    marginTop: 4,
  },
  businessTag: {
   
    backgroundColor: DARK,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  businessText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  /* content panel (black rounded area) */
  contentPanel: {
    flex: 1,
    backgroundColor: DARK,
    marginTop: 24,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 140,
    zIndex: 1,
    minHeight: height * 0.6,
  },

  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  plusCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: NEON,
    fontSize: 16,
    fontWeight: '700',
  },

  statusTabs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabActive: {
    color: NEON,
    fontSize: 13,
    fontWeight: '700',
    borderBottomWidth: 2,
    borderBottomColor: NEON,
    paddingBottom: 4,
    marginRight: 14,
  },
  tab: {
    color: '#8E8E8E',
    fontSize: 13,
  },

  /* Slider */
  sliderWrap: {
    marginTop: 6,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  /* empty create card */
  emptyCard: {
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    minHeight: 320,
  },
  emptyIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  emptyIcon: {
    color: NEON,
    fontSize: 26,
    fontWeight: '800',
  },
  emptyText: {
    color: '#D0D0D0',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 14,
  },

  createPost: {
    height: 36,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: NEON,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createPostText: {
    color: DARK,
    fontWeight: '700',
  },

  /* regular post card */
  postCard: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#151515',
    minHeight: 320,
  },
  postImage: {
    width: '100%',
    height: 220,
  },
  postActions: {
    position: 'absolute',
    right: 12,
    top: 40,
    zIndex: 5,
    alignItems: 'center',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  socialBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#4FA3FF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 3,
  },
  socialText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  postMeta: {
    padding: 12,
  },
  postText: {
    color: '#FFFFFF',
    fontSize: 14,
  },

  /* small friend card */
  friendCard: {
    marginLeft: 12,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#151515',
    minHeight: 420,
  },
  friendImage: {
    width: '100%',
    height: 220,
  },
  friendBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#4FA3FF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 3,
  },
  friendBadgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 11,
  },
  friendInfo: {
    padding: 10,
  },
  friendName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 6,
  },
  friendMeta: {
    color: '#9B9B9B',
    fontSize: 11,
  },

  /* bottom actions */
  actions: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  scanBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
  scanText: {
    color: '#0B0B0B',
    fontWeight: '700',
    fontSize: 14,
  },

  connectBtn: {
    flex: 1.3,
    backgroundColor: NEON,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectText: {
    color: DARK,
    fontWeight: '800',
    fontSize: 15,
  },

  /* Modal / Blur styles */
  modalSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 18,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtitle: {
    color: '#6B6B6B',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 18,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtnNo: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#fff',
  },
  modalBtnNoText: {
    color: '#111111',
    fontWeight: '700',
  },
  modalBtnYes: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: NEON,
  },
  modalBtnYesText: {
    color: DARK,
    fontWeight: '800',
  },
});
