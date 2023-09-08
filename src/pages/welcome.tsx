import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon, Screen } from '@components/common';
import { SafeAreaView } from 'react-native-safe-area-context';
import { List } from '@components/common/list';

const wallpaper = require('@assets/images/wallpaper.jpg');
export function Welcome() {
  // const dispatch = useDispatch();

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState<number[]>(new Array(20).fill(5));

  const handleRefreshing = () => {
    const idRefreshTimeout = setTimeout(() => {
      setIsRefreshing(false);
      clearTimeout(idRefreshTimeout);
      setData([]);
    }, 3000);
  };

  const handleEndReached = () => {
    console.log('load more');
    const arr = new Array(10).fill(1000);
    setData([...data, ...arr]);
  };
  // useEffect(() => {
  //   dispatch({ type: 'EXAMPLE' });
  // }, [dispatch]);
  return (
    <Screen>
      <ImageBackground style={$container} source={wallpaper} resizeMode="cover">
        <SafeAreaView style={$container}>
          <TouchableHighlight
            onPress={() => setCount((prevState) => prevState + 1)}>
            <Text style={{ color: 'white' }}>Click {count}</Text>
          </TouchableHighlight>
          <List
            data={data}
            refreshing={isRefreshing}
            onRefresh={handleRefreshing}
            renderItem={({ item }) => (
              <Text className="py-7 px-3 text-white">{item}</Text>
            )}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.2}
          />
        </SafeAreaView>
      </ImageBackground>
    </Screen>
  );
}

const $container: ViewStyle = {
  flex: 1,
};
