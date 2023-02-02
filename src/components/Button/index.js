import {Text, TouchableOpacity} from "react-native";
import React, {memo} from "react";
import {styles} from "./styles";

const Button = ({title, onPress, style}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={{...styles.container, ...style}}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default memo(Button)