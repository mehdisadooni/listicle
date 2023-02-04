import {Image, Pressable, Text, TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "./styles";


const ProductHomeItem = ({id, title, price, image, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
    )
}


export default ProductHomeItem