import React, { useCallback, useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import {
  ReduceMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { useAppDispatch, useAppSelector } from '@hooks/useStore';
import { setNotification } from '@reducers/notification';
import { Icon } from '@components/common';
import { icons } from '@themes/icons';
import { SvgXml } from 'react-native-svg';
import Messenger from '@assets/icons/messenger.svg';

export function Welcome() {
  const { notification } = useAppSelector((state) => state.notification);
  const rotateX = useSharedValue('45deg');
  const dispatch = useAppDispatch();

  const handleTap = useCallback(() => {
    rotateX.value = withSpring('0deg');
    dispatch(
      setNotification({
        icon: <Messenger width={30} height={30} />,
        content: 'set Notification',
        isShow: !notification.isShow,
        textAction: 'Action',
        onAction() {
          console.log('asvjhf');
        },
      }),
    );
  }, [dispatch, notification.isShow, rotateX]);

  useEffect(() => {
    console.log(notification);
  }, []);
  return (
    <SafeAreaView style={$container}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableHighlight onPress={handleTap}>
        <Text>Click</Text>
      </TouchableHighlight>
      {/*<TapGestureHandler onActivated={handleTap}>*/}
      {/*  <Animated.View*/}
      {/*    className={'w-1/2 h-auto'}*/}
      {/*    style={{*/}
      {/*      transform: [{ perspective: 1000 }, { rotateX }],*/}
      {/*    }}>*/}
      {/*    <Image*/}
      {/*      className={'w-full h-full'}*/}
      {/*      source={require('@assets/images/sp.png')}*/}
      {/*      resizeMode="contain"*/}
      {/*    />*/}
      {/*  </Animated.View>*/}
      {/*</TapGestureHandler>*/}
    </SafeAreaView>
  );
}

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
