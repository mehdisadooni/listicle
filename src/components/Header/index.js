import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Input from '../Input';
import { styles } from './styles';

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/images/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../../assets/images/search.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}

                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/images/logout.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}
            </View>

            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword..." />
            ) : null}
        </View>
    )
}

export default React.memo(Header);
//
// const Header = ({title, rightIcon, leftIcon, onPressLeftIcon, onPressRightIcon}) => {
//     return (
//         <View style={styles.container}>
//             {leftIcon ? (
//                 <Pressable hitSlop={20} onPress={onPressLeftIcon}>
//                     <Image style={styles.icon} source={leftIcon}/>
//                 </Pressable>
//             ) : <View style={styles.space}/>}
//
//
//             <Text style={styles.title}>{title}</Text>
//
//             {rightIcon ? (
//                 <Pressable hitSlop={20} onPress={onPressRightIcon}>
//                     <Image style={styles.icon} source={rightIcon}/>
//                 </Pressable>
//             ) : <View style={styles.space}/>}
//
//         </View>
//     )
// }
//
// const HeaderOld = ({title, onBackPress, onSearch, onLogout, showLogout, showSearch, showBack}) => {
//     return (
//         <View style={styles.container}>
//             {showBack ?
//                 <>
//                     <Pressable hitSlop={20} onPress={onBackPress}>
//                         <Image style={styles.icon} source={require('../../assets/images/back.png')}/>
//                     </Pressable>
//                 </>
//                 : showSearch ?
//                     <>
//                         <Pressable hitSlop={20} onPress={onSearch}>
//                             <Image style={styles.icon} source={require('../../assets/images/search.png')}/>
//                         </Pressable>
//                     </>
//                     : <View style={styles.space}/>}
//
//             <Text style={styles.title}>{title}</Text>
//
//             {showLogout ?
//                 <>
//                     <Pressable hitSlop={20} onPress={onLogout}>
//                         <Image style={styles.icon} source={require('../../assets/images/logout.png')}/>
//                     </Pressable>
//                 </>
//                 : null}
//
//
//         </View>
//     )
// }
//
// export default Header