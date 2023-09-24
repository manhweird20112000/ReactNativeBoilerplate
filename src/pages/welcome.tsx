import React, { useCallback } from 'react';
import { Image, SafeAreaView, StatusBar, ViewStyle } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import {
  ReduceMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

export function Welcome() {
  const rotateX = useSharedValue('45deg');

  const handleTap = useCallback(() => {
    // scale.value = withSpring(Math.random(), {
    //   mass: 1.8,
    //   damping: 10,
    //   stiffness: 100,
    //   overshootClamping: false,
    //   restDisplacementThreshold: 0.01,
    //   restSpeedThreshold: 2,
    //   reduceMotion: ReduceMotion.System,
    // });

    rotateX.value = withSpring('0deg');
  }, [rotateX]);
  return (
    <SafeAreaView style={$container}>
      <StatusBar barStyle={'dark-content'} />
      <TapGestureHandler onActivated={handleTap}>
        <Animated.View
          className={'w-1/2 h-auto'}
          style={{
            transform: [{ perspective: 1000 }, { rotateX }],
          }}>
          <Image
            className={'w-full h-full'}
            source={require('@assets/images/sp.png')}
            resizeMode="contain"
          />
        </Animated.View>
      </TapGestureHandler>
    </SafeAreaView>
  );
}

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
