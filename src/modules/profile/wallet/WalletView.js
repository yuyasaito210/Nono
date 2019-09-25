import React from 'react';
import { View, Text } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';

export default class WalletView extends React.Component {
  render = () => {
    return (
      <>
      </>
    )
  }
}

export const ProfileWrapper = ({ children }) => (
  <View style={styles.pageWrapper}>
    {children}
  </View>
)