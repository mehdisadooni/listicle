import {Image, TouchableOpacity} from "react-native";
import React, {memo, useState} from "react";
import {styles} from "./styles";
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
    const handleGoogleLogin = async () => {
        console.log('ss');
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(`user Info => ${userInfo}`)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleGoogleLogin}
            style={styles.container}
        >
            <Image style={styles.image} source={require('../../assets/images/Vector.png')}/>
        </TouchableOpacity>
    )

}

export default memo(GoogleLogin)