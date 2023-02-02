import {Image, TouchableOpacity, View} from "react-native";
import React, {memo} from "react";
import {styles} from "./styles";

const Checkbox = ({checked, onCheck}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onCheck(!checked)}
            style={styles.container}
        >
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.checkIcon}
                        source={require('../../assets/images/check.png')}
                    />
                </View>
            ) : null}
        </TouchableOpacity>
    )
}

export default memo(Checkbox)