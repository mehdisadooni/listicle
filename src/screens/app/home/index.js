import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../../../components/Header";
import {styles} from "./styles";
import {categories} from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import {products} from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [filterProduct, setFilterProduct] = useState(products);
    const [keyword, setKeyword] = useState();
    console.log(keyword)

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory)
            setFilterProduct(updatedProducts)
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title.toLowerCase()?.includes(keyword?.toLowerCase()))
            setFilterProduct(updatedProducts)
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.title.toLowerCase()?.includes(keyword?.toLowerCase()))
            setFilterProduct(updatedProducts)
        } else if (!selectedCategory && !keyword) {
            setFilterProduct(products)
        }

    }, [selectedCategory, keyword])

    const renderCategoryItem = ({item, index}) => <CategoryBox
        {...item}
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}/>

    const renderProductItem = ({item, index}) => <ProductHomeItem {...item} />

    return (
        <SafeAreaView>

            <Header onSearch={setKeyword} showSearch title="Find All You Need"/>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => String(index)}
            />

            <FlatList data={filterProduct}
                      renderItem={renderProductItem}
                      keyExtractor={(item, index) => String(index)}
                      numColumns={2}
                      style={styles.productList}
                      ListFooterComponent={<View style={{height: 200}}></View>}
            />

        </SafeAreaView>
    )
}

export default Home