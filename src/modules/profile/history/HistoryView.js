import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { Button } from '~/components';
import { W, H, em } from '~/constants/Layout';
import { ProfileWrapper, PageTitle, PageOption } from '../wallet/WalletView';

export default class HistoryView extends React.Component {
  state = {
    histories: [
      {
        date: '30/06/2019',
        price: '15.6€'
      },
      {
        date: '22/06/2019',
        price: '3€'
      },
      {
        date: '19/06/2019',
        price: '37€'
      },
      {
        date: '27/05/2019',
        price: '16€'
      },
      {
        date: '15/04/2019',
        price: '21€'
      },
      {
        date: '03/04/2019',
        price: '24€'
      },
    ]
  }
  render = () => {
    const { _t } = this.props.appActions;
    const { histories } = this.state;
    return (
      <ProfileWrapper>
        <PageTitle title={_t('History')}  optionLink={'summary'}/>
        {histories.map((history, ind) => (
          <TouchableOpacity 
            style={[
              styles.row,
              {marginVertical: 13*em}
            ]}
            onPress={(history) => Actions['summary']({history})}
          >
            <Text style={{color: '#9f9f9f'}}>
              {history.date}
            </Text>
            <TouchableOpacity>
              <View style={[
                styles.row,
                {flexDirection: 'row', justifyContent: 'flex-end'}
              ]}>
                <Text>
                  {history.price}
                </Text>
                <Image source={require('images/arrow.png')} style={[
                  styles.nextArrow,
                  {marginLeft: 10*em}
                ]} />
              </View>
            </TouchableOpacity>            
          </TouchableOpacity>
        ))}
      </ProfileWrapper>
    )
  }
}
