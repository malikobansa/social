import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from "@clerk/clerk-expo";


export default function HomeScreen() {
    const { isLoaded, isSignedIn, user } = useUser();
 
    if (!isLoaded || !isSignedIn) {
      return null;
    }
  return (
    <View>
        <Text>Hello, {user.firstName} welcome to Clerk</Text>
    </View>
  )
}