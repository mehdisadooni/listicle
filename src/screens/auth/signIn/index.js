import React from "react";
import {ScrollView, Text} from "react-native";

import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import {styles} from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";

const SignIn = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={() => navigation.goBack()} title={'Sign In'}/>
                <Input label={'E-mail'} placeholder={'example@gmail.com'}/>
                <Input label={'Password'} placeholder={'**********'} isPassword/>
                <Button title={'Sign In'} onPress={() => console.log('Sign In')} style={styles.button}/>

                <Separator text={'Or sign in with'}/>

                <GoogleLogin/>

                <Text style={styles.footerText}>
                    Don’t have an account?
                    <Text onPress={() => navigation.navigate('signUp')} style={styles.footerLink}>Sign Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn