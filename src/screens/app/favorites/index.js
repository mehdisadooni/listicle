import React from "react";
import {FlatList, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {products} from "../../../data/products";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";


const Favorites = () => {
    const renderItemHandler = ({item, index}) => <FavoriteItem {...item} />
    return (
        <SafeAreaView>
            <Header title={'Favorites'} />
            <FlatList
                data={products}
                renderItem={renderItemHandler}
                keyExtractor={(item) => String(item.id)}

            />
        </SafeAreaView>
    )
}

export default React.memo(Favorites)