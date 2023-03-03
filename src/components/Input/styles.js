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
    },
    arrow: {
        width: 24,
        height: 24,
        marginRight: 16,
        transform: [{rotate: '90deg'}]
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGray
    },
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: '80%'
    },

    headerTitle: {
        marginBottom: 16,
        fontSize: 16,
        color: colors.black,
    },

    optionText: {
        color: colors,
        paddingVertical: 4,
        fontSize: 15,
    },

    selectedOption: {
        color: colors.blue,
        fontWeight: 'bold'
    }
})