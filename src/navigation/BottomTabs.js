import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfile } from '../context/ProfileContext';

// Social screens
import HomeStack from './HomeStack';
import DiscoverScreen from '../Screen/Userprofile/Social/Request/RequestScreen';
import ScanScreen from '../Screen/Userprofile/Social/HotZone/HotZoneScreen';
import ChatScreen from '../Screen/Userprofile/Social/Chat/ChatScreen';
import MoreScreen from '../Screen/Userprofile/Social/Menu/MoreScreen';

// Business screens
import HomeScreenBusiness from '../Screen/Userprofile/Business/Home/HomeScreenBusiness';
import BusinessHotZone from '../Screen/Userprofile/Business/HotZone/BusinessHotZone';
import BusinessChat from '../Screen/Userprofile/Business/Chat/BusinessChatS';
import BusinessRequest from '../Screen/Userprofile/Business/Request/BusinessRequest';
import BusinessMore from '../Screen/Userprofile/Business/Menu/BusinessMore';

const Tab = createBottomTabNavigator();

function TabLabel({ title, focused }) {
  return (
    <Text style={[styles.label, focused && styles.labelFocused]}>{title}</Text>
  );
}

export default function BottomTabs() {
  const { profileType } = useProfile();
  const isBusiness = profileType === 'business';

  const HomeComponent = isBusiness ? HomeScreenBusiness : HomeStack;
  const DiscoverComponent = isBusiness ? BusinessRequest : DiscoverScreen;
  const ChatComponent = isBusiness ? BusinessChat : ChatScreen;
  const ScanComponent = isBusiness ? BusinessHotZone : ScanScreen;
  const MoreComponent = isBusiness ? BusinessMore : MoreScreen;

  return (
    <Tab.Navigator
      key={profileType}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#0B0B0B',
        tabBarInactiveTintColor: '#6F6F6F',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Home" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/Icon/home-active.png')
                  : require('../../assets/Icon/home.png')
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverComponent}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Request" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/Icon/profile-active.png')
                  : require('../../assets/Icon/profile.png')
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatComponent}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Chat" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/Icon/messages-active.png')
                  : require('../../assets/Icon/messages.png')
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Scan"
        component={ScanComponent}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Hot Zone" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/Icon/hot-zone-active.png')
                  : require('../../assets/Icon/hot-zone.png')
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreComponent}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Menu" focused={focused} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    borderTopWidth: 0,
    backgroundColor: '#FFFFFF',
    paddingBottom: 10,
    paddingTop: 6,
  },
  label: {
    fontSize: 10,
    color: '#6F6F6F',
  },
  labelFocused: {
    color: '#0B0B0B',
    fontWeight: '700',
  },
});
