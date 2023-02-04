import {StyleSheet} from "react-native";
import {colors} from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        paddingVertical:8,
        marginHorizontal: 8,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color: colors.gray,
    },
    image: {
        width: 32,
        height: 32,
    },
    imageContainer: {
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 8,
        marginBottom: 8
    },
})