import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/PrimaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function NotificationsScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
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
              color="#FAF9F9"
              style={styles.cardArrowIcon}
            />
          </TouchableOpacity>
        </View>

       <View style={{marginTop: 20}}>
        <View style={styles.iconWrap}>
          <MaterialIcons
              name="notifications"
              size={26}
              color="#111111"
              style={styles.cardArrowIcon}                                      
           />
        </View>
        <Text style={styles.title}>Don't miss a beat</Text>
        <Text style={styles.body}>
          Geoconnect allows users to find, interact with, and meet nearby
          individuals or businesses. Enable notifications for updates.
        </Text>
        <PrimaryButton
          title="Allow Notifications"
          onPress={() =>
            navigation.navigate('WelcomeFinal', {
              accountType: route.params?.accountType,
            })
          }
          style={styles.primary}
        />
        <PrimaryButton
          title="Not Now"
          variant="secondary"
          onPress={() =>
            navigation.navigate('WelcomeFinal', {
              accountType: route.params?.accountType,
            })
          }
          style={styles.secondary}
        />
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container1: {
    top: 83,
    flex: 1,
    backgroundColor: '#E4E4E4',
    borderRadius: 32,
  },
  container: {
    flex: 1,
    top: 13,
    borderRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
     backgroundColor: '#0B0B0B',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 150,
   
    paddingTop: 30,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
   
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  iconWrap: {
    marginTop: 80,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#B9F54A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,

  },
  icon: {
    color: '#0B0B0B',
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  body: {
    color: '#9E9E9E',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 22,
  },
  primary: {
    height: 48,
    borderRadius: 12,
    marginBottom: 10,
  },
  secondary: {
    height: 48,
    borderRadius: 12,
  },
});
