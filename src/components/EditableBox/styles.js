import {StyleSheet} from "react-native";
import {colors} from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4
    },
    label: {
        marginBottom: 6,
        color: colors.gray,
        fontSize: 12,

    },
    input: {
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
})