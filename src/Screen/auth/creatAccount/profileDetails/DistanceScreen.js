import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function DistanceScreen({ navigation }) {
  const [distance, setDistance] = useState(17); // starting value like screenshot

  const maxDistance = 100; // you can adjust this (common values: 50–160 km)


  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Back button - kept your style */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <MaterialIcons name="arrow-back" size={26} color="#000000" />   
          </TouchableOpacity>

            <View style={styles.sliderTrack1}>
              <View
                style={[
                  styles.sliderFill1,
                  { width: `1%` },
                ]}
              />
              
            </View>
        </View>

        <Text style={styles.title}>Set distance preference?</Text>

        <Text style={styles.subtitle}>
          Use the slider to set the maximum distance you would like potential
          matches to be located. You can change it later in settings.
        </Text>

        {/* Map preview card - mimicking the screenshot style */}
        <View style={styles.mapCard1}>
        <View style={styles.mapCard}>
          <View style={styles.mapContainer}>
            {/* Simple static map-like placeholder with pin */}
            <View style={styles.mapPlaceholder}>
              <View style={styles.pinContainer}>
                <View style={styles.pinOuter}>
                  <View style={styles.pinInner} />
                </View>
                <View style={styles.pinShadow} />
              </View>

              {/* Green circle area indicator (simplified) */}
              <View
                style={[
                  styles.rangeCircle,
                  {
                    width: (distance / maxDistance) * 220,
                    height: (distance / maxDistance) * 220,
                  },
                ]}
              />
            </View>

            {/* Label + value like screenshot */}

          </View>
        </View>
        </View>

        <View style={styles.sliderCard}>
          <View style={styles.sliderContainer}>
          
                     <View style={styles.sliderHeader}>
              <Text style={styles.sliderLabel}>Set your area</Text>
              <Text style={styles.sliderValueText}>
                Up to {distance} km
              </Text>
            </View>

            {/* Custom slider */}
            <View style={styles.sliderTrack}>
              <View
                style={[
                  styles.sliderFill,
                  { width: `${(distance / maxDistance) * 100}%` },
                ]}
              />
              <TouchableOpacity
                activeOpacity={1}
                style={[
                  styles.sliderThumb,
                  { left: `${(distance / maxDistance) * 100}%` },
                ]}
                onPressIn={() => {}}
              >
                {/* You can add pan responder here for real sliding */}
              </TouchableOpacity>
            </View>
            </View>
        </View>

        <PrimaryButton
          title="Continue"
          onPress={() => navigation.navigate('OnboardingAbout')}
          style={styles.cta}
        />
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
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
    textAlign: 'center', // closer to many modern designs
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 12,
  },

  // Map card
  mapCard: {
    top:13,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    overflow: 'hidden',
    backgroundColor: '#FFF',
    
    paddingTop:30,
    
  },
    mapCard1: {
      top:8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#AAAAAA',

    backgroundColor: '#0C0C0C',
    marginBottom: 39,
  },
  mapContainer: {
    padding: 16,
   
  },
   sliderCard: {
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    overflow: 'hidden',
    backgroundColor: '#FFF',
    marginBottom: 50,
  },
   sliderContainer: {
    padding: 16,
   
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#F0F7FF', // light map-like blue
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 16,
  },
  pinContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '38%',
  },
  pinOuter: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF3B30', // red pin like screenshot
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
  },
  pinShadow: {
    width: 18,
    height: 6,
    backgroundColor: 'rgba(255,59,48,0.3)',
    borderRadius: 9,
    marginTop: 4,
  },
  rangeCircle: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: 'rgba(76, 217, 98, 0.22)', // light green area
    borderWidth: 2,
    borderColor: 'rgba(76, 217, 98, 0.5)',
  },

  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sliderLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  sliderValueText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
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

  sliderTrack: {
    height: 8,
    backgroundColor: '#E8E8E8',
    borderRadius: 4,
    position: 'relative',
  },
  sliderFill1: {
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 4,
  },
  sliderFill: {
    height: 8,
    backgroundColor: '#000000',
    borderRadius: 4,
  },
  sliderThumb: {
    position: 'absolute',
    top: -6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#000000',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },

  cta: {
    marginTop: 'auto',
    marginBottom: 24,
    height: 52,
    borderRadius: 14,
    // assuming PrimaryButton uses green (#34C759 or similar)
  },
});