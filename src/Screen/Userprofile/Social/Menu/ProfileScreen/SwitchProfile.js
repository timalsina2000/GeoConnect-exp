import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfile } from '../../../../../context/ProfileContext';

const AVATAR = require('../../../../../../assets/image/welcome_bg.jpg');

const DARK = '#0B0B0B';
const GREEN = '#CFF47A';
const LIGHT_BG = '#F5F5F5';
const TEXT_GRAY = '#7A7A7A';

export default function SwitchProfile({ navigation }) {
  const { profileType, setProfileType } = useProfile();
  const hasBusiness = true;

  const switchToSocial = () => {
    setProfileType('social');
    navigation.navigate('HomeTabs');
  };

  const switchToBusiness = () => {
    setProfileType('business');
    navigation.navigate('HomeTabs');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation?.goBack()}>
          <MaterialIcons name="arrow-back" size={20} color={DARK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Switch Account</Text>
        <View style={{ width: 32 }} />
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          style={[
            styles.accountRow,
            profileType === 'social' && styles.accountRowActive,
          ]}
          onPress={switchToSocial}
          activeOpacity={0.85}
        >
          <View style={styles.rowLeft}>
            <View style={styles.avatarWrap}>
              <Image source={AVATAR} style={styles.avatar} />
            </View>
            <View>
              <Text style={styles.name}>Jesmin</Text>
              <Text style={styles.subText}>Social Profile</Text>
            </View>
          </View>
          {profileType === 'social' ? (
            <View style={styles.checkCircle}>
              <MaterialIcons name="check" size={16} color="#FFFFFF" />
            </View>
          ) : null}
        </TouchableOpacity>

        {hasBusiness ? (
          <TouchableOpacity
            style={[
              styles.accountRow,
              profileType === 'business' && styles.accountRowActive,
            ]}
            onPress={switchToBusiness}
            activeOpacity={0.85}
          >
            <View style={styles.rowLeft}>
              <View style={styles.avatarWrapSmall}>
                <Image source={AVATAR} style={styles.avatar} />
              </View>
              <View>
                <Text style={styles.name}>Jesmin</Text>
                <Text style={styles.subText}>Own Business Profile</Text>
              </View>
            </View>
            {profileType === 'business' ? (
              <View style={styles.checkCircle}>
                <MaterialIcons name="check" size={16} color="#FFFFFF" />
              </View>
            ) : null}
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>Currently you do not</Text>
            <Text style={styles.emptyText}>have a Professional account</Text>
            <TouchableOpacity style={styles.newBtn}>
              <Text style={styles.newBtnText}>+ New Professional Profile</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 16,
    paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) + 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  accountRowActive: {
    backgroundColor: GREEN,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E91E63',
    overflow: 'hidden',
    marginRight: 12,
  },
  avatarWrapSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E91E63',
    overflow: 'hidden',
    marginRight: 12,
  },
  avatar: { width: '100%', height: '100%' },
  name: { fontSize: 14, fontWeight: '800', color: DARK },
  subText: { fontSize: 12, color: TEXT_GRAY, marginTop: 2 },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 30,
  },
  emptyText: {
    color: DARK,
    fontSize: 14,
    fontWeight: '600',
  },
  newBtn: {
    marginTop: 16,
    backgroundColor: DARK,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  newBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
