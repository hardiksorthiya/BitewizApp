// src/components/RadialBackground.tsx
import React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

interface Props {
  children?: React.ReactNode;
  animate?: boolean;
}

const RadialBackground: React.FC<Props> = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Radial Gradient */}
      <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="radialGrad" cx="50%" cy="50%" r="75%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#D6EAEF" stopOpacity="1" />
            <Stop offset="50%" stopColor="#EAECF6" stopOpacity="1" />
            <Stop offset="100%" stopColor="#B1CCE2" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#radialGrad)" />
      </Svg>

      {/* Top Right Vector */}
      <View style={styles.vectorWrapper}>
  <Image
    source={require('../assets/images/bgtop.png')}
     style={styles.vectorImage}
    resizeMode="contain"
  />
</View>

      {/* Children (content inside background) */}
      {children}
    </View>
  );
};

export default RadialBackground;

const styles = StyleSheet.create({
  vectorWrapper: {
    position: 'absolute',
    top: -height * 0.01,   
    right: -width * 0.2,  
    opacity: 0.8,        
  },
  vectorImage: {
    width: width * 1.2,   
  },
});
