/**
 * SwipeToFetchButton component allows users to trigger a news fetch action
 * by swiping the button to the right.
 *
 * @param onSwipeComplete - Callback function to execute when swipe is completed.
 */
// src/components/SwipeToFetchButton.tsx
import React, { useState } from 'react';
import { Animated, PanResponder, StyleSheet, View, Text } from 'react-native';

interface SwipeToFetchButtonProps {
  onSwipeComplete: () => void;
}

const SwipeToFetchButton: React.FC<SwipeToFetchButtonProps> = ({ onSwipeComplete }) => {
  const [dragX] = useState(new Animated.Value(0));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: dragX }], { useNativeDriver: false }),
    onPanResponderRelease: (_, { dx }) => {
      if (dx > 100) {
        onSwipeComplete();
        Animated.spring(dragX, { toValue: 0, useNativeDriver: false }).start();
      } else {
        Animated.spring(dragX, { toValue: 0, useNativeDriver: false }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.swipeButton, { transform: [{ translateX: dragX }] }]}
      >
      </Animated.View>
      <Text style={styles.buttonText}>Swipe to Fetch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 30,
    overflow: 'hidden',
    margin: 20,
  },
  swipeButton: {
    width: 60,
    height: 60,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    paddingLeft: 130,
  },
});

export default SwipeToFetchButton;

