import {StyleSheet} from "react-native";
import {colors} from "../../../utils/color";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer:{
      marginVertical:53
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center'
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline'
    },
    footerText: {
        color: colors.blue,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    button:{
        width:'100%'
    }
})