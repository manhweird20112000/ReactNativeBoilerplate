import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '@pages/welcome';

type IMainNavigator = {
  welcome: undefined;
};

const Stack = createStackNavigator<IMainNavigator>();
export function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
}
