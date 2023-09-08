import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

interface ListProps extends FlatListProps<any> {}
export function List(props: ListProps) {
  const { ...rest } = props;
  return <FlatList {...rest} />;
}
