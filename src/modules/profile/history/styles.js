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
		flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20*em
	},
	summaryCol1: {
		width: 50*em
	},
	summaryCol2: {
		width: 240*em
	},
	whiteText: {
		color: 'white', fontSize: 16*em
	},
	consumeRow: {
		flexDirection: 'row', justifyContent: 'space-between', 
		marginVertical: 10*em, marginHorizontal: 20*em
	},
	consumeCol1: {
		width: 200*em, alignItems: 'flex-start'
	},
	consumeCol2: {
		width: 100*em, alignItems: 'flex-end'
	}
})

export default styles;