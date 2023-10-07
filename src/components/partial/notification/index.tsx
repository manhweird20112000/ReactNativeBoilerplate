import React, { isValidElement, useEffect, useMemo } from 'react';
import { INotification } from '@partial/notification/index.props';
import { Text, TextStyle, TouchableHighlight, View } from 'react-native';
import { colors } from '@themes/colors';
import Animated, {
  ReduceMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useAppDispatch, useAppSelector } from '@hooks/useStore';
import { setNotification } from '@reducers/notification';

export function Notification(props: INotification) {
  const dispatch = useAppDispatch();
  const { notification } = useAppSelector((state) => state.notification);
  const { position = 'bottom', space = 40, containerStyle } = props;
  const positionItem = useSharedValue<number>(-space * 2);

  const renderPosition = useMemo(() => {
    positionItem.value = withSpring(notification.isShow ? space : -space * 2, {
      reduceMotion: ReduceMotion.Never,
    });
    return position === 'bottom'
      ? { bottom: positionItem }
      : { top: positionItem };
  }, [positionItem, notification, space, position]);

  useEffect(() => {
    return () => {
      if (!notification.isShow) {
        const idTimeout = setTimeout(() => {
          dispatch(setNotification({ isShow: false }));
          clearTimeout(idTimeout);
        }, 10000);
      }
    };
  }, [notification.isShow]);

  return (
    <Animated.View
      className={'absolute inset-x-0 px-3 flex items-center justify-center'}
      style={renderPosition}>
      <View
        className={
          'bg-[#3F4042] w-full max-w-[414px] border border-[#48494B] px-3 py-2.5 rounded-xl flex flex-row items-center justify-between'
        }
        style={containerStyle}>
        <View className={'flex flex-row items-center justify-start gap-x-2'}>
          {notification.icon && isValidElement(notification.icon) && (
            <View>{notification.icon}</View>
          )}
          {isValidElement(notification.content) ? (
            notification.content
          ) : (
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              className={'font-semibold text-lg text-white'}>
              {notification.content}
            </Text>
          )}
        </View>
        {notification.onAction && (
          <TouchableHighlight
            className={'px-3 py-1 rounded-lg'}
            underlayColor={'#656668'}
            onPress={notification.onAction}>
            {notification.textAction && (
              <Text className={'text-lg font-medium'} style={[$textAction]}>
                {notification.textAction}
              </Text>
            )}
          </TouchableHighlight>
        )}
      </View>
    </Animated.View>
  );
}

const $textAction: TextStyle = {
  color: colors.primary,
};
