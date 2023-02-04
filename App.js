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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./src/screens/app/home";
import Favorites from "./src/screens/app/favorites";
import Profile from "./src/screens/app/profile";
import {Image} from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? require('./src/assets/images/tab/home_active.png')
                            : require('./src/assets/images/tab/home.png');
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? require('./src/assets/images/tab/profile_active.png')
                            : require('./src/assets/images/tab/profile.png');

                    } else if (route.name === 'Favorites') {
                        iconName = focused
                            ? require('./src/assets/images/tab/bookmark_active.png')
                            : require('./src/assets/images/tab/bookmark.png');
                    }

                    // You can return any component that you like here!
                    return <Image style={{width: 24, height: 24}} source={iconName}/>;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopColor: colors.lightGray,
                    backgroundColor: colors.white
                }
            })}
        >
            <Tab.Screen name={'Home'} component={Home}/>
            <Tab.Screen name={'Profile'} component={Profile}/>
            <Tab.Screen name={'Favorites'} component={Favorites}/>
        </Tab.Navigator>
    )
}

const App = () => {
    const isSignedIn = true
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
                    {isSignedIn ?
                        (
                            <>
                                <Stack.Screen name={'Tabs'} component={Tabs} options={{headerShown: false}}/>
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}/>
                                <Stack.Screen name="signUp" component={SignUp} options={{headerShown: false}}/>
                                <Stack.Screen name="signIn" component={SignIn} options={{headerShown: false}}/>
                            </>
                        )
                    }

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}


export default App;
