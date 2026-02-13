// ScanScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Platform,
  StatusBar,
  Modal,
  Pressable,
  Switch,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');
const NEON = '#B9F54A';
const PINK= '#E95561';
const DARK = '#0B0B0B';
const BORDER = '#EDEDED';

const PEOPLE = [
  {
    id: '1',
    name: '@rosser',
    age: '35yrs',
    subtitle: 'Single | Looking for short relationship',
    avatar: require('../../../../../assets/image/welcome_bg.jpg'),
    distance: '400m',
    verified: true,
  },
  {
    id: '2',
    name: '@jenifeer',
    age: '35yrs',
    subtitle: 'Single | Looking for short relationship',
    avatar: require('../../../../../assets/image/welcome_bg.jpg'),
    distance: '400m',
    verified: true,
  },
  {
    id: '3',
    name: '@sofia',
    age: '35yrs',
    subtitle: 'Recruiter | Helping healthcare professional finance consultant',
    avatar: require('../../../../../assets/image/welcome_bg.jpg'),
    distance: '400m',
    verified: true,
  },
  {
    id: '4',
    name: '@elizabeth',
    age: '35yrs',
    subtitle: 'Recruiter | Helping healthcare professional finance consultant',
    avatar: require('../../../../../assets/image/welcome_bg.jpg'),
    distance: '400m',
    verified: true,
  },
  {
    id: '5',
    name: '@emily',
    age: '35yrs',
    subtitle: 'Recruiter | Helping healthcare professional finance consultant',
    avatar: require('../../../../../assets/image/welcome_bg.jpg'),
    distance: '400m',
    verified: true,
  },
];

export default function BusinessFriendScan({ navigation }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [gender, setGender] = useState('Women');
  const [ageRange, setAgeRange] = useState('25-28');

  const AGE_RANGES = ['20-25', '25-28', '30-35', '36-40', '40-45'];

  const renderItem = ({ item }) => {
    return (
      // Entire row navigates to ViewProfile with the item as 'profile' param
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('ViewProfile', { profile: item })}
      >
        <View style={styles.personRow}>
          <View style={styles.leftArea}>
            <Image source={item.avatar} style={styles.avatar} />

            <View style={styles.info}>
              <View style={styles.nameRow}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.ageText}>{item.age}</Text>
                {item.verified && (
                  <View style={styles.verifiedWrap}>
                    <Ionicons name="checkmark-circle" size={16} color="#3DA9FF" />
                  </View>
                )}
              </View>

              <Text style={styles.subtitleText} numberOfLines={1}>
                {item.subtitle}
              </Text>

              <View style={styles.actionsRow}>
                <TouchableOpacity
                  style={styles.connectBtn}
                  onPress={(e) => {
                    e.stopPropagation && e.stopPropagation();
                    console.log('Connect to', item.name);
                  }}
                >
                  <Ionicons name="heart-outline" size={16} color={BORDER} style={{ marginRight: 8 }} />
                  <Text style={styles.connectText}>Connect</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.messageBtn}
                  onPress={(e) => {
                    e.stopPropagation && e.stopPropagation();
                    console.log('Message', item.name);
                  }}
                >
                  <Ionicons name="chatbubble-outline" size={16} color="#fff" style={{ marginRight: 8 }} />
                  <Text style={styles.messageText}>Message</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.rightArea}>
            <View style={styles.distanceRow}>
              <MaterialCommunityIcons name="map-marker-radius" size={12} color="#7D7D7D"  />
              
              <Text style={styles.distanceText}>{item.distance}</Text>
              
            </View>

            <TouchableOpacity
              style={styles.removeBtn}
              onPress={(e) => {
                e.stopPropagation && e.stopPropagation();
                console.log('Remove', item.id);
              }}
            >
              <MaterialIcons name="close" size={20} color="#9B9B9B" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.safe,
        // keep status bar gap on Android
        { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => (navigation && navigation.goBack ? navigation.goBack() : null)}
          >
            <Ionicons name="arrow-back" size={20} color={DARK} />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.title}> Near by People</Text>
            
          </View>

          <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterVisible(true)}>
            <MaterialCommunityIcons name="tune-variant" size={20} color={DARK} />
          </TouchableOpacity>
        </View>

        {/* Count */}
        <View style={styles.countRow}>
          <Text style={styles.countText}>25 People found</Text>
        </View>

        {/* List */}
        <FlatList
          data={PEOPLE}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />

        {/* Shout All button */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.shoutBtn} onPress={() => console.log('shout all')}>
            <Text style={styles.shoutText}>Shout All</Text>
          </TouchableOpacity>
          <Text style={styles.shoutCaption}>Send everyone a message</Text>
        </View>
      </View>

      {/* Filter Bottom Sheet */}
      <Modal
        visible={filterVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setFilterVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setFilterVisible(false)}>
          <View />
          {/* adding the blur view  */}
           <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
        </Pressable>

        <View style={styles.sheet}>
          <View style={styles.sheetHandle} />

          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Filter</Text>
            <TouchableOpacity
              style={styles.sheetClose}
              onPress={() => setFilterVisible(false)}
            >
              <Ionicons name="close" size={18} color={DARK} />
            </TouchableOpacity>
          </View>

          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Profile Types</Text>
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Verified User</Text>
              <Switch
                value={verifiedOnly}
                onValueChange={setVerifiedOnly}
                trackColor={{ false: '#E7E7E7', true: '#CFF47A' }}
                thumbColor={verifiedOnly ? NEON : '#FFFFFF'}
              />
            </View>
          </View>

          <Text style={styles.sectionLabel}>Gender</Text>
          <View style={styles.pillRow}>
            {['Men', 'Women'].map((g) => {
              const active = gender === g;
              return (
                <TouchableOpacity
                  key={g}
                  style={[styles.pill, active && styles.pillActive]}
                  onPress={() => setGender(g)}
                >
                  <Text style={[styles.pillText, active && styles.pillTextActive]}>
                    {g}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionLabel}>Age</Text>
          <View style={styles.pillRow}>
            {AGE_RANGES.map((range) => {
              const active = ageRange === range;
              return (
                <TouchableOpacity
                  key={range}
                  style={[styles.pill, active && styles.pillActive]}
                  onPress={() => setAgeRange(range)}
                >
                  <Text style={[styles.pillText, active && styles.pillTextActive]}>
                    {range}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.sheetActions}>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => {
                setVerifiedOnly(false);
                setGender('Women');
                setAgeRange('25-28');
              }}
            >
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.applyBtn}
              onPress={() => setFilterVisible(false)}
            >
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const AVATAR = 56;
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 16,
    color: DARK,
  },
  subtitle: {
    fontSize: 12,
    color: '#9B9B9B',
    marginTop: 2,
  },
  filterBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
      marginTop: -100,
    
  },
  sheetHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    marginBottom: 10,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: DARK,
  },
  sheetClose: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 12,
    color: '#7D7D7D',
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleLabel: {
    fontSize: 12,
    color: DARK,
    marginRight: 8,
    fontWeight: '600',
  },
  sectionLabel: {
    fontSize: 12,
    color: '#7D7D7D',
    marginBottom: 8,
    fontWeight: '600',
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  pill: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  pillActive: {
    backgroundColor: DARK,
    borderColor: DARK,
  },
  pillText: {
    fontSize: 12,
    color: DARK,
    fontWeight: '600',
  },
  pillTextActive: {
    color: '#FFFFFF',
  },
  sheetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  resetBtn: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  resetText: {
    fontWeight: '700',
    color: DARK,
  },
  applyBtn: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDEB6D',
  },
  applyText: {
    fontWeight: '800',
    color: DARK,
  },

  countRow: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  countText: {
    color: '#7D7D7D',
    fontSize: 13,
  },

  personRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },

  leftArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    borderWidth: 3,
    borderColor: '#fff',
    marginRight: 12,
    elevation: 3,
  },
  info: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontWeight: '800',
    color: DARK,
    fontSize: 14,
    marginRight: 8,
  },
  ageText: {
    fontSize: 13,
    color: '#8E8E8E',
    marginRight: 6,
  },
  verifiedWrap: {
    marginLeft: 6,
  },
  subtitleText: {
    color: '#7E7E7E',
    fontSize: 12,
    marginTop: 4,
    width: width * 0.45,
  },

  actionsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  connectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PINK,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  connectText: {
    color: BORDER,
    fontWeight: '800',
    fontSize: 13,
  },

  messageBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3DA9FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  messageText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  rightArea: {
    width: 72,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 8,
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  distanceText: {
    fontSize: 10,
    color: '#9B9B9B',
    marginLeft: 4,
  },
  removeBtn: {
    padding: 6,
    top:3,
    
  },

  separator: {
    height: 1,
    backgroundColor: BORDER,
    marginVertical: 8,
  },
  listContent: {
    paddingHorizontal: 14,
    paddingBottom: 150,
  },

  bottomBar: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 24,
    alignItems: 'center',
  },
  shoutBtn: {
    width: '100%',
    backgroundColor: PINK,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  shoutText: {
    color: BORDER,
    fontWeight: '800',
    fontSize: 16,
  },
  shoutCaption: {
    color: '#9B9B9B',
    fontSize: 12,
    marginTop: 6,
  },
});
