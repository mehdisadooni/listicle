import React, {useState} from "react";
import {Image, Pressable, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./styles";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import Button from "../../../components/Button";

const Settings = ({navigation}) => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({name: 'Mehdi', email: 'mehdi@gmail.com'});
    const onEditPress = () => setEditing(currentValue => !currentValue)
    const onSave = () => {
        setEditing(false)
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header showBack onBackPress={() => navigation.goBack()} title={'Settings'}/>
            <View style={styles.container}>
                <View style={styles.headerSection}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/images/edit-2.png')}/>
                    </Pressable>
                </View>
                <EditableBox
                    label="Name"
                    onChangeText={(v) => onChange('name', v)}
                    value={values.name}
                    editable={editing}
                />
                <EditableBox
                    label="Email"
                    onChangeText={(v) => onChange('email', v)}
                    value={values.email}
                    editable={editing}
                />
                {editing ? (<Button style={styles.button} onPress={onSave} title="Save"/>) : null}

                <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
                <ListItem style={styles.item} title="FAQ"/>
                <ListItem style={styles.item} title="Contact Us"/>
                <ListItem style={styles.item} title="Privacy & Terms"/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Settings)