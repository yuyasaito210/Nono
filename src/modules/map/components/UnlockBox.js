import React from 'react';
import { View } from 'react-native';
import { Button } from 'native-base'
import { Text } from 'react-native';
import { wrapperStyles, contentStyles } from './UnlockBox.style';

export default class UnlockBox extends React.Component {
  render() {
    return (
      <View style={wrapperStyles.container}>
        <Button full style={contentStyles.unlockButton}>
          <Text>Déverrouille une nono</Text>
        </Button>
      </View>
    )
  }
}