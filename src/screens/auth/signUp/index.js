import React, {useState} from "react";
import {Alert, ScrollView, Text, View} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import {styles} from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import {request} from "../../../utils/request";

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState([]);

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = async () => {
        try {
            if (!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword) {
                Alert.alert('All fields are required');
                return
            }

            if (values?.password !== values?.confirmPassword) {
                Alert.alert('Passwords do not match');
                return
            }

            const response = await request({
                url: '/user/register',
                method: 'post',
                data: values
            })

            console.log('response =>>', response)
        } catch (error) {
            console.log('error =>>', error)
        }
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>

                <AuthHeader onBackPress={() => navigation.goBack()} title={'Sign Up'}/>

                <Input
                    value={values.fullName}
                    onChangeText={(v) => onChange('fullName', v)}
                    label={'Name'}
                    placeholder={'John Doe'}
                />

                <Input
                    value={values.email}
                    onChangeText={(v) => onChange('email', v)}
                    label={'E-mail'}
                    placeholder={'example@gmail.com'}
                />

                <Input
                    value={values.password}
                    onChangeText={(v) => onChange('password', v)}
                    label={'Password'}
                    placeholder={'**********'}
                    isPassword
                />

                <Input
                    value={values.confirmPassword}
                    onChangeText={(v) => onChange('confirmPassword', v)}
                    label={'Confirm password'}
                    placeholder={'**********'}
                    isPassword
                />

                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked}/>
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text
                        style={styles.agreeTextBold}>Privacy</Text> </Text>
                </View>

                <Button title={'Sign Up'} onPress={onSubmit} style={styles.button}/>

                <Separator text={'Or sign up with'}/>

                <GoogleLogin/>

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text onPress={() => navigation.navigate('signIn')} style={styles.footerLink}>Sign In</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp