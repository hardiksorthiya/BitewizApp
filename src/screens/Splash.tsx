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
import LinearGradient from 'react-native-linear-gradient'; // 👈 import
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
      onPress={() => navigation.replace('Home')}
      activeOpacity={1}
    >
      <LinearGradient
        colors={['#D6EAEF', '#EAECF6', '#B1CCE2']} // 👈 3-color gradient
        start={{ x: 0, y: 0 }} // top-left
        end={{ x: 1, y: 1 }} // bottom-right
        style={styles.container}
      >
        {/* Logo with zoom-in animation */}
        <Animated.Image
          source={require('../assets/images/logo.png')}
          style={[
            styles.logo,
            { opacity: logoOpacity, transform: [{ scale: logoScale }] },
          ]}
          resizeMode="contain"
        />

        {/* Welcome Text */}
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

        {/* Glowing Circle */}
        <Image
          source={require('../assets/images/circle.png')}
          style={styles.circle}
          resizeMode="contain"
        />

        {/* Mic Box */}
        <View style={styles.micBoxWrapper}>
          <LinearGradient
            colors={['#8ECDE2', '#8FD7C7']} // example border gradient
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.micBoxWrapper}
          >
            <View style={styles.micBoxInner}>
              <LinearGradient
                colors={['#D6EAEF', '#B1CCE2']} // 👈 3-color gradient
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
            </View>
          </LinearGradient>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  logo: {
    width: width * 0.6,
    height: 70,
    marginBottom: 50,
  },
  title: {
    fontSize: RFPercentage(3), // 3% of screen height
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
      fontSize: RFPercentage(2),
    color: '#555',
    marginBottom: 50,
  },
  circle: {
    width: width * 0.5,
    marginVertical: 20,
  },

  micBoxWrapper: {
    position: 'absolute',
    bottom: 30,
    width: width * 0.8,
    height: 80,
    borderRadius: 50,
    padding: 2,
  },

  micBoxInner: {
    width: width * 0.79,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 50,
    height: 76,
    
  },
  mic: {
    width: 36,
    height: 36,
    tintColor: '#00AEEF',
    marginLeft: 20,
    
  },
});
