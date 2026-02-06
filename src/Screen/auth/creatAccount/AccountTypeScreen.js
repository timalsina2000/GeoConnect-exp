
import React, { useMemo, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';





const OPTIONS = [
  {
    id: 'social',
    title: 'Social',
    subtitle: 'Spend time and discover nearby people for real-life moments.',
  },
  {
    id: 'business',
    title: 'Business',
    subtitle: 'Promote and connect with nearby customers and communities.',
  },
];

export default function AccountTypeScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState('social');
  const selectedLabel = useMemo(() => OPTIONS.find((item) => item.id === selectedId)?.title, [selectedId]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.header}>

          </View>

          <Text style={styles.title}> <Text style={{ color: '#B9F54A', }}>What kind of account</Text>  are you{'\n'}looking to kickstart today?</Text>
          <Text style={styles.subtitle}>
            Inquiring about your preferred account type for today's launch!
          </Text>

          <View style={styles.cards}>
            {OPTIONS.map((option) => {
              const isActive = option.id === selectedId;
              return (
                <TouchableOpacity
                  key={option.id}
                  activeOpacity={0.92}
                  onPress={() => setSelectedId(option.id)}
                  style={[styles.card, isActive && styles.cardActive]}
                >
                  <ImageBackground
                    source={require('../../../../assets/image/welcome_bg.jpg')}
                    style={styles.cardImage}
                    imageStyle={styles.cardImageStyle}
                  >
                    {/* Card content */}
                    <View style={styles.cardOverlay}>
                      <Text style={styles.cardTitle}>{option.title}</Text>
                      <Text style={styles.cardSubtitle}>{option.subtitle}</Text>
                    </View>

                    {/* Arrow button inside each card (right side) */}
                    <TouchableOpacity
                      activeOpacity={0.85}
                      onPress={() => navigation.navigate('CreateAccount', { accountType: option.title })}
                      style={[styles.cardArrow, isActive && styles.cardArrowActive]}
                      accessibilityLabel={`Continue with ${option.title}`}
                      hitSlop={{ top: 20, left: 10, right: 10 }}
                    >
                      <MaterialIcons
                        name="arrow-forward-ios"
                        size={26}
                        color="#0B0B0B"
                        style={styles.cardArrowIcon}
                      />
                    </TouchableOpacity>
                  </ImageBackground>


                </TouchableOpacity>
              );
            })}
          </View>


        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FAF9F9',
  },
  container1: {
    top: 73,
    flex: 1,
    backgroundColor: '#E4E4E4',
    borderRadius: 32,
  },
  container: {
    flex: 1,
    top: 13,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#0B0B0B',
    borderRadius: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
  title: {
    color: '#FBFCFB',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 22,
  },
  subtitle: {
    color: '#8D8D8D',
    fontSize: 12,
    marginBottom: 16,
  },
  cards: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#151515',
    borderRadius: 18,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#232323',
    minHeight: 250,
    marginTop: 20,
  },
  cardActive: {
    borderColor: '#B9F54A',
  },
  cardImage: {
    flex: 1,
    height: 250,
    justifyContent: 'flex-end',
  },
  cardImageStyle: {
    resizeMode: 'cover',
  },
  cardOverlay: {
    padding: 14,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingRight: 100, // leave space for the arrow on the right
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardSubtitle: {
    color: '#B7B7B7',
    fontSize: 12,
    lineHeight: 18,
  },
  cardChip: {
    position: 'absolute',
    right: 14,
    top: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#101010',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    zIndex: 3,
  },
  cardChipActive: {
    backgroundColor: '#B9F54A',
    borderColor: '#B9F54A',
  },
  cardChipText: {
    color: '#CFCFCF',
    fontSize: 10,
  },
  cardChipTextActive: {
    color: '#0B0B0B',
    fontWeight: '700',
  },

  /* Arrow inside each card */
  cardArrow: {
    position: 'absolute',
    right: 14,
    top: '50%',
    transform: [{ translateY: -28 }],
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#B9F54A',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
    marginTop: 60,
  },
  cardArrowActive: {
    backgroundColor: '#B9F54A',
    marginTop: 60,
  },
  cardArrowIcon: {
    transform: [{ translateX: 1 }],
  },

  footer: {
    paddingBottom: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#8D8D8D',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12,
  },
  footerLink: {
    color: '#B9F54A',
    fontWeight: '600',
  },
});
