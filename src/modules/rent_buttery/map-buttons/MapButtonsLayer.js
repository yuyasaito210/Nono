import React from 'react';
import { View, Image } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import { TouchableOpacity } from 'react-native';

export default class MapButtonsLayer extends React.Component {
  render = () => {
    const { profile, gift, search, refresh, target } = this.props;
    return (
      <View 
        style={{
          position: 'absolute', zIndex: 10, 
          width: W, height: H
        }
      }>
        {profile && 
          <Button 
            icon={require('images/profile.png')} 
            containerStyle={{left: 20, top: 20}}
          />
        }
        {gift && 
          <Button 
            icon={require('images/gift.png')} 
            containerStyle={{right: 20, top: 20}}
          />
        }
        {search && 
          <Button 
            icon={require('images/search.png')} 
            containerStyle={{right: 20, top: 260}}
          />
        }
        {refresh && 
          <Button 
            icon={require('images/refresh.png')} 
            containerStyle={{right: 20, top: 320, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
          />
        }
        {target && 
          <Button 
            icon={require('images/position.png')} 
            containerStyle={{right: 20, top: 361, borderTopLeftRadius: 0, borderTopRightRadius: 0}}
          />
        }
      </View>
    )
  }
}

const Button = ({ icon, containerStyle }) => (
  <>
    <View 
      style={[{
        position: 'absolute', 
        borderRadius: 15*em, backgroundColor: '#fff', 
        alignItems: 'center', justifyContent: 'center', 
        width: 40*em, height: 40*em
      }, containerStyle
      ]}
    >
      <TouchableOpacity>
        <Image source={icon} />
      </TouchableOpacity>      
    </View>
  </>
)