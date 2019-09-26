import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
    backButton: {
        tintColor: '#35CDFA'
        },
    paramTitle: {
        textAlign: 'center', fontSize: 24*em, fontWeight: 'bold',
    },

    imgSetting: {
        alignItems: 'center'
    }, 

    paraSection: {
        top: 10*em, fontSize: 18*em,
    },

    paramInfo: {
        textAlign: 'center', marginTop: 15*em, fontSize: 14*em,
    }
})

export default styles;