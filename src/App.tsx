/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Alert} from 'react-native';
// @ts-ignore
import {Block, GalioProvider} from 'galio-framework';
import {NavigationContainer} from '@react-navigation/native';
import argonTheme from '../src/constants/Theme';

import messaging from '@react-native-firebase/messaging';
import Navigation from './navigation';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

const getToken = async () => {
  const token = await messaging().getToken();
  console.log('token', token);
};

const App = () => {
  useEffect(() => {
    getToken();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <GalioProvider theme={argonTheme}>
        <Block flex>
          <Navigation />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
};

function HeadlessCheck({isHeadless}: any) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }
  return <App />;
}

export default HeadlessCheck;
