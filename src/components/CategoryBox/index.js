import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";
import {colors} from "../../utils/color";


const CategoryBox = ({id, title, image, onPress, isFirst, isSelected}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: colors.black} : {}]}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'} : {}]}>{title}</Text>
        </Pressable>
    )
}


export default CategoryBox