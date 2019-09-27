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
})

export default styles;