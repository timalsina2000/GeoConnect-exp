import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, Image } from 'react-native';
import HomeStack from './HomeStack';
import DiscoverScreen from '../Screen/Userprofile/Social/Request/RequestScreen';
import ScanScreen from '../Screen/Userprofile/Social/HotZone/HotZoneScreen';
import ChatScreen from '../Screen/Userprofile/Social/Chat/ChatScreen';
import MoreScreen from '../Screen/Userprofile/Social/Menu/MoreScreen';

import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabLabel({ title, focused }) {
  return (
    <Text style={[styles.label, focused && styles.labelFocused]}>{title}</Text>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
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
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Home" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/Icon/home-active.png")
                  : require("../../assets/Icon/home.png")
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Request" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            // <MaterialIcons name="people" size={size} color={color} />
            <Image
              source={
                focused
                  ? require("../../assets/Icon/profile-active.png")
                  : require("../../assets/Icon/profile.png")
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />

          ),
        }}
      />
         <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Chat" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/Icon/messages-active.png")
                  : require("../../assets/Icon/messages.png")
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel title="Hot Zone" focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/Icon/hot-zone-active.png")
                  : require("../../assets/Icon/hot-zone.png")
              }
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      /> 
      <Tab.Screen
        name="More"
        component={MoreScreen}
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
