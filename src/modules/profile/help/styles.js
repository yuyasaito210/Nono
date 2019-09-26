import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
    backButton: {
        tintColor: '#35CDFA'
        },

    paramTitle: {
        top: 10, fontSize: 24, fontWeight: 'bold',
    },

    paramInfo: {
        top: 30, fontSize: 18,
    },

    paramInfo1: {
        color: '#BDBDBD', fontSize: 16, 
    },
    paramInfo2: {
        marginTop: 5, fontSize: 16,
    }
})

export default styles;