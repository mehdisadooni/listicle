import {StyleSheet} from "react-native";
import {colors} from "../../../utils/color";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginVertical: 20
    },
    footerText: {
        color: colors.blue,
        alignSelf: 'center',
        marginVertical:50

    },
    footerLink: {
        fontWeight: 'bold'
    },
})