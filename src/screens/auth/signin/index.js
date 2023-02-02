import React from "react";
import {ScrollView, Text} from "react-native";
import {styles} from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {
    return (
        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={() => console.log('onBackPress')} title={'Sign In'}/>
            <Input label={'E-mail'} placeholder={'example@gmail.com'}/>
            <Input label={'Password'} placeholder={'**********'} isPassword/>
            <Button title={'Sign In'} onPress={() => console.log('Sign In')} style={styles.button}/>

            <Separator text={'Or sign in with'}/>

            <GoogleLogin/>

            <Text style={styles.footerText}>
                Don’t have an account?
                <Text style={styles.footerLink}>Sign Up</Text>
            </Text>
        </ScrollView>
    )
}

export default Signin