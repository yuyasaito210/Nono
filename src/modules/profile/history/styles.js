import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
	backButton: {
		tintColor: '#35CDFA'
	},
	row: {
		flexDirection: 'row', justifyContent: 'space-between'
	},
	nextArrow: {
		transform: [{rotate: '180deg'}], tintColor: '#bfbfc4'
	},
	summaryRow: {
		flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20
	},
	summaryCol1: {
		width: 50
	},
	summaryCol2: {
		width: 250
	},
	whiteText: {
		color: 'white', fontSize: 16
	},
	consumeRow: {
		flexDirection: 'row', justifyContent: 'space-between', 
		marginVertical: 10, marginHorizontal: 20
	},
	consumeCol1: {
		width: 200, alignItems: 'flex-start'
	},
	consumeCol2: {
		width: 100, alignItems: 'flex-end'
	}
})

export default styles;