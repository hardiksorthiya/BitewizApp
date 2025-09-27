import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import RadialBackground from '../components/RadialBackground'; // 👈 import here
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const Splash = ({ navigation }: any) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.3)).current;

  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        easing: Easing.out(Easing.ease),
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 1200,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, []);

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => navigation.replace('SelectLanguage')}
      activeOpacity={1}
    >
      <RadialBackground>
        <View style={styles.container}>
          {/* Logo */}
          <Animated.Image
            source={require('../assets/images/logo.png')}
            style={[
              styles.logo,
              { opacity: logoOpacity, transform: [{ scale: logoScale }] },
            ]}
            resizeMode="contain"
          />

          {/* Text */}
          <View style={styles.textContainer}>
            <Animated.Text
              style={[
                styles.title,
                {
                  opacity: textOpacity,
                  transform: [{ translateY: textTranslateY }],
                },
              ]}
            >
              Welcome to Bitewiz
            </Animated.Text>

            <Animated.Text
              style={[
                styles.subtitle,
                {
                  opacity: textOpacity,
                  transform: [{ translateY: textTranslateY }],
                },
              ]}
            >
              Touch Anywhere to Start
            </Animated.Text>
          </View>

          {/* Circle */}
          <Image
            source={require('../assets/images/circle.png')}
            style={styles.circle}
            resizeMode="contain"
          />

          {/* Mic Box */}
          <LinearGradient
            colors={['#f4fafc', '#ffffff']} // Border gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.micBoxWrapper}
          >
            <LinearGradient
              colors={['#e7f5faff', '#EAECF6']} // Background gradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.micBoxInner}
            >
              <Image
                source={require('../assets/images/mic.png')}
                style={styles.mic}
                resizeMode="contain"
              />
            </LinearGradient>
          </LinearGradient>
        </View>
      </RadialBackground>
    </TouchableOpacity>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },
  logo: {
    width: width * 0.5,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: -40,
  },
  title: {
    fontSize: RFPercentage(4.5),
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Ambit-SemiBold',
  },
  subtitle: {
    fontSize: RFPercentage(2.5),
    color: '#555',
    marginTop: 10,
    fontFamily: 'Ambit-Regular',
  },
  circle: {
    width: width * 0.3,
  },
  micBoxWrapper: {
    position: 'absolute',
    bottom: 70,
    width: width * 0.6,
    height: 80,
    borderRadius: 50,
    padding: 2, // border thickness

    // Shadow
    shadowColor: '#00000045',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02, // 4% opacity
    shadowRadius: 32,
    elevation: 3, // Android shadow
  },

  micBoxInner: {
    flex: 1,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20, // to push mic inside
  },

  mic: {
    width: 36,
    height: 36,
    tintColor: '#8ECDE2',
  },
});
