import {Image, Modal, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import React, {useState} from "react";
import {styles} from "./styles";
import {colors} from "../../utils/color";

const Input = ({label, type, value, isPassword, onChangeText, placeholder, options, style, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

    const onSelect = option => {
        onChangeText(option)
        setIsPickerModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'picker' ?
                (
                    <>
                        <Pressable onPress={() => setIsPickerModalVisible(true)} style={styles.inputContainer}>
                            {value ? (
                                <Text style={[styles.placeholder, style]}
                                >{value.title}</Text>
                            ) : (
                                <Text style={[styles.placeholder, style]}
                                >{placeholder}</Text>
                            )}
                            <Image style={styles.arrow}
                                   source={require('../../assets/images/arrow.png')}
                            />
                        </Pressable>

                        <Modal visible={isPickerModalVisible}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => setIsPickerModalVisible(false)}
                                style={styles.modalWrapper}
                            >
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.modalContent}
                                >
                                    <Text style={styles.headerTitle}>select option</Text>
                                    {options.map(option => {
                                        if (!option?.id) {
                                            return null
                                        }

                                        const selected = value?.id === option?.id
                                        return (
                                            <Text onPress={onSelect}
                                                  style={[
                                                      styles.optionText,
                                                      selected ? styles.selectedOption : {}
                                                  ]}
                                                  key={option?.id}
                                            >
                                                {option?.title}
                                            </Text>
                                        )
                                    })}
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </Modal>
                    </>

                ) : (
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder={placeholder}
                            style={[styles.input, style]}
                            placeholderTextColor={colors.gray}
                            secureTextEntry={isPassword && !isPasswordVisible}
                            value={value}
                            onChangeText={onChangeText}
                            {...props}
                        />
                        {isPassword ? (
                            <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <Image style={styles.eyeImage}
                                       source={isPasswordVisible ? require('../../assets/images/eye.png') : require('../../assets/images/eye-closed.png')}/>
                            </Pressable>
                        ) : null}
                    </View>
                )}

        </View>
    )

}

export default Input