import {FlatList, Image, Dimensions, View} from "react-native";
import React, {useState} from "react";

const {width} = Dimensions.get('window')

const ImageCarousel = ({images}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const ScrollEnd = (e) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x
        const index = Math.round(horizontalOffset / width)
        setActiveIndex(index)
    }

    const renderImages = ({item}) => {
        return <Image style={styles.image} source={{uri: item}}/>
    }
    return (
        <View>
            <FlatList horizontal onMomentumScrollEnd={ScrollEnd} pagingEnabled style={styles.list} data={images}
                      renderItem={renderImages}/>
            <View style={styles.pagination}>
                {images?.map((image, index) => {
                    return (
                        <View key={index}
                              style={[styles.paginationLine, index === activeIndex ? styles.activeLine : {}]}
                        />
                    )
                })}
            </View>
        </View>
    )
}

import {styles} from "./styles";

export default React.memo(ImageCarousel)