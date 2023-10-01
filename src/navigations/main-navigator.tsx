import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '@pages/welcome';
import { useNetInfo } from '@react-native-community/netinfo';

type IMainNavigator = {
  welcome: undefined;
};

const Stack = createStackNavigator<IMainNavigator>();
export function MainNavigator() {
  const netInfo = useNetInfo({
    reachabilityUrl: process.env.BASE_API,
    reachabilityTest: async (response) => response.status === 204,
    reachabilityLongTimeout: 60 * 1000, // 60s
    reachabilityShortTimeout: 5 * 1000, // 5s
    reachabilityRequestTimeout: 15 * 1000, // 15s
    reachabilityShouldRun: () => true,
    shouldFetchWiFiSSID: true,
    useNativeReachability: false,
  });

  useEffect(() => {
    return () => {
      console.log(netInfo);
    };
  }, [netInfo]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
}
