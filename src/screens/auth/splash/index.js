import React from "react";
import {Image, Pressable, ScrollView, Text, View} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";

const Splash = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    style={styles.image}
                    source={require('../../../assets/images/splash_image.png')}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You'll Find</Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
                    <Text style={styles.title}>Here!</Text>
                </View>

                <Button
                    title={'Sign Up'}
                    onPress={() => navigation.navigate('signUp')}
                />

                <Pressable hitSlop={20} onPress={() => navigation.navigate('signIn')}>
                    <Text style={styles.footerText}>Sign in</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Splash