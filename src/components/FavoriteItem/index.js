import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {styles} from "./styles";


const FavoriteItem = ({id, title, price, icon,image, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image source={icon || require('../../assets/images/Shape.png')} style={styles.icon}/>
        </TouchableOpacity>
    )
}


export default React.memo(FavoriteItem)