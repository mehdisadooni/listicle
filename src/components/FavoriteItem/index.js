import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";


const FavoriteItem = ({id, title, price, image, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
               <Image style={styles.image} source={{uri: image}}/>
               <View style={styles.content}>
                   <Text style={styles.title}>{title}</Text>
                   <Text style={styles.price}>{price}</Text>
               </View>

            <Image source={require('../../assets/images/Shape.png')} style={styles.icon} />
        </Pressable>
    )
}


export default React.memo(FavoriteItem)