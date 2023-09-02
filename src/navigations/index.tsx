import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './main-navigator';
import React from 'react';

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
export function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer {...props}>
      <MainNavigator />
    </NavigationContainer>
  );
}
