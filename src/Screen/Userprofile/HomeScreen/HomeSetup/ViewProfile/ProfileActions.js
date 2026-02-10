import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const NEON = '#B9F54A';
const DARK = '#0B0B0B';
const LIGHT_BG = '#F7F7F7';
const DIVIDER = '#E9E9E9';

export default function ProfileActions({ navigation, route }) {
  const name = (route && route.params && route.params.name) || 'Profile';

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topGreenBar} />

      <View style={styles.sheet}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.roundBtn}
            onPress={() => navigation?.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={DARK} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
        </View>

        <TouchableOpacity style={styles.row}>
          <MaterialIcons name="report" size={20} color={DARK} style={styles.rowIcon} />
          <Text style={styles.rowText}>Report Akmal</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <MaterialIcons name="block" size={20} color={DARK} style={styles.rowIcon} />
          <Text style={styles.rowText}>Block Akmal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkBtn}>
          <MaterialIcons name="link" size={18} color={DARK} style={styles.rowIcon} />
          <Text style={styles.linkText}>Copy Profile Link</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: DARK,
  },
  topGreenBar: {
    height: 110,
    backgroundColor: NEON,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: 70,
    marginHorizontal: 20,
  },
  sheet: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -100,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  roundBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: LIGHT_BG,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: DARK,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  rowIcon: {
    marginRight: 10,
  },
  rowText: {
    fontSize: 14,
    color: DARK,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER,
  },
  linkBtn: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF9D1',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  linkText: {
    fontSize: 13,
    fontWeight: '700',
    color: DARK,
  },
});
