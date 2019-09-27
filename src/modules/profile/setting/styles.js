import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
	backButton: {
		tintColor: '#35CDFA'
	},
	paramTitle: {
		fontSize: 24, fontWeight: 'bold', 
		marginTop: 20, marginBottom: 30
	},

	paramInfo: {
		marginVertical: 25, fontSize: 18,
	},

	paramInfo1: {
		color: '#BDBDBD', fontSize: 16, 
	},
	paramInfo2: {
		marginTop: 5, fontSize: 16, color: '#36384a'
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