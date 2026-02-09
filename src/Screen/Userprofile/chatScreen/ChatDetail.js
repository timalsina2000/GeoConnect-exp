import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Platform,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const DARK = '#0B0B0B';
const NEON = '#CFF47A'; // Refined neon color from image
const LIGHT_GRAY = '#F3F4F6';
const TEXT_GRAY = '#6B7280';

export default function ChatDetail({ navigation, route }) {
  const {
    name = 'Jenifeer',
    status = 'Active 5min ago',
    avatar,
  } = route?.params || {};

  return (
    <SafeAreaView style={styles.safe}>
      {/* Fix Android Status Bar Overlap */}
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent={true} 
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 7 : 0}
      >
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={DARK} />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Image
            source={
              avatar
                ? { uri: avatar }
                : { uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100' }
            }
            style={styles.headerAvatar}
          />
          <View>
            <Text style={styles.headerName}>{name}</Text>
            <Text style={styles.headerStatus}>{status}</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={[styles.headerBtn, { backgroundColor: '#F0F9E1' }]}>
            <Ionicons name="person-add-outline" size={20} color={DARK} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <MaterialIcons name="more-vert" size={22} color={DARK} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Body with Doodle Background */}
      <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/originals/ab/ab/60/abab600f6ab039396996f64267250c60.jpg' }} // Optional doodle pattern
        style={styles.chatBackground}
        imageStyle={{ opacity: 0.05, tintColor: '#000' }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          
          {/* Left Bubble (Received) */}
          <View style={styles.leftContainer}>
            <View style={styles.leftBubble}>
              <View style={styles.langSelector}>
                <Text style={styles.langText}>French</Text>
                <MaterialCommunityIcons name="unfold-more-horizontal" size={14} color={TEXT_GRAY} />
              </View>
              <Text style={styles.msgText}>Hey there! What’s up?</Text>
            </View>
            <Text style={styles.timeTextLeft}>08:20 AM</Text>
          </View>

          {/* Right Bubble (Sent) */}
          <View style={styles.rightContainer}>
            <View style={styles.rightBubble}>
              <Text style={styles.msgText}>
                Nothing. Just chilling and watching Youtube. What about you ?
              </Text>
            </View>
            <View style={styles.rightMeta}>
              <Text style={styles.timeTextRight}>15 Aug   08:20 AM</Text>
              <Ionicons name="checkmark-done" size={16} color="#4CAF50" />
            </View>
          </View>

        </ScrollView>
      </ImageBackground>

      {/* Improved Input Bar */}
      <View style={styles.inputBar}>
        <View style={styles.inputLeftIcons}>
          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="add" size={22} color={DARK} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="time-outline" size={20} color={DARK} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="calendar-outline" size={20} color={DARK} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Type something" 
            placeholderTextColor="#9CA3AF" 
            style={styles.textInput} 
          />
        </View>

        <TouchableOpacity style={styles.sendBtn}>
          <MaterialCommunityIcons name="send" size={20} color="#fff" style={{ transform: [{ rotate: '-45deg' }] }} />
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
  flex: {
    flex: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#FF70A6', // Matches the pink ring in image
  },
  headerName: { fontSize: 16, fontWeight: '700', color: DARK },
  headerStatus: { fontSize: 12, color: TEXT_GRAY },
  headerRight: { flexDirection: 'row', gap: 8 },

  chatBackground: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { padding: 16 },

  // Left Bubble Styling
  leftContainer: { alignSelf: 'flex-start', marginBottom: 20 },
  leftBubble: {
    backgroundColor: '#FFF',
    padding: 12,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    maxWidth: '85%',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
  },
  langSelector: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 4,
    width: 70
  },
  langText: { fontSize: 11, color: TEXT_GRAY, marginRight: 4 },
  msgText: { fontSize: 14, color: DARK, lineHeight: 20 },
  timeTextLeft: { fontSize: 11, color: TEXT_GRAY, marginTop: 6, marginLeft: 4 },

  // Right Bubble Styling
  rightContainer: { alignSelf: 'flex-end', marginBottom: 20, alignItems: 'flex-end' },
  rightBubble: {
    backgroundColor: NEON,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    maxWidth: '85%',
  },
  rightMeta: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 6 
  },
  timeTextRight: { fontSize: 11, color: TEXT_GRAY, marginRight: 6 },

  // Input Bar Styling
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFF',
  },
  inputLeftIcons: { flexDirection: 'row', gap: 8 },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  textInput: { flex: 1, fontSize: 14, color: DARK },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E5E7EB', // Matches the light gray circle in image
    alignItems: 'center',
    justifyContent: 'center',
  },
});
