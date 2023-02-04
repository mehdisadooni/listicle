import {StyleSheet} from "react-native";
import {colors} from "../../utils/color";

export const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 24,
        height: 24,
    },
    space: {
        width: 24,
    }
})