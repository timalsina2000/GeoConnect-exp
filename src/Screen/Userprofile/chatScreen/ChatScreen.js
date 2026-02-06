import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const AVATAR = require('../../../../assets/image/welcome_bg.jpg'); // demo avatar

const DATA = [
  { id: '1', name: '@rosser', subtitle: 'You sent a gift', time: '4m', unread: 0, avatar: AVATAR },
  { id: '2', name: '@jenifeer', subtitle: 'You sent a gift', time: '4m', unread: 2, avatar: AVATAR },
  { id: '3', name: '@sofia', subtitle: 'You sent a message', time: '4m', unread: 1, avatar: AVATAR },
  { id: '4', name: '@elizabeth', subtitle: 'You sent a gift', time: '4m', unread: 0, avatar: AVATAR },
  { id: '5', name: '@emily', subtitle: 'You sent a gift', time: '4m', unread: 0, avatar: AVATAR },
  { id: '6', name: '@aurora', subtitle: 'You sent a gift', time: '4m', unread: 0, avatar: AVATAR },
  { id: '7', name: '@jenifeer', subtitle: "I,m ok with that...", time: '4m', unread: 1, avatar: AVATAR },
];

export default function ChatScreen({ navigation }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return DATA;
    const q = query.toLowerCase();
    return DATA.filter(i => i.name.toLowerCase().includes(q) || i.subtitle.toLowerCase().includes(q));
  }, [query]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.8} onPress={() => { /* navigate to chat */ }}>
      <View style={styles.avatarWrap}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.avatarRing} />
      </View>

      <View style={styles.mid}>
        <View style={styles.titleRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.subRow}>
          <Text style={styles.subtitle} numberOfLines={1}>{item.subtitle}</Text>
          {item.unread > 0 && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unread < 10 ? `0${item.unread}` : item.unread}</Text></View>}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="delete-outline" size={20} color="#0B0B0B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="more-vert" size={20} color="#0B0B0B" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchWrap}>
        <MaterialIcons name="search" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const AV_SIZE = 56;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 28, fontWeight: '700', color: '#0B0B0B' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { marginLeft: 12, backgroundColor: '#F3F4F6', padding: 8, borderRadius: 12 },

  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 44,
    marginBottom: 8,
  },
  searchInput: { marginLeft: 8, flex: 1, fontSize: 15 },

  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 },
  avatarWrap: { width: AV_SIZE, height: AV_SIZE, borderRadius: AV_SIZE / 2, overflow: 'hidden', marginRight: 12 },
  avatar: { width: '100%', height: '100%', resizeMode: 'cover' },
  avatarRing: { position: 'absolute', left: -2, top: -2, right: -2, bottom: -2, borderRadius: (AV_SIZE + 4) / 2, borderWidth: 2, borderColor: '#F973A1' },

  mid: { flex: 1, justifyContent: 'center' },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 16, fontWeight: '700', color: '#0B0B0B' },
  time: { color: '#6B7280', fontSize: 12 },
  subRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 },
  subtitle: { color: '#6B7280', flex: 1, marginRight: 8 },
  unreadBadge: { backgroundColor: '#CFF7D6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, marginLeft: 8 },
  unreadText: { color: '#065F46', fontWeight: '700', fontSize: 12 },

  sep: { height: 1, backgroundColor: '#F3F4F6', marginLeft: 84 },
});
