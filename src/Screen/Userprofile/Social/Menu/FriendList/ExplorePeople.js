import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';

const DARK = '#0B0B0B';
const BLUE = '#4D6CFF';
const PINK = '#E95561';
const GREEN = '#C2E96A';
const LIGHT_BG = '#F7F7F7';
const TEXT_GRAY = '#7E7E7E';

const WORKERS = [
  { id: '1', handle: '@rosser', age: '35yrs', role: 'Digital Marketer', distance: '400m', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', isConnected: false },
  { id: '2', handle: '@jenifeer', age: '35yrs', role: 'Graphic Designer', distance: '400m', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', isConnected: false },
  { id: '3', handle: '@sofia', age: '35yrs', role: 'Graphic Designer', distance: '400m', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', isConnected: false },
  { id: '4', handle: '@emily', age: '35yrs', role: 'Graphic Designer', distance: '400m', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', isConnected: true },
  { id: '5', handle: '@elizabeth', age: '35yrs', role: 'Graphic Designer', distance: '400m', avatar: 'https://randomuser.me/api/portraits/women/5.jpg', isConnected: false },
];

export default function ExplorePeople({ navigation }) {
  const getDisplayName = (handle) => String(handle || '').replace(/^@/, '');

  const renderWorker = ({ item }) => (
    <View style={styles.workerCard}>
      {/* Avatar with Verified Badge */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.verifiedBadge}>
          
        </View>
      </View>

      <View style={styles.contentContainer}>
        {/* Name and Role Section */}
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.handleText}>{item.handle} <Text style={styles.ageText}>{item.age}</Text></Text>
            <Text style={styles.roleText}>{item.role}</Text>
          </View>
          
          {/* Distance and Close Icon on the Right */}
          <View style={styles.rightActions}>
             <View style={styles.distanceRow}>
                <MaterialCommunityIcons name="map-marker" size={14} color={TEXT_GRAY} />
                <Text style={styles.distanceText}>{item.distance}</Text>
             </View>
             <TouchableOpacity>
                <Ionicons name="close" size={20} color={TEXT_GRAY} style={{marginLeft: 10}} />
             </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons Row */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: item.isConnected ? GREEN : PINK }]}>
             <Ionicons name="heart-outline" size={18} color={LIGHT_BG} />
            <Text style={styles.btnText}>Connect</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: BLUE }]}
            onPress={() =>
              navigation.navigate('ChatDetail', {
                name: getDisplayName(item.handle),
                avatar: item.avatar,
                status: `${item.role} - ${item.distance} away`,
              })
            }
          >
            <MaterialCommunityIcons name="message-text-outline" size={16} color="#FFF" />
            <Text style={[styles.btnText, { color: '#FFF' }]}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: DARK }]}>
            <Feather name="gift" size={14} color="#FFF" />
            <Text style={[styles.btnText, { color: '#FFF' }]}>Gift</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn} onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={DARK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Worker</Text>
        <TouchableOpacity style={styles.headerIconBtn}>
          <MaterialCommunityIcons name="tune-variant" size={22} color={DARK} />
        </TouchableOpacity>
      </View>

      {/* Filter Summary */}
      <View style={styles.filterSummary}>
        <Text style={styles.resultsText}>25 people found</Text>
        <View style={styles.filterIcons}>
           <MaterialCommunityIcons name="view-grid" size={22} color="#D1D1D1" />
           <MaterialCommunityIcons name="view-list" size={22} color={PINK} style={{ marginHorizontal: 10 }} />
           <MaterialCommunityIcons name="map-outline" size={22} color="#D1D1D1" />
        </View>
      </View>

      <FlatList
        data={WORKERS}
        renderItem={renderWorker}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerIconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: LIGHT_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: DARK,
  },
  filterSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 15,
  },
  resultsText: {
    color: DARK,
    fontWeight: '600',
    fontSize: 14,
  },
  filterIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  workerCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: PINK,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  handleText: {
    fontSize: 18,
    fontWeight: '900',
    color: DARK,
  },
  ageText: {
    fontSize: 16,
    color: DARK,
    fontWeight: '500',
  },
  roleText: {
    fontSize: 13,
    color: TEXT_GRAY,
    marginTop: 2,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 13,
    color: TEXT_GRAY,
    marginLeft: 3,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
    color: LIGHT_BG,
  },
});
