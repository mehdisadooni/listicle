import {StyleSheet} from "react-native";
import {colors} from "../../../utils/color";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.black,
        marginBottom: 12,
    },
    email: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.gray,
        marginBottom: 16
    },
    content: {
        flex: 1
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 32,
        height: 32,
    },
    button:{
        paddingVertical:12,
        marginTop: 16

    }
})