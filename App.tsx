import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import theme from './src/global/styles/theme';
import {Home} from './src/screens/Home';
import styled, { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';



import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
    const [fontsLoaded] = useFonts({
      Inter_400Regular,
      Inter_700Bold
    });
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }

  
  return (
    <> 
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme} >
        <StatusBar style="light" backgroundColor='black' />
          <Home />
      </ThemeProvider> 
      </View>    
    </>
  );
}


