import React, {useState} from "react";
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./styles";
import Header from "../../../components/Header";
import {launchImageLibrary} from 'react-native-image-picker';
import Input from "../../../components/Input";
import {categories} from "../../../data/categories";
import Button from "../../../components/Button";

const CreateListing = ({navigation}) => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({});

    const uploadNewImage = async () => {
        setLoading(true)
        const result = await launchImageLibrary();
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result.assets]))
        }
        setLoading(false)
    }

    const onDeleteImage = image => setImages((list) => list.filter(img => img?.fileName !== image?.fileName))

    const onchange = (value, key) => {
        setValues((val) => ({...val, [key]: value}))
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header showBack
                    onBackPress={() => navigation.goBack()}
                    title="Create a new listing"
            />
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>

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
                                        <Image style={styles.delete}
                                               source={require('../../../assets/images/close.png')}/>
                                    </Pressable>
                                </View>
                            )
                        })}

                        {loading ? (
                            <ActivityIndicator/>
                        ) : null}
                    </View>

                    <Input
                        placeholder='Listing Title'
                        label='Title'
                        value={values.title}
                        onChangeText={(v) => onchange(v, 'title')}
                    />

                    <Input
                        type="picker"
                        placeholder='Select the category'
                        label='Category'
                        value={values.category}
                        onChangeText={(v) => onchange(v, 'Category')}
                        options={categories}
                    />

                    <Input
                        placeholder='Enter price in USD'
                        label='Price'
                        value={values.price}
                        onChangeText={(v) => onchange(v, 'Price')}
                        keyboardType='numeric'
                    />

                    <Input
                        placeholder='Tell us more...'
                        label='Description'
                        value={values.description}
                        onChangeText={(v) => onchange(v, 'description')}
                        multiline
                        style={styles.textarea}
                    />

                    <Button title='Submit' style={styles.button}/>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing)