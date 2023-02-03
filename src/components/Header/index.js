import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";


const Header = ({title, rightIcon, leftIcon, onPressLeftIcon, onPressRightIcon}) => {
    return (
        <View style={styles.container}>
            {leftIcon ? (
                <Pressable hitSlop={20} onPress={onPressLeftIcon}>
                    <Image style={styles.icon} source={leftIcon}/>
                </Pressable>
            ) : <View style={styles.space}/>}


            <Text style={styles.title}>{title}</Text>

            {rightIcon ? (
                <Pressable hitSlop={20} onPress={onPressRightIcon}>
                    <Image style={styles.icon} source={rightIcon}/>
                </Pressable>
            ) : <View style={styles.space}/>}

        </View>
    )
}

const HeaderOld = ({title, onBackPress, onSearch, onLogout, showLogout, showSearch, showBack}) => {
    return (
        <View style={styles.container}>
            {showBack ?
                <>
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/images/back.png')}/>
                    </Pressable>
                </>
                : showSearch ?
                    <>
                        <Pressable hitSlop={20} onPress={onSearch}>
                            <Image style={styles.icon} source={require('../../assets/images/search.png')}/>
                        </Pressable>
                    </>
                    : <View style={styles.space}/>}

            <Text style={styles.title}>{title}</Text>

            {showLogout ?
                <>
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/images/logout.png')}/>
                    </Pressable>
                </>
                : null}


        </View>
    )
}

export default Header