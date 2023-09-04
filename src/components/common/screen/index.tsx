import React, { useEffect } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';

interface LayoutProps {
  children: React.ReactNode;
}
interface ScreenProps {
  isRefresh?: boolean;
  children: React.ReactNode;
  isScroll?: boolean;
  onRefresh?(): void;
}
function Layout(props: LayoutProps) {
  const { children } = props;
  const { width, height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      style={[$container, { width, height }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export function Screen(props: ScreenProps) {
  const { isScroll = false, children, onRefresh, isRefresh = false } = props;
  if (isScroll) {
    return (
      <Layout>
        <ScrollView
          style={$container}
          refreshControl={
            <RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />
          }>
          {children}
        </ScrollView>
      </Layout>
    );
  } else {
    return <Layout>{children}</Layout>;
  }
}

const $container: ViewStyle = {
  flex: 1,
};
