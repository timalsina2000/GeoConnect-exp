import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../components/PrimaryButton';
import { MaterialIcons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topSection}>
          {/* Top header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.logo}>Geoconnect</Text>
              <Text style={styles.subtitle}>Welcome to Social account!</Text>
            </View>

            <View style={styles.headerBadges}>
              <View style={styles.coinBadge}>
                <Text style={styles.coinText}> <Image
                  // replace with user's avatar
                  source={require('../../../assets/Icon/coin.png')}
                  style={{ width: 15, height: 15, marginRight: 4 }}
                />   1200</Text>

              </View>

              <View style={styles.onlineBadge}>
                <View style={styles.onlineDot} />
                <Text style={styles.onlineText}>Online</Text>
              </View>
            </View>
          </View>

          {/* Profile neon card that overlaps contentPanel */}
          <View style={styles.profileWrapper}>
            <View style={styles.profileCard}>
              <Image
                // replace with user's avatar
                source={require('../../../assets/image/welcome_bg.jpg')}
                style={styles.avatar}
              />

              <View style={styles.profileInfo}>
                <Text style={styles.name}>@jesmin <Text style={styles.age}>20yrs</Text></Text>
                <Text style={styles.location}>Savar, Dhaka</Text>
              </View>

              <TouchableOpacity style={styles.businessTag}>
                <Text style={styles.businessText}>Business</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Main black panel */}
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
            </View>
          </View>

          {/* Status cards row */}
          <View style={styles.statusRow}>
            {/* Empty large card */}
            <View style={styles.emptyCard}>
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

            {/* Friend card */}
            <View style={styles.friendCard}>
              <Image
                source={require('../../../assets/image/welcome_bg.jpg')}
                style={styles.friendImage}
                resizeMode="cover"
              />

              <View style={styles.socialBadge}>
                <Text style={styles.socialText}>Social</Text>
              </View>

              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>@sofia 22yrs</Text>
                <Text style={styles.friendMeta}>Want to meet · English</Text>
              </View>
            </View>
          </View>

          {/* Bottom actions */}
          <View style={styles.actions}>
            <TouchableOpacity style={[styles.scanBtn]}>

              <Text style={styles.scanText}>
                <Image
                  source={require('../../../assets/Icon/scan.png')}
                  style={{ width: 18, height: 18, }}

                />  Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.connectBtn]}>
              <Text style={styles.connectText}>Shake to Connect</Text>
            </TouchableOpacity>
          </View>
        </View>



      </ScrollView>
    </SafeAreaView>
  );
}

const NEON = '#B9F54A'; // profile card green
const DARK = '#0B0B0B';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 12,
  },
  topSection: {
    paddingHorizontal: 16,
    zIndex: 10,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    color: DARK,
    fontWeight: '800',
    fontSize: 20,
  },
  subtitle: {
    color: '#6C6C6C',
    fontSize: 12,
    marginTop: 3,
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
    marginRight: 6,
  },


  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF9D1',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#37C871',
    marginRight: 6,
  },
  onlineText: {
    color: DARK,
    fontSize: 12,
    fontWeight: '600',
  },

  /* Profile neon card (overlapping) */
  profileWrapper: {

    // create space so the profile overlaps the contentPanel below
    marginBottom: -30,
    zIndex: 5,
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
    marginHorizontal: 0,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 140, // space for buttons

    zIndex: 1,
    marginTop: 24,
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

  /* Row of status cards */
  statusRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  emptyCard: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    marginRight: 12,
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

  /* friend card on the right */
  friendCard: {

    width: Math.min(140, width * 0.36),
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#151515',
    minHeight: 320,
  },
  friendImage: {
    width: '100%',
    height: 220,
    marginBottom: 10,
  },
  socialBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
    marginHorizontal: 2,
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
});
