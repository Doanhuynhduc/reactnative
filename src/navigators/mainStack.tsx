import * as React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Advisor from '../scenes/Advisor';
import {NewContent} from '../component/organimis/News/NewsContent.organimis';
import News from '../scenes/News';
import Chat from '../scenes/Chats';
import Horoscope from '../scenes/Horoscope';
import Setting from '../scenes/Setting';
import {HowItWorks} from '../component/organimis/Setting/HowItwork';
import {Abouts} from '../component/organimis/Setting/Abouts.organimis';

const Stack = createNativeStackNavigator();
const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name, params?) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}
export function goBack() {
  navigationRef.current && navigationRef.current.goBack();
}

export const Navigators = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Advisor" component={Advisor} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Horoscope" component={Horoscope} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="newscontent" component={NewContent} />
          <Stack.Screen name="howitworks" component={HowItWorks} />
          <Stack.Screen name="abouts" component={Abouts} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
