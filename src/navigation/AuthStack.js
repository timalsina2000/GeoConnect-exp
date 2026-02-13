import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import SplashScreen from '../Screen/auth/SplashScreen';
import WelcomeScreen from '../Screen/auth/WelcomeScreen';
import LoginScreen from '../Screen/auth/Login/LoginScreen';
import VerifySuccessScreen from '../Screen/auth/Login/VerifySuccessScreen';
import AccountTypeScreen from '../Screen/auth/creatAccount/AccountTypeScreen';
import CreateAccountScreen from '../Screen/auth/creatAccount/CreateAccountScreen';
import OtpVerifyScreen from '../Screen/auth/creatAccount/OtpVerifyScreen';
import NamePasswordScreen from '../Screen/auth/creatAccount/NamePasswordScreen';
import GenderAgeScreen from '../Screen/auth/creatAccount/GenderAgeScreen';
import CreateUsernameScreen from '../Screen/auth/creatAccount/CreateUsernameScreen';
import UsernameCheckingScreen from '../Screen/auth/creatAccount/UsernameCheckingScreen';
import TermsPoliciesScreen from '../Screen/auth/creatAccount/TermsPoliciesScreen';
import NotificationsScreen from '../Screen/auth/creatAccount/NotificationsScreen';
import WelcomeFinalScreen from '../Screen/auth/creatAccount/WelcomeFinalScreen';
import DistanceScreen from '../Screen/auth/creatAccount/profileDetails/DistanceScreen';
import AboutScreen from '../Screen/auth/creatAccount/profileDetails/AboutScreen';
import InterestsScreen from '../Screen/auth/creatAccount/profileDetails/InterestsScreen';
import BioScreen from '../Screen/auth/creatAccount/profileDetails/BioScreen';
import AddPhotoScreen from '../Screen/auth/creatAccount/profileDetails/AddPhotoScreen';
import PhotoSheetScreen from '../Screen/auth/creatAccount/profileDetails/PhotoSheetScreen';
import CameraPermissionScreen from '../Screen/auth/creatAccount/profileDetails/CameraPermissionScreen';
import GalleryPermissionScreen from '../Screen/auth/creatAccount/profileDetails/GalleryPermissionScreen';
import AddPhotoFilledScreen from '../Screen/auth/creatAccount/profileDetails/AddPhotoFilledScreen';
import SetAreaScreen from '../Screen/auth/creatAccount/profileDetails/SetAreaScreen';
import BusinessInfo from '../Screen/auth/creatAccount/profileDetails/aboutBusinees/BusinessInfo';
import Education from '../Screen/auth/creatAccount/profileDetails/aboutBusinees/Education';
import AboutCompany from '../Screen/auth/creatAccount/profileDetails/aboutBusinees/AboutCompany';

  

enableScreens();

const Stack = createNativeStackNavigator();

export default function AuthStack({ onAuthSuccess }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="AccountType" component={AccountTypeScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ onAuthSuccess }}
      />
      <Stack.Screen
        name="VerifySuccess"
        component={VerifySuccessScreen}
        initialParams={{ onAuthSuccess }}
      />
      <Stack.Screen
        name="NamePassword"
        component={NamePasswordScreen}
        initialParams={{ onAuthSuccess }}
      />
      <Stack.Screen name="GenderAge" component={GenderAgeScreen} />
      <Stack.Screen name="CreateUsername" component={CreateUsernameScreen} />
      <Stack.Screen name="UsernameChecking" component={UsernameCheckingScreen} />
      <Stack.Screen name="TermsPolicies" component={TermsPoliciesScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen
        name="WelcomeFinal"
        component={WelcomeFinalScreen}
        initialParams={{ onAuthSuccess }}
      />
      <Stack.Screen name="OnboardingDistance" component={DistanceScreen} />
      <Stack.Screen name="OnboardingBusinessInfo" component={BusinessInfo} />
      <Stack.Screen name="OnboardingEducation" component={Education} />
      <Stack.Screen name="OnboardingAboutCompany" component={AboutCompany} />
      <Stack.Screen name="OnboardingAbout" component={AboutScreen} />
      <Stack.Screen name="OnboardingInterests" component={InterestsScreen} />
      <Stack.Screen name="OnboardingBio" component={BioScreen} />
      <Stack.Screen name="OnboardingAddPhoto" component={AddPhotoScreen} />
      <Stack.Screen name="OnboardingPhotoSheet" component={PhotoSheetScreen} />
      <Stack.Screen name="OnboardingCameraPermission" component={CameraPermissionScreen} />
      <Stack.Screen name="OnboardingGalleryPermission" component={GalleryPermissionScreen} />
     
      
      <Stack.Screen
        name="OnboardingAddPhotoFilled"
        component={AddPhotoFilledScreen}
        initialParams={{ onAuthSuccess }}
      />
      <Stack.Screen
        name="OnboardingSetArea"
        component={SetAreaScreen}
        initialParams={{ onAuthSuccess }}
      />
    </Stack.Navigator>
  );
}
