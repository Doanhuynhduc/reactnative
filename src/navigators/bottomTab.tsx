import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Chat from '../scenes/Chats';
import Advisor from '../scenes/Advisor';
import News from '../scenes/News';
import Horoscope from '../scenes/Horoscope';
import Setting from '../scenes/Setting';
import {Abouts} from '../component/organimis/Setting/Abouts.organimis';
import {HowItWorks} from '../component/organimis/Setting/HowItwork';
import {Support} from '../component/organimis/Setting/Support.organimis';
import {FreeReading} from '../component/organimis/Setting/FreeReadings.organimis';

const Tab = createBottomTabNavigator();

export default function NavigatorBottomTab() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Advisors') {
                return (
                  <AntDesign
                    name={focused ? 'search1' : 'search1'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'News') {
                return (
                  <AntDesign
                    name={focused ? 'rest' : 'rest'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Chats') {
                return (
                  <AntDesign
                    name={focused ? 'message1' : 'message1'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Horoscope') {
                return (
                  <AntDesign
                    name={focused ? 'staro' : 'staro'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Settings') {
                return <AntDesign name={'setting'} size={size} color={color} />;
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'purple',
            headerShown: false,
          })}>
          <Tab.Screen name="Advisors" component={Advisor} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Chats" component={Chat} />
          <Tab.Screen name="Horoscope" component={Horoscope} />
          <Tab.Screen name="Settings" component={FreeReading} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
