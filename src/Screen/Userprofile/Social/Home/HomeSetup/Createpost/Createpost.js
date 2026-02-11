// CreatePostScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { Ionicons, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');
const DARK = '#0B0B0B';
const LIGHT_TEXT = '#9B9B9B';
const BORDER = '#F3F3F3';
const BG = '#FFFFFF';
const NEON = '#B9F54A';
const PINK = '#EB6A8C';


export default function CreatePostScreen({ navigation }) {
  const [caption, setCaption] = useState('Checkout new place 🍷');
  const [location, setLocation] = useState('Savar, Dhaka');
  const [timer, setTimer] = useState('20 minutes');
  const [media, setMedia] = useState([]);

  const handleAddReel = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 0,
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result.assets || []);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Post</Text>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => (navigation && navigation.goBack ? navigation.goBack() : null)}
        >
          <Ionicons name="close" size={20} color={DARK} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Info Card */}
        <View style={styles.userCard}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              @jenifeer <Text style={styles.userAge}>20yrs</Text>
            </Text>
          </View>
        </View>

        {/* Caption */}
        <View style={styles.field}>
          <Text style={styles.label}>Caption</Text>
          <View style={[styles.inputWrap, styles.inputWrapCaption]}>
            <TextInput
              style={[styles.input, styles.captionInput]}
              value={caption}
              onChangeText={setCaption}
              placeholder="Write a caption..."
              placeholderTextColor={LIGHT_TEXT}
              multiline={true}
              numberOfLines={2}
            />
          </View>
        </View>

        {/* Location */}
        <View style={styles.field}>
          <Text style={styles.label}>Location</Text>
          <View style={[styles.inputWrap, styles.inputWrapLocation]}>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Add location"
              placeholderTextColor={LIGHT_TEXT}
            />
            <MaterialCommunityIcons name="target" size={14} color="#0F0F0F" style={{marginLeft: 4}} />
          </View>
        </View>

        {/* Vanish Timer */}
        <View style={styles.field}>
          <Text style={styles.label}>Vanish Timer</Text>
          <TouchableOpacity style={[styles.inputWrap, styles.timerBtn]} onPress={() => console.log('Open timer picker')}>
            <Text style={styles.timerText}>{timer}</Text>
            <Ionicons name="chevron-forward" size={20} color={LIGHT_TEXT} />
          </TouchableOpacity>
        </View>

        {/* Add Reel */}
        <TouchableOpacity style={styles.addReelRow} onPress={handleAddReel}>
          <View style={styles.neonDot} />
          <MaterialCommunityIcons name="attachment" size={18} color={DARK} style={styles.reelIcon} />
          <Text style={styles.addReelText}>Add Reel</Text>
        </TouchableOpacity>
        {media.length > 0 && (
          <Text style={styles.mediaCount}>{media.length} selected</Text>
        )}
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.postBtn}
          onPress={() => console.log('Post created!')}
        >
          <Text style={styles.postBtnText}>Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: BG,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 60 : 26,
    paddingBottom: 12,
    position: 'relative',
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: DARK,
  },
  closeBtn: {
    position: 'absolute',
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 140, // leave space for footer
  },

  /* --- User Card --- */
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BG,
    padding: 14,
    borderRadius: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: BORDER,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
    borderWidth: 2,
    borderColor: PINK, // neon ring around avatar like design
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: '700',
    fontSize: 16,
    color: DARK,
  },
  userAge: {
    color: LIGHT_TEXT,
    fontWeight: '400',
    fontSize: 14,
  },

  /* --- Fields --- */
  field: {
    marginBottom: 18,
  },
  label: {
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 8,
    color: DARK,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: BG,
  },
  inputWrapCaption: {
    borderWidth: 1,
    borderColor: DARK, // caption field has thin dark border in design
    height: 56,
    borderRadius: 18,
  },
  inputWrapLocation: {
    borderWidth: 1,
    borderColor: '#000', // thin black border
    borderRadius: 18,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: DARK,
  },
  captionInput: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  timerBtn: {
    borderWidth: 1,
    borderColor: '#000', // thin black border
    borderRadius: 18,
    justifyContent: 'space-between',
    backgroundColor: BG,
  },
  timerText: {
    fontWeight: '600',
    fontSize: 14,
    color: DARK,
  },

  /* --- Add Reel --- */
  addReelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  reelIcon: {
    width: 20,
    height: 20,
    borderRadius: 6,
    backgroundColor: NEON,
    marginRight: 8,
    borderWidth: 1,
    marginRight: 8,
    borderColor: '#E8F9C8',
  },

  addReelText: {
    color: DARK,
    fontWeight: '600',
    fontSize: 14,
  },
  mediaCount: {
    marginTop: 8,
    color: LIGHT_TEXT,
    fontSize: 12,
    fontWeight: '500',
  },

  /* --- Footer --- */
  footer: {
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: BG,
    borderTopWidth: 0,
    alignItems: 'center',
  },
  postBtn: {
    width: width - 32,
    height: 52,
    borderRadius: 26,
    backgroundColor: NEON,
    alignItems: 'center',
    justifyContent: 'center',
    // subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  postBtnText: {
    color: DARK,
    fontWeight: '700',
    fontSize: 16,
  },
});
