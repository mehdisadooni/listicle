import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import {styles} from "./styles";

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    return (
        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={() => navigation.goBack()} title={'Sign Up'}/>
            <Input label={'Name'} placeholder={'John Doe'}/>
            <Input label={'E-mail'} placeholder={'example@gmail.com'}/>
            <Input label={'Password'} placeholder={'**********'} isPassword/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text
                    style={styles.agreeTextBold}>Privacy</Text> </Text>
            </View>
            <Button title={'Sign Up'} onPress={() => console.log('Sign Up')} style={styles.button}/>

            <Separator text={'Or sign up with'}/>

            <GoogleLogin/>

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={() => navigation.navigate('signIn')} style={styles.footerLink}>Sign In</Text>
            </Text>
        </ScrollView>
    )
}

export default SignUp