import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const AVATAR = require('../../../../assets/image/welcome_bg.jpg'); // replace with your local avatar

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Card container */}
        <View style={styles.card}>
          {/* Top green header */}
          <LinearGradient
            colors={["#E8FFDE", "#DFF7C6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <View style={styles.topRow}>
              <View style={styles.avatarWrap}>
                <Image source={AVATAR} style={styles.avatar} />
              </View>

              <View style={styles.nameBlock}>
                <View style={styles.nameRow}>
                  <Text style={styles.name}>Jesmin</Text>
                  <Text style={styles.age}> 24 yrs</Text>
                  <MaterialIcons name="verified" size={16} color="#2EA44F" style={{ marginLeft: 6 }} />
                </View>
                <Text style={styles.handle}>@jesmin</Text>

                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>30</Text>
                    <Text style={styles.statLabel}>Connections/day</Text>
                  </View>
                  <View style={[styles.statItem, { alignItems: 'flex-end' }]}>
                    <Text style={styles.statNumber}>500</Text>
                    <Text style={styles.statLabel}>Views</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.switchButton} activeOpacity={0.85}>
              <Text style={styles.switchText}>Switch to Business Account</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* Content area */}
          <View style={styles.content}>
            {/* Profile completion */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Complete Profile</Text>
                <Text style={styles.sectionPercent}>60%</Text>
              </View>
              <View style={styles.progressBackground}>
                <View style={[styles.progressFill, { width: '60%' }]} />
              </View>

              <View style={styles.verifyRow}>
                <View style={styles.verifyItem}>
                  <MaterialIcons name="check-circle" size={18} color="#2EA44F" />
                  <Text style={styles.verifyText}> Verify my profile</Text>
                </View>
                <Text style={styles.verifiedBadge}>Verified</Text>
              </View>
            </View>

            {/* About / Media / Personal Info */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>About</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>

              <Text style={styles.aboutText} numberOfLines={4}>
                I’m Akmal Nasrulloh. Efficiently negotiate scalable resources after professional
                materials. Collaboratively utilize flexible convergence via cross-unit catalysts.
              </Text>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Media</Text>

              <View style={styles.mediaRow}>
                <Image source={AVATAR} style={styles.mediaThumb} />
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.mediaLabel}>Photo (1/5)</Text>
                  <View style={styles.mediaTagsRow}>
                    <Text style={styles.tag}>Real</Text>
                    <Text style={styles.tag}>Friends</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Personal Info</Text>

              <View style={styles.infoRow}>
                <View>
                  <Text style={styles.infoLabel}>Full name</Text>
                  <Text style={styles.infoValue}>Akmal Nasrulloh</Text>
                </View>

                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>

              <View style={styles.metaGrid}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Age</Text>
                  <Text style={styles.metaValue}>45</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Height</Text>
                  <Text style={styles.metaValue}>5'7"</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Weight</Text>
                  <Text style={styles.metaValue}>72</Text>
                </View>
              </View>

              <View style={{ height: 10 }} />

              <Text style={styles.smallLabel}>Address</Text>
              <Text style={styles.smallValue}>123 Main Street, Apt 101, NewYork, CA 12345.</Text>

              <View style={{ height: 10 }} />

              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.smallLabel}>Nationality</Text>
                  <Text style={styles.smallValue}>Indonesia</Text>
                </View>
                <View>
                  <Text style={styles.smallLabel}>Language</Text>
                  <Text style={styles.smallValue}>English</Text>
                </View>
              </View>
            </View>

            {/* Bio / Interests / Work Info */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Bio</Text>
                <TouchableOpacity style={styles.editSmall}>
                  <MaterialIcons name="edit" size={18} color="#4B5563" />
                </TouchableOpacity>
              </View>
              <Text style={styles.aboutText}>
                I’m Akmal Nasrulloh. Efficiently negotiate scalable resources after professional
                materials. Collaboratively utilize flexible convergence via cross-unit catalysts.
              </Text>
            </View>

            <View style={{ height: 40 }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F6F7F9' },
  scroll: { padding: 16 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 6,
    top: 30,
  },
  header: {
    padding: 16,
    paddingTop: 18,
  },
  topRow: { flexDirection: 'row', alignItems: 'center' },
  avatarWrap: {
    width: 72,
    height: 72,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatar: { width: '100%', height: '100%', resizeMode: 'cover' },
  nameBlock: { flex: 1, marginLeft: 12 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 20, fontWeight: '700', color: '#062C00' },
  age: { fontSize: 14, color: '#062C00', marginLeft: 6 },
  handle: { color: '#6B7280', marginTop: 4 },
  statsRow: { flexDirection: 'row', marginTop: 12, justifyContent: 'space-between' },
  statItem: { flex: 1 },
  statNumber: { fontSize: 16, fontWeight: '700', color: '#0B0B0B' },
  statLabel: { color: '#6B7280', fontSize: 12 },
  switchButton: {
    marginTop: 14,
    backgroundColor: '#0B0B0B',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  switchText: { color: '#FFFFFF', fontWeight: '700' },
  content: { padding: 16, backgroundColor: '#F7F8FA' },

  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
  },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#0B0B0B' },
  sectionPercent: { fontSize: 14, color: '#6B7280' },

  progressBackground: {
    height: 8,
    backgroundColor: '#EEF4EA',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  progressFill: { height: '100%', backgroundColor: '#B9F54A' },

  verifyRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, alignItems: 'center' },
  verifyItem: { flexDirection: 'row', alignItems: 'center' },
  verifyText: { color: '#374151', marginLeft: 8 },
  verifiedBadge: { color: '#10B981', fontWeight: '700' },

  editSmall: { padding: 6 },
  aboutText: { color: '#374151', marginTop: 8, lineHeight: 18 },

  mediaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  mediaThumb: { width: 64, height: 64, borderRadius: 8, overflow: 'hidden' },
  mediaLabel: { fontSize: 13, fontWeight: '700' },
  mediaTagsRow: { flexDirection: 'row', marginTop: 6 },
  tag: { backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, marginRight: 6, fontSize: 12 },

  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  infoLabel: { color: '#6B7280', fontSize: 12 },
  infoValue: { fontSize: 14, fontWeight: '700', color: '#0B0B0B' },

  metaGrid: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  metaItem: { width: (width - 64) / 3 },
  metaLabel: { color: '#6B7280', fontSize: 12 },
  metaValue: { fontWeight: '700', color: '#0B0B0B' },

  smallLabel: { color: '#6B7280', fontSize: 12, marginTop: 6 },
  smallValue: { color: '#374151', fontSize: 13 },

  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
});
