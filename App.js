import React, {useEffect} from 'react';
import Splash from "./src/screens/auth/splash";
// import {GoogleSignin} from '@react-native-google-signIn/google-signIn';
// import Config from "react-native-config";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignUp from "./src/screens/auth/signUp";
import SignIn from "./src/screens/auth/signIn";
import {colors} from "./src/utils/color";
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
    // useEffect(() => {
    //     GoogleSignin.configure({
    //         scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //         webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    //         offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //         iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    //     });
    // }, [])

    const theme = {
        colors: {
            background: colors.white
        }
    }
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator>
                    <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}/>
                    <Stack.Screen name="signUp" component={SignUp} options={{headerShown: false}}/>
                    <Stack.Screen name="signIn" component={SignIn} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}


export default App;
