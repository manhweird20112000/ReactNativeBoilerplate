import React from 'react';
import { SvgXml } from 'react-native-svg';

interface IconProps {
  icon: string;
  size?: number;
}
export function Icon(props: IconProps) {
  const { icon, size = 32 } = props;
  return <SvgXml xml={icon} width={size} height={size} />;
}
