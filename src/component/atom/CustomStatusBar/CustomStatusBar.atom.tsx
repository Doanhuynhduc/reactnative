import React from 'react';
import {View, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const StatusBarCustom = ({
  backgroundColor,
  barStyle = 'dark-content',
  //add more props StatusBar
  translucent = false,
}: {
  backgroundColor?: string;
  barStyle?: string;
  translucent?: boolean;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        translucent={translucent}
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={'light-content'}
      />
    </View>
  );
};
