import React from 'react';
import styles from '../styles';
import { W, H, em } from '~/constants/Layout';
import { View, Text, Image } from 'react-native';
import RentBoxWrapper from './RentBoxWrapper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '~/components';

export default class UnlockBox extends React.Component {
  render = () => {
    const { _t } = this.props.appActions;
    return (
      <RentBoxWrapper>
        <Text 
          style={[
            styles.rentBox.text,
            {marginVertical: 10, fontSize: 24, fontWeight: 'bold'}
          ]}
        >
          00:02
        </Text>
        <ForwardButton onGotoFeedback={this.props.onGotoFeedback}/>
        <InnerBoxWrapper>
          <Button 
            rounded
            bgColor='#35cdfa' textColor='#fff'
            icon={require('images/qr-code.png')} iconColor='#fff'
            caption={_t('Unlock a nono')}
          />
        </InnerBoxWrapper>
      </RentBoxWrapper>
    )
  }
}

const ForwardButton = ({onGotoFeedback}) => (
  <View style={{
    position: 'absolute', top: 20, right: 20
  }}>
    <TouchableOpacity 
      style={{
        width: 30, height: 30,
        borderRadius: 10,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#fff'
      }}
      onPress={onGotoFeedback}
    >
      <Image source={require('images/arrow-direction.png')} 
        style={{
          tintColor: '#ff52a8', width: 10, height: 10
        }}
      />
    </TouchableOpacity>
  </View>
)

const InnerBoxWrapper = ({ children }) => (
  <View style={{
    backgroundColor: '#fff',
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    paddingTop: 20, paddingBottom: 40, paddingHorizontal: 20
  }}>
    {children}
  </View>
)