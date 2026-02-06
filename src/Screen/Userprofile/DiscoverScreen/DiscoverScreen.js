// RequestScreen.js
import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const SAMPLE = [
  { id: '1', name: 'Rosser', handle: '@rosser', age: 35, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: '2', name: 'Jenifeer', handle: '@jenifeer', age: 35, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '3', name: 'Mario', handle: '@mario', age: 35, avatar: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: '4', name: 'Shaine', handle: '@shaine', age: 35, avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: '5', name: 'Aurora', handle: '@aurora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: '6', name: 'Nora', handle: '@nora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: '7', name: 'Seli', handle: '@seli', age: 35, avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
];

export default function RequestScreen() {
  const [tab, setTab] = useState('received'); // 'received' | 'sent'
  const data = useMemo(() => SAMPLE, []);

  const renderItem = ({ item, index }) => {
    // pick a ring color for avatars for visual variety
    const ringColors = ['#FF4D6D', '#7C4DFF', '#00B0FF', '#FFB84D', '#4CAF50'];
    const ring = ringColors[index % ringColors.length];

    return (
      <View style={styles.row}>
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
          <View style={styles.timerPill}>
            <MaterialIcons name="camera-alt" size={14} color="#fff" />
            <Text style={styles.timerText}> 04:59</Text>
            {/* small red record dot */}
            <View style={styles.recordDot} />
          </View>

          <TouchableOpacity style={styles.acceptBtn} activeOpacity={0.85}>
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeBtn}>
            <Text style={styles.closeX}>×</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.title}>Request</Text>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => setTab('received')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'received' && styles.tabTextActive]}>Received</Text>
            {tab === 'received' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, { marginLeft: 18 }]}
            onPress={() => setTab('sent')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'sent' && styles.tabTextActive]}>Sent</Text>
            {tab === 'sent' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>

        <Text style={styles.countText}>100 connection request</Text>

        {/* list */}
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

const ACCENT = '#B9F54A'; // light neon green seen previously
const BLACK = '#0B0B0B';
const PILL_BG = '#0A0A0A';

const styles = StyleSheet.create({
  safe: {

    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  title: {
    flexDirection: 'row',
    top: 10,
    fontSize: 24,
    fontWeight: '800',
    color: BLACK,
    marginBottom: 12,
  },

  tabsRow: {
    paddingHorizontal: 50,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 50,

  },
  tabBtn: {
    alignItems: 'center',
    marginRight: 24,
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
    width: 99,
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

  // row
  row: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingRight: 6,
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
    backgroundColor: PILL_BG,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    minWidth: 68,
    justifyContent: 'center',
    position: 'relative',
  },
  timerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  recordDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    position: 'absolute',
    right: 45,
    top: 6,
    borderWidth: 1,
    borderColor: '#00000055',
  },

  acceptBtn: {
    backgroundColor: ACCENT,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 8,
    minWidth: 70,
    alignItems: 'center',
  },
  acceptText: {
    color: BLACK,
    fontWeight: '800',
  },

  closeBtn: {
    width: 30,
    height: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
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
