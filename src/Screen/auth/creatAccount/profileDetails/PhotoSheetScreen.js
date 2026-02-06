import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PhotoSheetScreen({ navigation, route }) {
  const returnTo = route.params?.returnTo || 'OnboardingAddPhoto';
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.sheet}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Add photo from</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.close}>
              <Text style={styles.closeText}>x</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.sheetButton}
            onPress={() =>
              navigation.navigate('OnboardingGalleryPermission', {
                returnTo,
              })
            }
          >
            <Text style={styles.sheetButtonText}>From Device</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sheetButton, styles.sheetButtonAlt]}
            onPress={() =>
              navigation.navigate('OnboardingCameraPermission', {
                returnTo,
              })
            }
          >
            <Text style={styles.sheetButtonTextAlt}>Take a Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sheetTitle: {
    color: '#141414',
    fontSize: 14,
    fontWeight: '600',
  },
  close: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#141414',
    fontSize: 12,
    fontWeight: '700',
  },
  sheetButton: {
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B9F54A',
    marginBottom: 10,
  },
  sheetButtonAlt: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DADADA',
  },
  sheetButtonText: {
    color: '#0B0B0B',
    fontSize: 13,
    fontWeight: '600',
  },
  sheetButtonTextAlt: {
    color: '#141414',
    fontSize: 13,
    fontWeight: '600',
  },
});
