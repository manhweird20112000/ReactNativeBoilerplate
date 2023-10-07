import { StyleProp, ViewStyle } from 'react-native';

export interface INotification {
  position?: 'top' | 'bottom';
  space?: number;
  containerStyle?: StyleProp<ViewStyle>;
}
