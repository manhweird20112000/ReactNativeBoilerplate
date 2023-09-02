import {Text, View} from 'react-native';

export function Dialog() {
  return (
    <View>
      <Text style={{color: 'white'}}>{process.env.BASE_API}</Text>
    </View>
  );
}
