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

    payInfo: {
        top: 20*em, color: '#35CDFA', 
    },

    addInfo1: {

    },

    addInfo2: {
        color: '#9F9F9F',
    },

    
})

export default styles;