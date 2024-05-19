/**
 * SwipeToFetchButton component allows users to trigger a news fetch action
 * by swiping the button to the right.
 *
 * @param onSwipeComplete - Callback function to execute when swipe is completed.
 */
import React, { useState } from 'react';
import { Animated, PanResponder, StyleSheet, View, Text, Dimensions } from 'react-native';

interface SwipeToFetchButtonProps {
  onSwipeComplete: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BUTTON_WIDTH = SCREEN_WIDTH - 40;
const SWIPE_BUTTON_SIZE = 60;

const SwipeToFetchButton: React.FC<SwipeToFetchButtonProps> = ({ onSwipeComplete }) => {
  const [dragX] = useState(new Animated.Value(0));

  const panResponder = PanResponder.create({

    onMoveShouldSetPanResponder: () => true,

    // Map pan responder move event to the dragX animated value
    onPanResponderMove: Animated.event([null, { dx: dragX }], { useNativeDriver: false }),

    onPanResponderRelease: (_, { dx }) => {
      // Check if the swipe distance is enough to trigger the action
      if (dx >= BUTTON_WIDTH - SWIPE_BUTTON_SIZE) {
        // Execute the callback function and reset the position of the swipe button if fully swiped
        onSwipeComplete();
        Animated.spring(dragX, { toValue: 0, useNativeDriver: false }).start();
      } else {
        // Reset the position of the swipe button if not fully swiped
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
