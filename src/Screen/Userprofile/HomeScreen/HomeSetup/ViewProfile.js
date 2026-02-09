import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const NEON = '#B9F54A';
const DARK = '#0B0B0B';
const BLUE = '#4D6CFF';
const LIGHT_BG = '#F7F7F7';
const TEXT_GRAY = '#7E7E7E';

export default function ViewProfile({ navigation, route }) {
  const profile = (route && route.params && route.params.profile) || {};

  const {
    name = '@Jenifeer',
    age = '24 yrs',
    subtitle = 'Single | Looking for short relationship',
    avatar = { uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000' },
    distance = '400m',
    verified = true,
  } = profile;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Set StatusBar to transparent to allow the green background to show behind it */}
      <StatusBar translucent backgroundColor="transparent" barStyle={LIGHT_BG} />
      
      {/* This is the Green Header Container at the very top */}
      <View style={styles.topGreenBar} />

      {/* The main content container with rounded top corners */}
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 40}}>
          

          {/* Header Navigation */}
          <View style={styles.headerButtons}>
            <TouchableOpacity
              style={styles.roundBtn}
              onPress={() => navigation?.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color={DARK} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.roundBtn}
              onPress={() =>
                navigation?.navigate('ProfileActions', { name })
              }
            >
              <MaterialCommunityIcons name="dots-vertical" size={20} color={DARK} />
            </TouchableOpacity>
          </View>

          {/* Image Section */}
          <View style={styles.imageWrapper}>
            <Image source={avatar} style={styles.profileImage} />

            {/* Verified Badge */}
            {verified && (
              <View style={styles.verifiedBadge}>
                <MaterialIcons name="verified" size={24} color="#0095f6" />
              </View>
            )}

            {/* Pagination Dots */}
            <View style={[styles.pagination, { position: 'absolute', bottom: -20 }]}>
                <View style={styles.dot} />
                <View style={[styles.dot, styles.dotActive]} />
                <View style={styles.dot} />
                </View>
          </View>

          {/* Profile Details */}
          <View style={styles.infoContainer}>
            <Text style={styles.nameText}>
              {name} <Text style={styles.ageText}>{age}</Text>
            </Text>
            <Text style={styles.tagline}>{subtitle}</Text>

            <View style={styles.chipRow}>
              <View style={styles.chip}>
                <MaterialCommunityIcons name="translate" size={14} color={DARK} />
                <Text style={styles.chipText}>Spanish, English</Text>
              </View>
              <View style={styles.chip}>
                <FontAwesome5 name="flag-usa" size={12} color={DARK} />
                <Text style={styles.chipText}>USA</Text>
              </View>
              <View style={styles.chip}>
                <MaterialCommunityIcons name="near-me" size={14} color={DARK} />
                <Text style={styles.chipText}>{distance}</Text>
              </View>
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity style={[styles.actionBtn, { backgroundColor: NEON }]}>
                <Ionicons name="heart-outline" size={18} color={DARK} />
                <Text style={styles.actionBtnText}>Connect</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.actionBtn, { backgroundColor: BLUE }]}>
                <Ionicons name="chatbubble-outline" size={18} color="#FFF" />
                <Text style={[styles.actionBtnText, { color: '#FFF' }]}>Message</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.actionBtn, { backgroundColor: DARK }]}>
                <MaterialCommunityIcons name="gift-outline" size={18} color="#FFF" />
                <Text style={[styles.actionBtnText, { color: '#FFF' }]}>Send Gift</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.aboutCard}>
              <Text style={styles.aboutTitle}>About</Text>
              <Text style={styles.aboutText}>
                I'm Akmal Nasrulloh, Efficiently negotiate scalable resources after professional materials. Collaboratively utilize flexible convergence via cross-unit catalysts.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: DARK, // Black background as requested
    marginTop: Platform.OS === 'android' ? 0 : 0,
  },
  topGreenBar: {
    height: 100,
    backgroundColor: NEON,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    top: 75,
    width: width - 40,
    alignSelf: 'center',
    
  },
  mainContainer: {
    top:53,
    flex: 1,
    backgroundColor: LIGHT_BG,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -70, // Pulls the white container over the green one
    overflow: 'hidden',
  },
  imageWrapper: {
    padding: 16,
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: 380,
    borderRadius: 24,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 8,
  },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedBadge: {
    position: 'absolute',
    top: 35,
    right: 35,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 2,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D1D1',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: NEON,
    width: 10,
    height: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 28,
    fontWeight: '800',
    color: DARK,
  },
  ageText: {
    fontSize: 20,
    fontWeight: '400',
  },
  tagline: {
    fontSize: 14,
    color: TEXT_GRAY,
    marginTop: 4,
  },
  chipRow: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: DARK,
    marginLeft: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    width: (width - 60) / 3,
  },
  actionBtnText: {
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 4,
  },
  aboutCard: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 24,
    padding: 20,
    marginTop: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    color: TEXT_GRAY,
  },
});
