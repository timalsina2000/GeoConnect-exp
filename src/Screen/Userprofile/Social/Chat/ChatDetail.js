import React, { useState } from 'react';
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
  Modal,
  Pressable,
  Switch,
} from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

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

  const [menuOpen, setMenuOpen] = useState(false);
  const [vanishMenuOpen, setVanishMenuOpen] = useState(false);
  const [vanishTime, setVanishTime] = useState('24 Hours');
  const [translateOpen, setTranslateOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('French');
  const [translateSettingsOpen, setTranslateSettingsOpen] = useState(false);
  const [showTranslateBtn, setShowTranslateBtn] = useState(true);
   
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
         <TouchableOpacity
         style={styles.headerCenterPress}
         onPress={() =>
           navigation.navigate('ChatProfile', {
             name,
             status,
             avatar,
           })
         }
         >
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
        </TouchableOpacity>  
        <View style={styles.headerRight}>
          <TouchableOpacity 
          
          
          style={[styles.headerBtn, { backgroundColor: '#F0F9E1' }]}>
            <Ionicons name="person-add-outline" size={20} color={DARK} />
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => setMenuOpen(true)}
          style={styles.headerBtn}>
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
          <TouchableOpacity style={styles.iconCircle}
            onPress={() =>  setTranslateOpen(true)}
          >
            <Ionicons name="add" size={22} color={DARK} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setVanishMenuOpen(true)}
          style={styles.iconCircle}>
            <Ionicons name="time-outline" size={20} color={DARK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconCircle}
            
          >
            <Ionicons name="gift-outline" size={20} color={DARK} />
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

      <Modal
              visible={menuOpen}
              transparent
              animationType="fade"
              onRequestClose={() => setMenuOpen(false)}
            >
              <Pressable style={styles.menuOverlay} onPress={() => setMenuOpen(false)}>
                <View style={styles.menuCard}>
                  <TouchableOpacity  
                  style={styles.menuItem} 
                  onPress={() => {
                      setMenuOpen(false);
                      setVanishMenuOpen(true);
                    }}
                  
                  >
                    <MaterialCommunityIcons name="clock-outline" size={22} color={DARK} />
                    <Text style={styles.menuText}>Vanish Mode</Text>
                    <MaterialIcons name="chevron-right" size={20} color="#767676" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                    <Ionicons name="notifications-off-outline" size={22} color={DARK} />
                    <Text style={styles.menuText}>Mute</Text>
                    <MaterialIcons name="chevron-right" size={20} color="#767676" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                    <Ionicons name="search-outline" size={22} color={DARK} />
                    <Text style={styles.menuText}>Search</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                    <MaterialCommunityIcons name="broom" size={22} color={DARK} />
                    <Text style={styles.menuText}>Clear History</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                    <Ionicons name="trash-outline" size={22} color={DARK} />
                    <Text style={styles.menuText}>Delete Chat</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => { 
                      setMenuOpen(false); 
                      setTranslateSettingsOpen(true); // Trigger the new settings popup
                    }}
                  >
                    <MaterialCommunityIcons name="translate" size={22} color={DARK} />
                    <Text style={styles.menuText}>Translate</Text>
                    <MaterialIcons name="chevron-right" size={20} color="#767676" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                    <MaterialCommunityIcons name="block-helper" size={22} color={DARK} />
                    <Text style={styles.menuText}>Block</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.menuItem, styles.menuItemLast]} onPress={() => setMenuOpen(false)}>
                    <Ionicons name="alert-circle-outline" size={22} color={DARK} />
                    <Text style={styles.menuText}>Report</Text>
                  </TouchableOpacity>
                </View>
              </Pressable>
            </Modal>

      <Modal
        visible={vanishMenuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setVanishMenuOpen(false)}
      >
        <Pressable style={styles.vanishOverlay} onPress={() => setVanishMenuOpen(false)}>
          <Pressable style={styles.vanishCard} onPress={() => {}}>
            <Text style={styles.vanishTitle}>Vanish Time</Text>

            {['24 Hours', '7 Days', '90 Days', 'Off'].map((item) => {
              const isSelected = vanishTime === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={styles.vanishRow}
                  onPress={() => {
                    setVanishTime(item);
                    setVanishMenuOpen(false);
                  }}
                >
                  <View style={styles.radioOuter}>
                    {isSelected ? <View style={styles.radioInner} /> : null}
                  </View>
                  <Text style={styles.vanishRowText}>{item}</Text>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={[styles.vanishRow, styles.vanishRowLast]}
              onPress={() => setVanishMenuOpen(false)}
            >
              <Text style={styles.customTimerText}>Custom Timer</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>

      <Modal
        visible={translateOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setTranslateOpen(false)}
      >
        <Pressable style={styles.languageOverlay} onPress={() => setTranslateOpen(false)}>
          <BlurView
            intensity={35}
            tint="dark"
            style={styles.languageBlur}
            pointerEvents="none"
          />
          <Pressable style={styles.languageSheet} onPress={() => {}}>
            <View style={styles.languageHandle} />

            <View style={styles.languageHeader}>
              <TouchableOpacity style={styles.backCircle}>
                <Ionicons name="arrow-back" size={16} color={DARK} />
              </TouchableOpacity>
              <Text style={styles.languageTitle}>Select Language</Text>
            </View>

            <View style={styles.languageList}>
              {['English (UK)', 'Chinese', 'French', 'German', 'Spanish'].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.languageItem,
                    selectedLanguage === item && styles.languageItemActive,
                  ]}
                  onPress={() => setSelectedLanguage(item)}
                >
                  <Text
                    style={[
                      styles.languageText,
                      selectedLanguage === item && styles.languageTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.languageActions}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setTranslateOpen(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.applyBtn}
                onPress={() => setTranslateOpen(false)}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      {/* Translate Settings Popup (Matching Design) */}
<Modal
  visible={translateSettingsOpen}
  transparent
  animationType="fade"
  onRequestClose={() => setTranslateSettingsOpen(false)}
>
  <Pressable style={styles.settingsOverlay} onPress={() => setTranslateSettingsOpen(false)}>
    <Pressable style={styles.settingsCard} onPress={() => {}}>
      {/* Header with Back Arrow */}
      <TouchableOpacity 
        style={styles.settingsBackBtn} 
        onPress={() => setTranslateSettingsOpen(false)}
      >
        <Ionicons name="arrow-back" size={24} color={DARK} />
      </TouchableOpacity>

      {/* Translate Message Section */}
      <Text style={styles.settingsLabel}>Translate message</Text>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsTitle}>Show Translate Button</Text>
        <Switch
          trackColor={{ false: "#E5E7EB", true: DARK }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#E5E7EB"
          onValueChange={() => setShowTranslateBtn(previousState => !previousState)}
          value={showTranslateBtn}
        />
      </View>

      <View style={styles.settingsDivider} />

      {/* Select Language Section */}
      <Text style={styles.settingsLabel}>Select language</Text>
      <TouchableOpacity 
        style={styles.settingsRow}
        onPress={() => {
            setTranslateSettingsOpen(false);
            setTranslateOpen(true); // Re-opens your existing language list
        }}
      >
        <Text style={styles.settingsTitle}>{selectedLanguage}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color={TEXT_GRAY} />
      </TouchableOpacity>
    </Pressable>
  </Pressable>
</Modal>





            
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
  headerCenterPress: {
    flex: 1,
    marginLeft: 12,
    marginRight: 10,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

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
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 80,
    paddingRight: 20,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 0,
    width: 230,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  menuItemLast: { borderBottomWidth: 0 },
  menuText: {
    marginLeft: 12,
    fontSize: 14,
    color: DARK,
    fontWeight: '500',
    flex: 1,
  },
  vanishOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 95,
  },
  vanishCard: {
    width: 110,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  vanishTitle: {
    fontSize: 12,
    color: DARK,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  vanishRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  vanishRowLast: {
    borderBottomWidth: 0,
  },
  radioOuter: {
    width: 11,
    height: 11,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8A8A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  radioInner: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: DARK,
  },
  vanishRowText: {
    fontSize: 11,
    color: '#4B4B4B',
  },
  customTimerText: {
    fontSize: 11,
    color: '#1A73E8',
    fontWeight: '500',
  },
  languageOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  languageBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  languageSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  languageHandle: {
    alignSelf: 'center',
    width: 48,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#D7D7D7',
    marginBottom: 10,
  },
  languageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  languageTitle: {
    fontSize: 24 / 1.5,
    fontWeight: '700',
    color: DARK,
  },
  languageList: {
    marginBottom: 14,
  },
  languageItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  languageItemActive: {
    backgroundColor: '#F2F2F2',
  },
  languageText: {
    fontSize: 13,
    color: '#909090',
  },
  languageTextActive: {
    color: DARK,
  },
  languageActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  cancelBtn: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  cancelText: {
    color: DARK,
    fontWeight: '500',
    fontSize: 16 / 1.1,
  },
  applyBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B9E35B',
  },
  applyText: {
    color: DARK,
    fontWeight: '500',
    fontSize: 16 / 1.1,
  },

  // Translate Settings Styles
  settingsOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)', // Dim background
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsCard: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  settingsBackBtn: {
    marginBottom: 20,
    width: 30,
  },
  settingsLabel: {
    fontSize: 13,
    color: '#9CA3AF', // Light gray label
    marginBottom: 12,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: DARK,
  },
  settingsDivider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 15,
  },
});
