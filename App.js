import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Splash from "./src/screens/auth/splash";
// import {GoogleSignin} from '@react-native-google-signIn/google-signIn';
// import Config from "react-native-config";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignUp from "./src/screens/auth/signUp";
import SignIn from "./src/screens/auth/signIn";
import {colors} from "./src/utils/color";

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
        colors:{
            background:colors.white
        }
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="signIn" component={SignIn}/>
                <Stack.Screen name="signUp" component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;
