import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
    backButton: {
        tintColor: '#35CDFA'
        },

    paramTitle: {
        top: 10*em, fontSize: 24*em, fontWeight: 'bold',
    },

    paramInfo: {
        top: 30*em, fontSize: 18*em,
    },

    paramInfo1: {
        color: '#BDBDBD', fontSize: 16*em, 
    },
    paramInfo2: {
        marginTop: 5*em, fontSize: 16*em,
    }
})

export default styles;