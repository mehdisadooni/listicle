import {StyleSheet} from "react-native";
import {colors} from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer: {
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.gray,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eyeImage: {
        width: 24,
        height: 24,
        marginRight: 16
    }
})