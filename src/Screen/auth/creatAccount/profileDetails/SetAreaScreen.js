import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import PrimaryButton from '../../../../components/PrimaryButton';

export default function SetAreaScreen({ navigation, route }) {
  const handleDone = () => {
    route.params?.onAuthSuccess?.('demo-token');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <MaterialIcons name="arrow-back" size={18} color="#141414" />
          </TouchableOpacity>

          <View style={styles.sliderTrack1}>
            <View
              style={[
                styles.sliderFill1,
                { width: `95%` },
              ]}
            />

          </View>
        </View>

        <Text style={styles.title}>Set your area</Text>
        <Text style={styles.subtitle}>
          Geoconnect allows users to find, interact with, and meet nearby
          individuals, whether for casual meetups or business purposes.
        </Text>

        <Text style={styles.label}>Location</Text>
        <TouchableOpacity style={styles.locationField} activeOpacity={0.8}>
          <Text style={styles.locationText}>
            423 Main Street, Apt 101, New York, CA 12486
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#6C6C6C" />
        </TouchableOpacity>

        <PrimaryButton title="Done" onPress={handleDone} style={styles.doneButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },

  sliderTrack1: {
    flex: 1,               // take remaining space
    height: 5,             // slightly thinner
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
    marginLeft: 12,        // space from arrow
    position: 'relative',
    marginRight: 30,       // space on right side
  },
  sliderFill1: {
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 4,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    color: '#141414',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#7A7A7A',
    fontSize: 11,
    lineHeight: 16,
    marginBottom: 18,
  },
  label: {
    color: '#5C5C5C',
    fontSize: 12,
    marginBottom: 8,
  },
  locationField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  locationText: {
    flex: 1,
    color: '#141414',
    fontSize: 12,
  },
  doneButton: {
    marginTop: 'auto',
    marginBottom: 12,
    height: 48,
    borderRadius: 12,
  },
});
