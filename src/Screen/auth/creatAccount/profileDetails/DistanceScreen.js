import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  PanResponder,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, Circle } from 'react-native-maps';
import PrimaryButton from '../../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function DistanceScreen({ navigation }) {
  const [distance, setDistance] = useState(17); // starting value

  const maxDistance = 100; // km

  // Default location (you can later get real user location)
  const userLocation = {
    latitude: 27.7172, // example: Kathmandu
    longitude: 85.3240,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  // Ref for map (optional - can be used to animate later)
  const mapRef = useRef(null);

  // Pan responder for real sliding
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newX = gestureState.moveX;
        const trackWidth = width - 80; // approximate track width
        const percentage = Math.max(0, Math.min(1, newX / trackWidth));
        const newDistance = Math.round(percentage * maxDistance);
        setDistance(newDistance);
      },
      onPanResponderRelease: () => {
        // You can add snap / save logic here if needed
      },
    })
  ).current;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
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
                { width: `5%` },
              ]}
            />
          </View>
        </View>

        <Text style={styles.title}>Set distance preference?</Text>

        <Text style={styles.subtitle}>
          Use the slider to set the maximum distance you would like potential
          matches to be located. You can change it later in settings.
        </Text>

        {/* Map Card with real map */}
        <View style={styles.mapCard1}>
          <View style={styles.mapCard}>
            <View style={styles.mapContainer}>
              <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={userLocation}
                showsUserLocation={true}
                showsMyLocationButton={false}
                scrollEnabled={false}
                zoomEnabled={false}
                rotateEnabled={false}
                pitchEnabled={false}
              >
                {/* User location pin */}
                <Marker
                  coordinate={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                  }}
                  anchor={{ x: 0.5, y: 0.5 }}
                >
                  <View style={styles.customMarker}>
                    <View style={styles.pinOuter}>
                      <View style={styles.pinInner} />
                    </View>
                  </View>
                </Marker>

                {/* Radius circle */}
                <Circle
                  center={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                  }}
                  radius={distance * 1000} // meters
                  strokeColor="rgba(76, 217, 98, 0.8)"
                  fillColor="rgba(76, 217, 98, 0.18)"
                  strokeWidth={2}
                />
              </MapView>
            </View>
          </View>
        </View>

        {/* Slider Card */}
        <View style={styles.sliderCard}>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderHeader}>
              <Text style={styles.sliderLabel}>Set your area</Text>
              <Text style={styles.sliderValueText}>Up to {distance} km</Text>
            </View>

            {/* Working Custom Slider */}
            <View style={styles.sliderTrack} {...panResponder.panHandlers}>
              <View
                style={[
                  styles.sliderFill,
                  { width: `${(distance / maxDistance) * 100}%` },
                ]}
              />
              <View
                style={[
                  styles.sliderThumb,
                  { left: `${(distance / maxDistance) * 100}%` },
                ]}
              />
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
    textAlign: 'center',
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
  mapCard1: {
    top: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    backgroundColor: '#0C0C0C',
    marginBottom: 39,
    overflow: 'hidden',
     
  },
  mapCard: {
    top: 7,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    
  },
  mapContainer: {
    height: 240,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  // Custom marker
  customMarker: {
    alignItems: 'center',
  },
  pinOuter: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
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

  // Top thin progress bar
  sliderTrack1: {
    flex: 1,
    height: 5,
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
    marginLeft: 12,
    marginRight: 30,
    position: 'relative',
  },
  sliderFill1: {
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 3,
  },

  // Main slider
  sliderTrack: {
    height: 8,
    backgroundColor: '#E8E8E8',
    borderRadius: 4,
    position: 'relative',
  },
  sliderFill: {
    height: 8,
    backgroundColor: '#000000',
    borderRadius: 4,
  },
  sliderThumb: {
    position: 'absolute',
    top: -8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#000000',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  cta: {
    marginTop: 'auto',
    marginBottom: 24,
    height: 52,
    borderRadius: 14,
  },
});