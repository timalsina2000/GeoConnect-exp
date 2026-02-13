import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, Circle } from 'react-native-maps';

const SAMPLE = [
  { id: '1', name: 'Rosser', handle: '@rosser', age: 35, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: '2', name: 'Jenifeer', handle: '@jenifeer', age: 35, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '3', name: 'Mario', handle: '@mario', age: 35, avatar: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: '4', name: 'Shaine', handle: '@shaine', age: 35, avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: '5', name: 'Aurora', handle: '@aurora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: '6', name: 'Nora', handle: '@nora', age: 35, avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: '7', name: 'Seli', handle: '@seli', age: 35, avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
];

export default function BusinessHotZone({ navigation }) {
  // center (Florida example)
  const center = { latitude: 27.994402, longitude: -81.760254 };

  // derive nearby coordinates from SAMPLE so markers spread around center
  const hotzones = SAMPLE.map((item, idx) => {
    const latOffset = (idx - Math.floor(SAMPLE.length / 2)) * 0.003; // spreads markers in latitude
    const lngOffset = (idx % 2 === 0 ? 0.003 : -0.003) + idx * 0.0004; // small longitude variation
    return {
      id: item.id,
      name: item.name,
      coordinate: {
        latitude: center.latitude + latOffset,
        longitude: center.longitude + lngOffset,
      },
    };
  });

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Hotzone</Text>

        <View style={styles.searchBar}>
          <View>
            <Text style={styles.location}>Florida, United States</Text>
            <Text style={styles.radius}>Location (within 10 miles)</Text>
          </View>
          <Ionicons name="search" size={18} color="#fff" />
        </View>
      </View>

      {/* Map Area */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: center.latitude,
            longitude: center.longitude,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
        >
          {/* Radius circle (10 miles ≈ 16093 meters) */}
          <Circle
            center={center}
            radius={16093}
            strokeColor="rgba(158,255,0,0.35)"
            fillColor="rgba(158,255,0,0.08)"
          />

          {/* Markers generated from SAMPLE */}
          {hotzones.map(h => (
            <Marker key={h.id} coordinate={h.coordinate}>
              {/* custom small green marker (ring + dot) */}
              <View style={styles.markerWrap}>
                <View style={styles.markerRing}>
                  <View style={styles.markerDot} />
                </View>
              </View>
            </Marker>
          ))}
        </MapView>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomCard}>
        <View style={styles.bottomHeader}>
          <Text style={styles.peopleTitle}>People from zone</Text>
          <TouchableOpacity onPress={() => navigation.navigate('BusinessFriend')}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.avatarWrap}>
            <View style={styles.countCircle}>
              <Text style={styles.countText}>{SAMPLE.length}+</Text>
            </View>

            {SAMPLE.map((item, index) => (
              <View key={item.id} style={styles.avatarItem}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <Text style={styles.avatarName}>{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fcf7f7ff',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  title: {
    color: '#0e0d0dff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
  },

  searchBar: {
    backgroundColor: '#151515',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  location: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  radius: {
    color: '#9EFF00',
    fontSize: 11,
    marginTop: 2,
  },

  mapContainer: {
    flex: 1,
    marginTop: 14,
  },

  map: {
    flex: 1,
  },

  // marker: custom ring + dot
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerRing: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(158,255,0,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.2,
    borderColor: 'rgba(158,255,0,0.9)',
  },
  markerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9EFF00',
  },

  bottomCard: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 16,
  },

  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  peopleTitle: {
    fontSize: 14,
    fontWeight: '700',
  },

  viewAll: {
    fontSize: 12,
    color: '#8E8E8E',
  },

  avatarWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  countCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E95561',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  countText: {
    fontWeight: '700',
  },

  avatarItem: {
    alignItems: 'center',
    marginRight: 14,
    width: 64,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  avatarName: {
    fontSize: 11,
    marginTop: 4,
    textAlign: 'center',
  },
});
