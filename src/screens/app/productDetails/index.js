import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Pressable, ScrollView, Text, View} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";


const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{uri: product.image}}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <Pressable onPress={() => navigation.goBack()} hitSlop={20} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/images/back.png')}/>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable hitSlop={20} style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/images/tab/bookmark.png')}/>
                </Pressable>
                <Button title='Contact Seller'/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails)