import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const Onboarding1 = () => {
  const [activeIndicator, setActiveIndicator] = useState(0); // State to track active indicator

  // Function to handle indicator press
  const handleIndicatorPress = (index) => {
    setActiveIndicator(index);
  };

  // Function to handle progress button press
  const handleProgressPress = () => {
    // Logic to handle progress button press
    console.log('Progress button pressed');
  };

  return (
    <ImageBackground
      source={activeIndicator === 0 ? require('../images/Img1.png') : require('../images/Img2.png')}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        {/* Your new component with specified properties */}
        <View style={styles.customComponent}>
          <Text style={styles.headline}>
            We serve incomparable delicacies
          </Text>
          <Text style={styles.subtext}>
            All the best restaurants with their top menu waiting for you, they can't wait for your order!!
          </Text>
          <View style={styles.indicatorContainer}>
            <TouchableOpacity
              style={[
                styles.indicator,
                activeIndicator === 0 && styles.activeIndicator,
              ]}
              onPress={() => handleIndicatorPress(0)}
            />
            <TouchableOpacity
              style={[
                styles.indicator,
                activeIndicator === 1 && styles.activeIndicator,
              ]}
              onPress={() => handleIndicatorPress(1)}
            />
            <TouchableOpacity
              style={[
                styles.indicator,
                activeIndicator === 2 && styles.activeIndicator,
              ]}
              onPress={() => handleIndicatorPress(2)}
            />
          </View>
          {activeIndicator === 2 ? ( // Render Image button if on last indicator
            <TouchableOpacity style={styles.imageButton} onPress={handleProgressPress}>
              <Image source={require('../images/button1.png')} style={styles.buttonImage} />
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customComponent: {
    position: 'absolute',
    width: 311,
    height: 400,
    top: 245,
    left: -150,
    backgroundColor: '#FE8C00',
    borderRadius: 48,
    opacity: 1,
    padding: 20,
  },
  headline: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtext: {
    fontFamily: 'Inter',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    width: 26.5,
    height: 6,
    backgroundColor: 'gray', // Default color for indicators
    borderRadius: 10,
    marginHorizontal: 4,
    opacity: 1,
  },
  activeIndicator: {
    backgroundColor: 'white', // Active color for indicators
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 90,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FE8C00',
    borderRadius: 20,
    opacity: 1,
  },
  imageButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    marginTop: 30,
    width: 100,
    height: 100,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10, // Added to create space between text and arrow
  },
  arrow: {
    color: 'white',
    fontSize: 30, // Adjust size of arrow as needed
    marginTop: -35,
    fontWeight: 'bold',
    marginLeft: 35,
    marginRight: -10,
  },
});

export default Onboarding1;
