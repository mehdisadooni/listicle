import {Image, Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";

const ListItem = ({title, subtitle}) => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image style={styles.arrowIcon} source={require('../../assets/images/arrow.png')} />
        </View>
    )

}

export default React.memo(ListItem)