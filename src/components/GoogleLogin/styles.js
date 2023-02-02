import {StyleSheet} from "react-native";
import {colors} from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGray,
        borderRadius: 8,
        width: '45%',
        alignSelf: 'center',
        alignItems:'center',
        paddingVertical:16
    },
    image: {
        width: 30,
        height: 30,
    }
})