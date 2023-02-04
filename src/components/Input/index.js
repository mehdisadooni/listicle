import {Image, Pressable, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {styles} from "./styles";
import {colors} from "../../utils/color";

const Input = ({label, placeholder, value, isPassword, onChangeText}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={colors.gray}
                    secureTextEntry={isPassword && !isPasswordVisible}
                    value={value}
                    onChangeText={onChangeText}
                />
                {isPassword ? (
                    <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Image style={styles.eyeImage}
                               source={isPasswordVisible ? require('../../assets/images/eye.png') : require('../../assets/images/eye-closed.png')}/>
                    </Pressable>
                ) : null}

            </View>
        </View>
    )

}

export default Input