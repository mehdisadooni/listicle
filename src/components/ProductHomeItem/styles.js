import {Dimensions, StyleSheet} from "react-native";
import {colors} from "../../utils/color";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        color: colors.textGray,
        paddingVertical: 8,
    },
    image: {
        width: (width - 64) / 2,
        height: 200,
        borderRadius: 8,
    },
    price: {
        color: colors.black,
        paddingBottom: 8,
    }
})