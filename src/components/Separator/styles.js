import {StyleSheet} from "react-native";
import {colors} from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        color: colors.blue,
        fontWeight: '500',
        marginHorizontal: 8
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.lightGray
    }
})