import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
	backButton: {
		tintColor: '#35CDFA'
	},
	paramTitle: {
		fontSize: 24*em, fontWeight: 'bold', 
		marginTop: 20*em, marginBottom: 30*em
	},

	paramInfo: {
		marginVertical: 25*em, fontSize: 18*em,
	},

	paramInfo1: {
		color: '#BDBDBD', fontSize: 16*em, 
	},
	paramInfo2: {
		marginTop: 5*em, fontSize: 16*em, color: '#36384a'
	},
	arrowStyle: {
		transform: [{rotate: '180deg'}], 
		tintColor: '#dfdfe6'
	},
	row: {
		flexDirection: 'row', justifyContent: 'space-between'
	}
})

export default styles;