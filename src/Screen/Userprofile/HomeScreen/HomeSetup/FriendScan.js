// ScanScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const NEON = '#B9F54A';
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

export default function FriendScan({ navigation }) {
  const renderItem = ({ item }) => {
    return (
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
              <TouchableOpacity style={styles.connectBtn}>
                <Ionicons name="person-add" size={16} color={DARK} style={{ marginRight: 8 }} />
                <Text style={styles.connectText}>Connect</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.messageBtn}>
                <Ionicons name="chatbubble" size={16} color="#fff" style={{ marginRight: 8 }} />
                <Text style={styles.messageText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.rightArea}>
          <View style={styles.distanceRow}>
            <View style={styles.distanceDot} />
            <Text style={styles.distanceText}>{item.distance}</Text>
          </View>

          <TouchableOpacity style={styles.removeBtn}>
            <MaterialIcons name="close" size={20} color="#9B9B9B" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
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
            <Text style={styles.title}>People near by you</Text>
            <Text style={styles.subtitle}>Savar,Dhaka</Text>
          </View>

          <TouchableOpacity style={styles.filterBtn} onPress={() => console.log('open filter')}>
            <Ionicons name="filter" size={20} color={DARK} />
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
        />

        {/* Shout All button */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.shoutBtn} onPress={() => console.log('shout all')}>
            <Text style={styles.shoutText}>Shout All</Text>
          </TouchableOpacity>
          <Text style={styles.shoutCaption}>Send everyone a message</Text>
        </View>
      </View>
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
    elevation: 2,
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
    elevation: 2,
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
    alignItems: 'flex-start',
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
    // subtle shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
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
    width: width - 180, // keep subtitle truncated like design
  },

  actionsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  connectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NEON,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  connectText: {
    color: DARK,
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
  distanceDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#9B9B9B',
    marginRight: 6,
  },
  distanceText: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  removeBtn: {
    padding: 6,
  },

  separator: {
    height: 1,
    backgroundColor: BORDER,
    marginVertical: 8,
  },
  listContent: {
    paddingHorizontal: 14,
    paddingBottom: 120,
  },

  bottomBar: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 18,
    alignItems: 'center',
  },
  shoutBtn: {
    width: '100%',
    backgroundColor: NEON,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  shoutText: {
    color: DARK,
    fontWeight: '800',
    fontSize: 16,
  },
  shoutCaption: {
    color: '#9B9B9B',
    fontSize: 12,
    marginTop: 2,
  },
});
