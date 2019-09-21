import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native';
import { wrapperStyles, contentStyles } from './UnlockBox.style';
import { Button } from '~/components';

export default class UnlockBox extends React.Component {
  render() {
    const { onPressUnlockButton } = this.props;
    return (
      <View style={wrapperStyles.container}>
        <Button 
          icon={require('images/qr-code.png')} iconColor='#fff'
          rounded bgColor='#5ED8FC' textColor='#fff'
          caption='Déverrouille une nono' 
          onPress={onPressUnlockButton}
        />
      </View>
    )
  }
}