import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import { wrapperStyles, buttonStyles } from './MapButtonsLayer.style';
import { H } from '~/constants/Layout';

export default class MapButtonsLayer extends React.Component {
  render() {
    const { profile, gift, search, refresh, target } = this.props;
    const { onSearch } = this.props;
    const { bottomExtra } = this.props;

    return (
      <View style={[wrapperStyles.outerContainer, {height: H-bottomExtra}]}>
        <View style={wrapperStyles.container}>
          {profile && 
            <Button style={[buttonStyles.button, buttonStyles.profileButton]}>
              <Image source={require('images/profile.png')}/>
            </Button>
          }

          {gift && 
            <Button style={[buttonStyles.button, buttonStyles.giftbutton]}>
              <Image source={require('images/gift.png')}/>
            </Button>
          }

          {search && 
            <Button 
              onPress={onSearch}
              style={[buttonStyles.button, buttonStyles.searchbutton]}
            >
              <Image source={require('images/search.png')}/>
            </Button>
          }

          {refresh && 
            <Button style={[buttonStyles.button, buttonStyles.refreshbutton]}>
              <Image source={require('images/refresh.png')}/>
            </Button>
          }

          {target && 
            <Button style={[buttonStyles.button, buttonStyles.targetbutton]}>
              <Image source={require('images/position.png')}/>
            </Button>
          }
        </View>   
      </View>
    )
  }
}