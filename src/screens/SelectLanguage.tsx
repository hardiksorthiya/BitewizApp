import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import RadialBackground from '../components/RadialBackground';
import { RFPercentage } from 'react-native-responsive-fontsize';
import languageData from '../data/languages.json'; // 👈 local JSON import

const { width } = Dimensions.get('window');

interface Language {
  id: number;
  name: string;
  flag: string;
}

const SelectLanguage = ({ navigation }: any) => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    // Load dummy data
    setLanguages(languageData.languages);
  }, []);

  return (
    <RadialBackground>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Select your language</Text>
        <Text style={styles.subtitle}>Touch Anywhere to Start</Text>

        {/* Languages grid */}
        <View style={styles.grid}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.id}
              style={styles.langCard}
              onPress={() => navigation.replace('Home', { lang: lang.name })}
            >
              <Image source={{ uri: lang.flag }} style={styles.flag} />
              <Text style={styles.langText}>{lang.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Instruction */}
        <Text style={styles.voiceInstruction}>
          Or Say “Select [Language]” to choose your language
        </Text>

        {/* QR Section */}
        <View style={styles.qrSection}>
          {/* <Image
            source={require('../assets/images/qrcode.png')}
            style={styles.qr}
          /> */}
          <Text style={styles.qrText}>
            Scan the QR code to{'\n'}download our app
          </Text>
        </View>

        {/* Mic */}
        <View style={styles.micWrapper}>
          <Image
            source={require('../assets/images/mic.png')}
            style={styles.mic}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </RadialBackground>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: RFPercentage(4),
    fontFamily: 'Ambit-SemiBold',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: RFPercentage(2.2),
    fontFamily: 'Ambit-Regular',
    color: '#555',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  langCard: {
    width: width * 0.38,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#FFFFFFCC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    margin: 6,
  },
  flag: {
    width: 28,
    height: 28,
    marginRight: 10,
    borderRadius: 14,
  },
  langText: {
    fontSize: RFPercentage(2.2),
    fontFamily: 'Ambit-Regular',
    color: '#000',
  },
  voiceInstruction: {
    fontSize: RFPercentage(1.8),
    fontFamily: 'Ambit-Regular',
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  qrSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  qr: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  qrText: {
    fontSize: RFPercentage(2),
    fontFamily: 'Ambit-Regular',
    color: '#333',
  },
  micWrapper: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  mic: {
    width: 80,
    height: 80,
  },
});
