import React from "react";
import {ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./styles";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";

const Profile = () => {
    const num = 10;
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title={'Profile'} showLogout onLogout={() => console.log('onLogout pressed')}/>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>Elina Hovakimyan</Text>
                    <Text style={styles.email}>hello@gmail.com</Text>

                    <ListItem title={'My Listings'} subtitle={`Already have ${num} listing`}/>
                    <ListItem title={'Settings'} subtitle={'Account, FAQ, Contact'}/>
                </View>
                <Button style={{flex:0}} title={'Add a new listing'}/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile)