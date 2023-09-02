import React from 'react';
import {Modal, ModalProps, View, ViewStyle} from 'react-native';

interface DialogProps extends Omit<ModalProps, 'supportedOrientations'> {
  children: React.ReactNode;
  background?: string;
}
export function Dialog(props: DialogProps) {
  const {children, background, ...rest} = props;
  return (
    <Modal
      {...rest}
      supportedOrientations={[
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]}>
      <View style={[$container, {backgroundColor: background}]}>
        {children}
      </View>
    </Modal>
  );
}

const $container: ViewStyle = {
  flex: 1,
};
