import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
    backButton: {
        tintColor: colors.primaryColor,
    },
    paramTitle: {
        fontSize: 24, fontWeight: 'bold',
        alignItems: 'center',
    },
    payInfo: {
        color: colors.primaryColor,
        alignItems: 'center',
    },
    addInfo2: {
        color: '#9F9F9F',
    },
    buttonGroupContainer: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 15,
        flexDirection: 'column'
    },
    button: {
        height: 40,
        width: '100%',
    }
})

export default styles;