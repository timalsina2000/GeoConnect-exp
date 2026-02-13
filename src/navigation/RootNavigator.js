import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { isAuthenticated } from '../services/auth';
import FilterScreen from '../Screen/Userprofile/Social/Home/HomeSetup/Filter/FilterScreen';
import FriendScan from '../Screen/Userprofile/Social/HotZone/FriendScan';
import CreatePostScreen from '../Screen/Userprofile/Social/Home/HomeSetup/Createpost/Createpost';
import ViewProfile from '../Screen/Userprofile/Social/Home/HomeSetup/ViewProfile/ViewProfile';
import ProfileActions from '../Screen/Userprofile/Social/Home/HomeSetup/ViewProfile/ProfileActions';
import ChatDetail from '../Screen/Userprofile/Social/Chat/ChatDetail';
import ShakeConnect from '../Screen/Userprofile/Social/Home/HomeSetup/ShakeConnect';
import SocialProfileScreen from '../Screen/Userprofile/Social/Menu/ProfileScreen/SocialProfileScreen';
import FriendList from '../Screen/Userprofile/Social/Menu/FriendList/FriendList';
import BlockList from '../Screen/Userprofile/Social/Menu/FriendList/BlockList';
import WorkDetails from '../Screen/Userprofile/Social/Menu/createWork/WorkDetails';
import SwitchProfile from '../Screen/Userprofile/Social/Menu/ProfileScreen/SwitchProfile';
import VerifyProfile from '../Screen/Userprofile/Social/Menu/ProfileScreen/VerfiyProfile';
import BusinessProfileScreen from '../Screen/Userprofile/Business/Menu/Profile/BusinessProfileScreen';
import BusinessInfo from '../Screen/Userprofile/Business/Menu/BusinessInfo/BusinessInfo';
import ExplorePeople from '../Screen/Userprofile/Social/Menu/FriendList/ExplorePeople';
import Setting from '../Screen/Userprofile/Social/Menu/Settings/Setting';
import NotificationSetting from '../Screen/Userprofile/Social/Menu/Settings/NotificationSetting';
import BusinessFriendScan from '../Screen/Userprofile/Business/HotZone/BusinessFriend';
import ChatProfile from '../Screen/Userprofile/Social/Chat/ChatProfile';
import BusinessShake from '../Screen/Userprofile/Business/Home/Shaketoconnect/BusinessShake';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  const bootstrap = useCallback(async () => {
    try {
      const savedToken = await isAuthenticated();
      setToken(savedToken);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  const handleAuthSuccess = (accessToken) => {
    setToken(accessToken);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#B9F54A" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      key={token ? 'user' : 'guest'}
      screenOptions={{ headerShown: false }}
      initialRouteName={token ? 'HomeTabs' : 'Auth'}
    >
      <Stack.Screen name="Auth">
        {() => <AuthStack onAuthSuccess={handleAuthSuccess} />}
      </Stack.Screen>
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="FriendScan" component={FriendScan} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
      <Stack.Screen name="ProfileActions" component={ProfileActions} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
      <Stack.Screen name="ShakeConnect" component={ShakeConnect} />
      <Stack.Screen name="SocialProfile" component={SocialProfileScreen}/>
      <Stack.Screen name="FriendList"  component={FriendList}/>
      <Stack.Screen name="BlockList"  component={BlockList}/>
      <Stack.Screen name="WorkDetails"  component={WorkDetails}/>
      <Stack.Screen name="SwitchProfile" component={SwitchProfile} />
      <Stack.Screen name="VerifyProfile" component={VerifyProfile} />
      <Stack.Screen name="BusinessProfile" component={BusinessProfileScreen} />
      <Stack.Screen name="BusinessInfo" component={BusinessInfo} />
      <Stack.Screen name="ExplorePeople" component={ExplorePeople} /> 
      <Stack.Screen name="Setting" component={Setting} /> 
      <Stack.Screen name="Notification" component={NotificationSetting} /> 
      <Stack.Screen name="BusinessFriend" component={BusinessFriendScan}/>
      <Stack.Screen name="ChatProfile" component={ChatProfile}/>
      <Stack.Screen name="BusinessShake" component={BusinessShake}/>
      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B0B0B',
  },
});
