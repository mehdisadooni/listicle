import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/images/auth-back.png')}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default AuthHeader