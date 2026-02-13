import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
  Alert,
  Image,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const NEON_GREEN = '#CFF47A';
const DARK = '#0B0B0B';
const GRAY_TEXT = '#6B7280';
const BORDER_COLOR = '#E5E7EB';

export default function VerifyProfile({ navigation }) {
  const [selectedID, setSelectedID] = useState('ID Card');
  const [isAgreed, setIsAgreed] = useState(true);
  const [step, setStep] = useState('document');
  const [documentUri, setDocumentUri] = useState(null);
  const [selfieUri, setSelfieUri] = useState(null);
  const [showDocPreview, setShowDocPreview] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const submitTimeoutRef = useRef(null);

  const idTypes = ["Driver's License", 'ID Card', 'Passport'];

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Camera permission is required to take a photo.');
      return false;
    }
    return true;
  };

  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Gallery permission is required to upload a photo.');
      return false;
    }
    return true;
  };

  const openDocumentCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
      allowsEditing: false,
    });

    if (!result.canceled && result.assets?.length) {
      setDocumentUri(result.assets[0].uri);
      setShowDocPreview(true);
    }
  };

  const openDocumentGallery = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
      allowsEditing: false,
    });

    if (!result.canceled && result.assets?.length) {
      setDocumentUri(result.assets[0].uri);
      setStep('selfie');
      setSelfieUri(null);
    }
  };

  const openSelfieCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
      allowsEditing: false,
      cameraType: ImagePicker.CameraType.front,
    });

    if (!result.canceled && result.assets?.length) {
      setSelfieUri(result.assets[0].uri);
    }
  };

  const handleUseDocument = () => {
    if (!documentUri) return;
    setShowDocPreview(false);
    setStep('selfie');
    setSelfieUri(null);
  };

  const handleSubmit = () => {
    if (!selfieUri || submitting) return;

    setSubmitting(true);
    submitTimeoutRef.current = setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
    }, 1600);
  };

  const handleResetProcess = () => {
    setShowSuccess(false);
    setStep('document');
    setDocumentUri(null);
    setSelfieUri(null);
    setShowDocPreview(false);
    setSubmitting(false);
  };

  const RadioButton = ({ label }) => {
    const isSelected = selectedID === label;
    return (
      <TouchableOpacity
        style={[
          styles.radioOption,
          isSelected ? styles.radioSelected : styles.radioUnselected,
        ]}
        onPress={() => setSelectedID(label)}
      >
        <View style={[styles.outerCircle, isSelected && styles.outerCircleActive]}>
          {isSelected && <View style={styles.innerCircle} />}
        </View>
        <Text style={[styles.radioLabel, isSelected && styles.radioLabelActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderDocumentStep = () => (
    <>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Upload your document</Text>
        <Text style={styles.description}>
          you have to upload your govt. valid document to verify your first steps of profile verification in Geo app
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select your ID type</Text>
          <Text style={styles.sectionSubtitle}>
            We'll take 2 pictures of your ID. What ID would like to use?
          </Text>

          <View style={styles.radioGroup}>
            {idTypes.map((type) => (
              <RadioButton key={type} label={type} />
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsAgreed(!isAgreed)}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons
            name={isAgreed ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color={DARK}
          />
          <Text style={styles.checkboxText}>
            This photo won't be uploaded to your profile. It, will only be used to verify you{' '}
            <Text style={styles.boldText}>Contact Support</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryBtn} onPress={openDocumentCamera}>
            <Text style={styles.primaryBtnText}>Take a Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} onPress={openDocumentGallery}>
            <Text style={styles.secondaryBtnText}>Upload from Device</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={showDocPreview} animationType="fade" transparent onRequestClose={() => setShowDocPreview(false)}>
        <View style={styles.previewOverlay}>
          <TouchableOpacity style={styles.previewClose} onPress={() => setShowDocPreview(false)}>
            <Ionicons name="close" size={22} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.previewImageWrap}>
            {documentUri ? (
              <Image source={{ uri: documentUri }} style={styles.previewImage} resizeMode="contain" />
            ) : null}
          </View>

          <View style={styles.previewFooter}>
            <TouchableOpacity style={styles.previewRetakeBtn} onPress={openDocumentCamera}>
              <Text style={styles.previewRetakeText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.previewUseBtn} onPress={handleUseDocument}>
              <Text style={styles.previewUseText}>Use</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );

  const renderSelfieStep = () => (
    <View style={styles.selfieContainer}>
      <Text style={styles.selfieTitle}>Take a Selfie</Text>
      <Text style={styles.selfieSubtitle}>
        Take a instant your face verification by taking a selfie
      </Text>

      <View style={styles.selfieRow}>
        <View style={styles.documentCard}>
          <View style={styles.documentAccent} />
          {documentUri ? (
            <Image source={{ uri: documentUri }} style={styles.documentImage} resizeMode="cover" />
          ) : null}
        </View>

        <TouchableOpacity
          style={[styles.selfieCard, !selfieUri && styles.selfiePlaceholder]}
          onPress={openSelfieCamera}
          activeOpacity={0.85}
        >
          {selfieUri ? (
            <Image source={{ uri: selfieUri }} style={styles.selfieImage} resizeMode="cover" />
          ) : null}
        </TouchableOpacity>
      </View>

      <View style={styles.selfieFooter}>
        <TouchableOpacity
          style={[styles.selfiePrimaryBtn, submitting && styles.selfiePrimaryBtnDisabled]}
          onPress={selfieUri ? handleSubmit : openSelfieCamera}
          disabled={submitting}
        >
          {submitting ? (
            <View style={styles.submittingRow}>
              <Text style={styles.selfiePrimaryText}>Submitting..</Text>
              <ActivityIndicator size="small" color={DARK} style={styles.spinner} />
            </View>
          ) : (
            <Text style={styles.selfiePrimaryText}>{selfieUri ? 'Submit' : 'Take a Photo'}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.selfieRetakeBtn}
          onPress={() => {
            if (selfieUri) {
              openSelfieCamera();
            } else {
              setStep('document');
            }
          }}
          disabled={submitting}
        >
          <Text style={styles.selfieRetakeText}>Retake</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            if (step === 'selfie') {
              setStep('document');
              return;
            }
            navigation?.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color={DARK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify Your Profile</Text>
      </View>

      {step === 'document' ? renderDocumentStep() : renderSelfieStep()}

      <Modal visible={showSuccess} transparent animationType="slide" onRequestClose={() => setShowSuccess(false)}>
        <View style={styles.successOverlay}>
          <View style={styles.successSheet}>
            <View style={styles.successCheckWrap}>
              <Ionicons name="checkmark" size={40} color={DARK} />
            </View>
            <Text style={styles.successTime}>20:25:16</Text>
            <Text style={styles.successTitle}>Successfully sent!</Text>
            <Text style={styles.successDesc}>
              Your profile picture have been submitted successfully. We will inform you after completed verification.
            </Text>
            <TouchableOpacity
              style={styles.successBtn}
              onPress={() => {
                handleResetProcess();
                navigation?.goBack();
              }}
            >
              <Text style={styles.successBtnText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: DARK,
    marginRight: 44,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: DARK,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: GRAY_TEXT,
    lineHeight: 20,
    marginBottom: 24,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: GRAY_TEXT,
    marginBottom: 20,
  },
  radioGroup: {
    gap: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
  },
  radioUnselected: {
    borderColor: BORDER_COLOR,
    backgroundColor: '#FFF',
  },
  radioSelected: {
    borderColor: DARK,
    backgroundColor: DARK,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GRAY_TEXT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  outerCircleActive: {
    borderColor: NEON_GREEN,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: NEON_GREEN,
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: GRAY_TEXT,
  },
  radioLabelActive: {
    color: '#FFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  checkboxText: {
    flex: 1,
    fontSize: 13,
    color: GRAY_TEXT,
    marginLeft: 10,
    lineHeight: 18,
  },
  boldText: {
    fontWeight: '700',
    color: DARK,
  },
  footer: {
    gap: 12,
    marginBottom: 20,
  },
  primaryBtn: {
    backgroundColor: NEON_GREEN,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  secondaryBtn: {
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  previewOverlay: {
    flex: 1,
    backgroundColor: '#050505',
    paddingHorizontal: 12,
    paddingTop: 36,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  previewClose: {
    alignSelf: 'flex-end',
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImage: {
    width: '100%',
    height: 260,
  },
  previewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  previewRetakeBtn: {
    flex: 1,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#3A3A3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewRetakeText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  previewUseBtn: {
    flex: 1,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#B7E05D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewUseText: {
    color: DARK,
    fontWeight: '700',
    fontSize: 16,
  },
  selfieContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  selfieTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#111111',
  },
  selfieSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: '#6B6B6B',
  },
  selfieRow: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
  },
  documentCard: {
    width: '44%',
    height: 94,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
    position: 'relative',
  },
  documentAccent: {
    width: 4,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#2D67FF',
    zIndex: 2,
  },
  documentImage: {
    width: '100%',
    height: '100%',
  },
  selfieCard: {
    width: '44%',
    height: 94,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#DADADA',
  },
  selfiePlaceholder: {
    borderWidth: 1,
    borderColor: '#5B5B5B',
    borderStyle: 'dashed',
  },
  selfieImage: {
    width: '100%',
    height: '100%',
  },
  selfieFooter: {
    marginTop: 'auto',
    paddingBottom: 18,
    gap: 10,
  },
  selfiePrimaryBtn: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#B7E05D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfiePrimaryBtnDisabled: {
    opacity: 0.85,
  },
  selfiePrimaryText: {
    color: DARK,
    fontSize: 20,
    fontWeight: '500',
  },
  submittingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spinner: {
    marginLeft: 8,
  },
  selfieRetakeBtn: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  selfieRetakeText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#111111',
  },
  successOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  successSheet: {
    backgroundColor: '#050505',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 18,
    paddingTop: 40,
    paddingBottom: 26,
    alignItems: 'center',
  },
  successCheckWrap: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#B7E05D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTime: {
    marginTop: 14,
    color: '#B7E05D',
    fontSize: 12,
  },
  successTitle: {
    marginTop: 6,
    color: '#FFFFFF',
    fontSize: 33,
    fontWeight: '700',
  },
  successDesc: {
    marginTop: 10,
    color: '#BFBFBF',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  successBtn: {
    marginTop: 22,
    width: '100%',
    height: 54,
    borderRadius: 14,
    backgroundColor: '#B7E05D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successBtnText: {
    color: '#111111',
    fontSize: 23,
    fontWeight: '600',
  },
});
