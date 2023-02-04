import {Dimensions, StyleSheet} from "react-native";
import {colors} from "../../../utils/color";

const {height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    safe: {
        flex: 1
    },
    container: {
        // borderWidth:1
    },
    image: {
        width: '100%',
        height: height * 0.45,
    },
    content: {
        backgroundColor: colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24
    },
    title: {

        color: colors.black,
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.black,
        fontSize: 30,
        fontWeight: '700',
        marginVertical: 10
    },
    description: {
        color: colors.textGray,
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 19.1,
        textAlign: 'justify',
        marginVertical: 10
    },


    //footer styles
    footer: {
        flexDirection: 'row',
        padding: 24,
        alignItems:'center'
    },
    bookmarkContainer: {
        backgroundColor: colors.borderColor,
        borderRadius: 8,
        padding:20,
        marginRight:16
        // width: 60,
        // height: 60,
        // alignItems: 'center',
        // justifyContent:'center',

    },
    bookmarkIcon: {
        width: 24,
        height: 24
    }
})