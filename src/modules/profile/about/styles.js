import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
    backButton: {
        tintColor: '#35CDFA'
        },
    paramTitle: {
        textAlign: 'center', fontSize: 24, fontWeight: 'bold',
    },

    imgSetting: {
        alignItems: 'center'
    }, 

    paraSection: {
        top: 10, fontSize: 18,
    },

    paramInfo: {
        textAlign: 'center', marginTop: 15, fontSize: 14,
    }
})

export default styles;