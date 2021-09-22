import React from 'react';
import { ActivityIndicator, Animated, Easing } from 'react-native';


export const AnimatedActivity: React.FC = () => {
  const rotation = new Animated.Value(0)

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  rotation.setValue(0)
  Animated.timing(rotation, {
    toValue: 1,
    duration: 1080,
    easing: Easing.linear,
    useNativeDriver: true
  }).start()

  return (
    <Animated.View style={{ justifyContent: 'center', alignItems: 'center', transform: [{ rotate }] }}>
      <ActivityIndicator size='large' color='gray' />
    </Animated.View>
  )
}
