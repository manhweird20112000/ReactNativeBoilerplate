import {Text, View} from 'react-native';
import {fontFamily} from '@themes/fonts';

export function Dialog() {
  return (
    <View>
      <Text style={{color: 'red', fontFamily, fontWeight: '600'}}>
        {process.env.BASE_API}
      </Text>
    </View>
  );
}
