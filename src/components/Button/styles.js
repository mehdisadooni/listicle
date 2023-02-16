import {StyleSheet} from "react-native";
import {colors} from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 8,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        // width: '100%'
        // flex: 1
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})