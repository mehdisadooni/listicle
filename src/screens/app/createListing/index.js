import React, {useState} from "react";
import {ActivityIndicator, Image, Pressable, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./styles";
import Header from "../../../components/Header";
import {launchImageLibrary} from 'react-native-image-picker';

const CreateListing = ({navigation}) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const uploadNewImage = async () => {
        setLoading(true)
        const result = await launchImageLibrary();
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result.assets]))
        }
        setLoading(false)
    }

    const onDeleteImage = image => setImages((list) => list.filter(img => img?.fileName !== image?.fileName))

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header showBack
                    onBackPress={() => navigation.goBack()}
                    title="Create a new listing"
            />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                <View style={styles.imageRow}>
                    <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus}>+</Text>
                        </View>
                    </TouchableOpacity>
                    {images?.map(image => {
                        return (
                            <View style={styles.imageContainer} key={image?.fileName}>
                                <Image style={styles.image} source={{uri: image?.uri}}/>
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../../assets/images/close.png')}/>
                                </Pressable>
                            </View>
                        )
                    })}

                    {loading ? (
                        <ActivityIndicator />
                    ): null}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing)