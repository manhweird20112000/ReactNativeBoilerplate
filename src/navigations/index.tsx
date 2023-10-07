import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './main-navigator';
import React, { useEffect } from 'react';
import { useAppDispatch } from '@hooks/useStore';
import { setNotification } from '@reducers/notification';

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
export function AppNavigator(props: NavigationProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setNotification({ isShow: false }));
  }, []);
  return (
    <NavigationContainer {...props}>
      <MainNavigator />
    </NavigationContainer>
  );
}
