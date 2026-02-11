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
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const DARK = '#0B0B0B';
const BLUE = '#4D6CFF';
const LIGHT_BG = '#F7F7F7';
const TEXT_GRAY = '#7E7E7E';
const NEON = '#C2E96A';

const FRIENDS = [
  { id: '1', name: 'Nora', handle: '@nora', age: '35yrs', country: 'USA', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '2', name: 'Nora', handle: '@nora', age: '35yrs', country: 'USA', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '3', name: 'Nora', handle: '@nora', age: '35yrs', country: 'USA', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },

];

export default function BlockList({ navigation }) {
  const renderFriend = ({ item }) => (
    <View style={styles.friendCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.handleText}>{item.handle} <Text style={styles.ageText}>{item.age}</Text></Text>
        <View style={styles.countryRow}>
          <Image source={{ uri: 'https://flagcdn.com/w20/us.png' }} style={styles.flag} />
          <Text style={styles.countryText}>{item.country}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.unblockBtn}>
          <Text style={styles.btnText}>Unblock</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.giftBtn}>
          <Feather name="gift" size={14} color="#FFF" />
          <Text style={styles.btnText}>Gift</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moreBtn}>
          <MaterialCommunityIcons name="dots-vertical" size={20} color={TEXT_GRAY} />
        </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Block List</Text>
        <TouchableOpacity style={styles.headerIconBtn}>
          <MaterialCommunityIcons name="tune-variant" size={22} color={DARK} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search" 
          placeholderTextColor="#9CA3AF"
        />
        <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
      </View>

      {/* Filter Summary */}
      <View style={styles.filterSummary}>
        <Text style={styles.resultsText}>3 People found</Text>
        <View style={styles.filterIcons}>
           <MaterialCommunityIcons name="view-grid" size={22} color="#D1D1D1" />
           <MaterialCommunityIcons name="view-list" size={22} color={NEON} style={{ marginHorizontal: 10 }} />
           <MaterialCommunityIcons name="map-outline" size={22} color="#D1D1D1" />
        </View>
      </View>

      <FlatList
        data={FRIENDS}
        renderItem={renderFriend}
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: LIGHT_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: DARK,
  },
  searchContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: LIGHT_BG,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: DARK,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  filterSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  resultsText: {
    color: DARK,
    fontWeight: '600',
  },
  filterIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    // Shadow for iOS/Android
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  handleText: {
    fontSize: 13,
    color: TEXT_GRAY,
  },
  ageText: {
    fontSize: 13,
    color: TEXT_GRAY,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  flag: {
    width: 16,
    height: 12,
    borderRadius: 2,
    marginRight: 4,
  },
  countryText: {
    fontSize: 11,
    color: TEXT_GRAY,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unblockBtn: {
    backgroundColor: NEON,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 6,
  },
  giftBtn: {
    backgroundColor: DARK,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 4,
  },
  btnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  moreBtn: {
    padding: 4,
  },
});