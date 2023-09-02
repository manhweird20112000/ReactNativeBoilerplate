import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Screen} from '@components/common';
import {SafeAreaView} from 'react-native-safe-area-context';

const wallpaper = require('@assets/images/wallpaper.jpg');
export function Welcome() {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch({type: 'EXAMPLE'});
  }, [dispatch]);
  return (
    <Screen>
      <ImageBackground style={$container} source={wallpaper} resizeMode="cover">
        <SafeAreaView style={$container}>
          <TouchableHighlight
            onPress={() => setCount(prevState => prevState + 1)}>
            <Text style={{color: 'white'}}>Click {count}</Text>
          </TouchableHighlight>
        </SafeAreaView>
      </ImageBackground>
    </Screen>
  );
}

const $container: ViewStyle = {
  flex: 1,
};
