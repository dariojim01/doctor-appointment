import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'

export default function Home() {
    const {isLoaded, signOut} = useAuth();
  return (
    <View>
        <Button title='Sign Out' onPress={() => signOut()} />
      <Text>Home</Text>
    </View>
  )
}

