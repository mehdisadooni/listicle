import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../../../components/Header";
import {styles} from "./styles";
import Input from "../../../components/Input";

const Home = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    return (
        <SafeAreaView>
            <ScrollView style={styles.container} >
                   <Header
                       leftIcon={require('../../../assets/images/search.png')}
                       onPressLeftIcon={() => setShowSearchInput(s => !s)}
                       title={'Find All You Need'}
                   />
                   {showSearchInput ? (
                       <Input placeholder={'Type your keyword...'} />
                   ) : null}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home