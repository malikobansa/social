import { View, SafeAreaView, StyleSheet } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import SignUpScreen from "./components/Auth/SignUpScreen";
import HomeScreen from "./components/Screen/HomeScreen";
import { navigate } from './NavigateRef';
import { useNavigation } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as navigationRef  from './NavigateRef';

const Stack = createStackNavigator();

navigationRef.navigate("Home")

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer ref={navigationRef}>
      <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
            <MyStack/>
        </SignedIn>
        <SignedOut>
          <SignUpScreen/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
