import { StyleSheet } from 'react-native';
import { fonts, colors } from '~/styles';
import { W, H, em } from '~/constants/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hintTextStyle: {
    paddingLeft: 60,
    paddingRight: 60,
    textAlign: 'center'
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  flashLayer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  flashImageContainer: {
    flex: 1,
    width: 40, height: 40,
    backgroundColor: colors.lightGrayTransparent,
    borderRadius: 15, marginRight: 15,
    alignItems: 'center', justifyContent: 'center'
  },
  flashImage: {
    tintColor: colors.white,
    height: 20
  },
  bottomNavigationLayer: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomCloseImageContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  bottomCloseImage: {
    color: colors.white,
    width: 40, height: 40,
    backgroundColor: colors.lightGrayTransparent,
    borderRadius: 15,
    alignItems: 'center', justifyContent: 'center',
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 15,
    paddingTop: 10, paddingLeft: 10
  },
  bottomInputQRCodeImageContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  bottomInputQRCodeImage: {
    color: colors.white,
    width: 40, height: 40,
    backgroundColor: colors.lightGrayTransparent,
    paddingLeft: 12, paddingTop: 13,
    borderRadius: 15,
    fontSize: 10,
    fontWeight: "400",
    marginRight: 15
  },
  bottomEmptyContainer: {
    flex: 1,
  }
});

export default styles;
  