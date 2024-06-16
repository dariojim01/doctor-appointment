import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Text, SafeAreaView,  } from 'react-native';
import Login from './../Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from '@/components/SignInWithOAuth';
import React from 'react';
import Home from './../Screens/Home';

export default function HomeScreen() {
  return (
    <ClerkProvider publishableKey={"pk_test_c3RlcmxpbmctZmxlYS02OS5jbGVyay5hY2NvdW50cy5kZXYk"}>
                                  
    <SafeAreaView style={styles.container}>
    <SignedIn>
          <Home/>
          
        </SignedIn>
          <SignedOut>
            <Login/>
        </SignedOut>
    </SafeAreaView>
  </ClerkProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
