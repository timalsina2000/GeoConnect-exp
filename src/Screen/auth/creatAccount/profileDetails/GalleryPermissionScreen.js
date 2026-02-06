import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../../components/PrimaryButton';
import * as ImagePicker from 'expo-image-picker';

export default function GalleryPermissionScreen({ navigation, route }) {
  const returnTo = route.params?.returnTo || 'OnboardingAddPhoto';

  const handleAllow = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      navigation.navigate(returnTo, { pickedUri: uri });
      return;
    }
    navigation.navigate('OnboardingAddPhotoFilled');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>"Geoconnect" Would Like to Access the Gallery</Text>
        <Text style={styles.body}>
          To add your recent photo you need to access the gallery.
        </Text>
        <View style={styles.actions}>
          <PrimaryButton
            title="Don't Allow"
            variant="secondary"
            onPress={() => navigation.navigate('OnboardingAddPhotoFilled')}
            style={[styles.button, styles.buttonLeft]}
          />
          <PrimaryButton
            title="Allow"
            onPress={handleAllow}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  body: {
    color: '#9E9E9E',
    fontSize: 12,
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 44,
    borderRadius: 10,
  },
  buttonLeft: {
    marginRight: 10,
  },
});
