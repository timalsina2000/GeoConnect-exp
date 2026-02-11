import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const NEON = '#B9F54A';
const DARK = '#0B0B0B';
const BLUE = '#4D6CFF';
const LIGHT_BG = '#F7F7F7';
const TEXT_GRAY = '#7E7E7E';

export default function WorkDetails({ navigation, route }) {
  const profile = (route && route.params && route.params.profile) || {};

  const {
    name = '@Jenifeer',
    age = '24 yrs',
    subtitle = 'Single | Looking for short relationship',
    avatar = { uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000' },
    distance = '400m',
    verified = true,
  } = profile;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Set StatusBar to transparent to allow the green background to show behind it */}
      <StatusBar translucent backgroundColor="transparent" barStyle={LIGHT_BG} />
      
      {/* This is the Green Header Container at the very top */}
      <View style={styles.topGreenBar} />

      {/* The main content container with rounded top corners */}
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 40}}>
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.roundBtn}
              onPress={() => navigation?.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color={DARK} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Create for Work</Text>
            <View style={{ width: 36 }} />
          </View>

          {/* Work Info */}
          <Text style={styles.sectionTitle}>Work Info</Text>
          <Text style={styles.label}>Work name</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Graphic Design</Text>
          </View>
          <Text style={styles.label}>Industry</Text>
          <View style={styles.inputBoxRow}>
            <Text style={styles.inputText}>Design</Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color={TEXT_GRAY} />
          </View>

          <Text style={styles.label}>Upload Picture (0/5)</Text>
          <View style={styles.uploadRow}>
            <Image
              source={require('../../../../../../assets/image/welcome_bg.jpg')}
              style={styles.uploadThumb}
            />
            <View style={styles.uploadPlus}>
              <Text style={styles.uploadPlusText}>+</Text>
            </View>
          </View>

          {/* Experience */}
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.label}>Company name</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>XXX Digital</Text>
          </View>
          <Text style={styles.label}>Role</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Graphic Designer</Text>
          </View>
          <View style={styles.dateRow}>
            <View style={styles.dateCol}>
              <Text style={styles.label}>Start date</Text>
              <View style={styles.inputBoxRow}>
                <Text style={styles.inputText}>12 Aug 2015</Text>
                <MaterialIcons name="calendar-today" size={16} color={TEXT_GRAY} />
              </View>
            </View>
            <View style={styles.dateCol}>
              <Text style={styles.label}>End date</Text>
              <View style={styles.inputBoxRow}>
                <Text style={styles.inputText}>12 Aug 2020</Text>
                <MaterialIcons name="calendar-today" size={16} color={TEXT_GRAY} />
              </View>
            </View>
          </View>

          {/* Contact Info */}
          <Text style={styles.sectionTitle}>Contact Info</Text>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>jenifeer@gmail.com</Text>
          </View>
          <View style={styles.contactRow}>
            <View style={styles.contactCol}>
              <Text style={styles.label}>Location</Text>
              <View style={styles.inputBoxRow}>
                <Text style={styles.inputText}>Savr, Dhaka</Text>
                <MaterialIcons name="my-location" size={16} color={TEXT_GRAY} />
              </View>
            </View>
            <View style={styles.sameRow}>
              <View style={styles.checkDot} />
              <Text style={styles.sameText}>Same as current</Text>
            </View>
          </View>

          {/* Type */}
          <Text style={styles.sectionTitle}>Type</Text>
          <Text style={styles.label}>Type</Text>
          <View style={styles.inputBoxRow}>
            <Text style={styles.inputText}>Creative</Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color={TEXT_GRAY} />
          </View>
          <Text style={styles.label}>Role</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Designer</Text>
          </View>

          {/* Skills */}
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillRow}>
            <View style={styles.skillPill}>
              <Text style={styles.skillText}>Graphic design</Text>
              <Text style={styles.skillClose}>×</Text>
            </View>
            <View style={styles.skillPill}>
              <Text style={styles.skillText}>Digital marketing</Text>
              <Text style={styles.skillClose}>×</Text>
            </View>
            <View style={styles.skillAdd}>
              <Text style={styles.skillAddText}>+</Text>
            </View>
          </View>

          {/* CV */}
          <Text style={styles.sectionTitle}>CV</Text>
          <View style={styles.fileRow}>
            <View style={styles.fileCard}>
              <Text style={styles.fileText}>PDF</Text>
            </View>
            <View style={styles.fileAdd}>
              <Text style={styles.fileAddText}>+</Text>
            </View>
          </View>

          {/* Cover letter */}
          <Text style={styles.sectionTitle}>Cover letter</Text>
          <View style={styles.fileRow}>
            <View style={styles.fileCard}>
              <Text style={styles.fileText}>PDF</Text>
            </View>
            <View style={styles.fileAdd}>
              <Text style={styles.fileAddText}>+</Text>
            </View>
          </View>

          {/* Interests industries */}
          <Text style={styles.sectionTitle}>Interests industries</Text>
          <View style={styles.inputBoxRow}>
            <Text style={styles.inputText}>Graphics Design</Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color={TEXT_GRAY} />
          </View>

          {/* Looking for */}
          <Text style={styles.sectionTitle}>What are you looking for?</Text>
          <View style={styles.inputBoxRow}>
            <Text style={styles.inputText}>Looking for work</Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color={TEXT_GRAY} />
          </View>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: DARK, // Black background as requested
    marginTop: Platform.OS === 'android' ? 0 : 0,
  },
  topGreenBar: {
    height: 100,
    backgroundColor: NEON,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    top: 75,
    width: width - 40,
    alignSelf: 'center',
    
  },
  mainContainer: {
    top:53,
    flex: 1,
    backgroundColor: LIGHT_BG,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -70, // Pulls the white container over the green one
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 16,
  },
  roundBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: DARK,
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 12,
    color: TEXT_GRAY,
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  inputBox: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  inputBoxRow: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    fontSize: 13,
    color: DARK,
  },
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  uploadThumb: {
    width: 42,
    height: 42,
    borderRadius: 8,
    marginRight: 10,
  },
  uploadPlus: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAF7C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadPlusText: {
    fontSize: 16,
    fontWeight: '800',
    color: DARK,
  },
  dateRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  dateCol: {
    flex: 1,
    marginRight: 10,
  },
  contactRow: {
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  contactCol: {
    marginBottom: 10,
  },
  sameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  checkDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  sameText: {
    fontSize: 11,
    color: TEXT_GRAY,
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  skillPill: {
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillText: {
    fontSize: 11,
    color: DARK,
    fontWeight: '600',
    marginRight: 6,
  },
  skillClose: {
    fontSize: 12,
    color: TEXT_GRAY,
    fontWeight: '700',
  },
  skillAdd: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EAF7C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillAddText: {
    fontSize: 14,
    fontWeight: '800',
    color: DARK,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  fileCard: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  fileText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 10,
  },
  fileAdd: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EAF7C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileAddText: {
    fontSize: 14,
    fontWeight: '800',
    color: DARK,
  },
  saveBtn: {
    marginTop: 12,
    marginHorizontal: 16,
    backgroundColor: '#CFF47A',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveText: {
    color: DARK,
    fontWeight: '800',
    fontSize: 14,
  },
  
});
