// RequestScreen.js
import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const RECEIVED = [
  { id: '1', name: 'Rosser', handle: '@rosser', age: 35, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: '2', name: 'Jenifeer', handle: '@jenifeer', age: 35, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '3', name: 'Mario', handle: '@mario', age: 35, avatar: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: '4', name: 'Shaine', handle: '@shaine', age: 35, avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: '5', name: 'Aurora', handle: '@aurora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: '6', name: 'Nora', handle: '@nora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: '7', name: 'Seli', handle: '@seli', age: 35, avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
];

const SENT = [
  { id: 's1', name: 'Rosser', handle: '@rosser', age: 35, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 's2', name: 'Jenifeer', handle: '@jenifeer', age: 35, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 's3', name: 'Sofia', handle: '@sofia', age: 35, avatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: 's4', name: 'Mario', handle: '@mario', age: 35, avatar: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: 's5', name: 'Shaine', handle: '@shaine', age: 35, avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: 's6', name: 'Aurora', handle: '@aurora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: 's7', name: 'Nora', handle: '@nora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
];

export default function BusinessRequest({ navigation }) {
  const [tab, setTab] = useState('received');
  const data = useMemo(() => (tab === 'received' ? RECEIVED : SENT), [tab]);
  const countLabel =
    tab === 'received'
      ? `${data.length} connection request received`
      : `${data.length} connection request sent`;

  const renderItem = ({ item, index }) => {
    const ringColors = ['#FF4D6D', '#7C4DFF', '#00B0FF', '#FFB84D', '#4CAF50'];
    const ring = ringColors[index % ringColors.length];

    return (
      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.85}
        onPress={() =>
          navigation.navigate('ViewProfile', {
            profile: {
              name: item.handle,
              age: `${item.age}yrs`,
              subtitle: 'Single | Looking for short relationship',
              avatar: { uri: item.avatar },
              distance: '400m',
              verified: true,
            },
          })
        }
      >
        <View style={[styles.avatarWrap, { borderColor: ring }]}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.handle}>
            {item.handle} <Text style={styles.age}>{item.age}yrs</Text>
          </Text>
        </View>

        <View style={styles.actionsRight}>
          {tab === 'received' ? (
            <>
              <TouchableOpacity
                style={styles.acceptBtn}
                activeOpacity={0.85}
                onPress={(e) => {
                  e.stopPropagation && e.stopPropagation();
                  console.log('Accept', item.id);
                }}
              >
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={(e) => {
                  e.stopPropagation && e.stopPropagation();
                  console.log('Decline', item.id);
                }}
              >
                <Text style={styles.closeX}>x</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.cancelBtn}
                activeOpacity={0.85}
                onPress={(e) => {
                  e.stopPropagation && e.stopPropagation();
                  console.log('Cancel request', item.id);
                }}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <View style={styles.timerPill}>
                <Feather name="clock" size={16} color="#4B5563" />
                <Text style={styles.timerText}> 04:59</Text>
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        <Text style={styles.title}>Request</Text>

        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => setTab('received')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'received' && styles.tabTextActive]}>
              Received
            </Text>
            {tab === 'received' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, { marginLeft: 18 }]}
            onPress={() => setTab('sent')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'sent' && styles.tabTextActive]}>
              Sent
            </Text>
            {tab === 'sent' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>

        <Text style={styles.countText}>{countLabel}</Text>

        <FlatList
          data={data}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.sep} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const ACCENT = '#B9F54A';
const BLACK = '#0B0B0B';
const PILL_BG = '#0A0A0A';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: BLACK,
    marginBottom: 12,
  },
  tabsRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tabBtn: {
    alignItems: 'center',
    marginRight: 30,
  },
  tabText: {
    fontSize: 14,
    color: '#7A7A7A',
    fontWeight: '700',
  },
  tabTextActive: {
    color: BLACK,
  },
  tabIndicator: {
    marginTop: 8,
    height: 3,
    width: 65,
    backgroundColor: ACCENT,
    borderRadius: 3,
  },
  countText: {
    color: '#8A8A8A',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  avatarWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    padding: 2,
    marginRight: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '800',
    color: BLACK,
    marginBottom: 2,
  },
  handle: {
    fontSize: 13,
    color: '#9B9B9B',
  },
  age: {
    color: '#9B9B9B',
    fontWeight: '600',
  },
  actionsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerPill: {
    backgroundColor: '#F4F4F5',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    minWidth: 74,
    justifyContent: 'center',
  },
  timerText: {
    color: '#4B5563',
    fontWeight: '700',
    fontSize: 12,
  },
  acceptBtn: {
    backgroundColor: '#FF4D6D',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    minWidth: 70,
    alignItems: 'center',
  },
  acceptText: {
    color: BLACK,
    fontWeight: '800',
  },
  cancelBtn: {
    backgroundColor: '#F36C61',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    minWidth: 70,
    alignItems: 'center',
  },
  cancelText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  closeBtn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  closeX: {
    color: '#8E8E8E',
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '700',
  },
  sep: {
    height: 1,
    backgroundColor: '#F1F1F1',
  },
});
