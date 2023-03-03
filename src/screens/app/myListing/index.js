import React from "react";
import {FlatList, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {products} from "../../../data/products";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";


const MyListing = ({navigation}) => {
    const renderItemHandler = ({item, index}) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', {product})
        }
        return (
            <FavoriteItem
                icon={require('../../../assets/images/close.png')}
                {...item}
                onPress={() => onProductPress(item)}
            />
        )
    }
    return (
        <SafeAreaView>
            <Header title={'My Listing'} showBack onBackPress={() => navigation.goBack()}/>
            <FlatList
                data={products}
                renderItem={renderItemHandler}
                keyExtractor={(item) => String(item.id)}

            />
        </SafeAreaView>
    )
}

export default React.memo(MyListing)