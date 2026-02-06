import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BOXES = Array.from({ length: 6 });

export default function AddPhotoFilledScreen({ navigation, route }) {
  const [photos, setPhotos] = useState(route.params?.photos || []);

  useEffect(() => {
    if (route.params?.pickedUri) {
      setPhotos((prev) => {
        if (prev.find((uri) => uri === route.params.pickedUri)) return prev;
        return [...prev, route.params.pickedUri].slice(0, 6);
      });
      navigation.setParams({ pickedUri: null });
    }
  }, [navigation, route.params?.pickedUri]);

  const handleFinish = () => {
    navigation.navigate('OnboardingSetArea');
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
            <MaterialIcons
                            name="arrow-back"
                            size={26}
                            color="#000000"
                            style={styles.cardArrowIcon}
                          />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Add your recent photo</Text>
        <Text style={styles.subtitle}>Add recent photo to update yourself into our portal.</Text>

        <View style={styles.grid}>
          {BOXES.map((_, index) => {
            const uri = photos[index];
            if (uri) {
              return (
                <View key={`filled-${index}`} style={styles.boxFilled}>
                  <Image source={{ uri }} style={styles.preview} />
                  <View style={styles.check}>
                    <Text style={styles.checkText}>v</Text>
                  </View>
                </View>
              );
            }
            return (
              <TouchableOpacity
                key={`box-${index}`}
                style={styles.box}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('OnboardingPhotoSheet', {
                    returnTo: 'OnboardingAddPhotoFilled',
                  })
                }
              >
                <View style={styles.plus}>
                  <Text style={styles.plusText}>+</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.note}>Need at least 1 photo to continue</Text>

        <View style={styles.footerRow}>
          <PrimaryButton
            title="Skip"
            variant="secondary"
            style={styles.skipButton}
            onPress={handleFinish}
          />
          <PrimaryButton
            title="Continue"
            onPress={handleFinish}
            disabled={photos.length === 0}
            style={styles.continueButton}
          />
        </View>
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
    paddingTop: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  backText: {
    color: '#141414',
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    color: '#141414',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#7A7A7A',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '30%',
    height: 78,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DADADA',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxFilled: {
    width: '30%',
    height: 78,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  check: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#B9F54A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    color: '#0B0B0B',
    fontSize: 10,
    fontWeight: '700',
  },
  plus: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#B9F54A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: '#0B0B0B',
    fontSize: 16,
    fontWeight: '700',
  },
  note: {
    color: '#7A7A7A',
    fontSize: 11,
    marginTop: 6,
  },
  footerRow: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 10,
  },
  skipButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    marginRight: 10,
  },
  continueButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
  },
});
