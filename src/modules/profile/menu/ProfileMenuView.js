import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, TouchableOpacity, View, Alert} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { Left, Right, Title, Icon, Body, List, ListItem } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


export default class ProfileMenuView extends Component {
  state = {
    modalVisible: true,
    menuList: [
      {
        name: 'Wallet',
        imageUrl: require('../../../assets/images/png/free-charge-2x.png'),
        subTitle: '0,00 €',
        icon: 'payment'
      },
      {
        name: 'Historical',
        imageUrl: require('../../../assets/images/png/free-charge-2x.png'),
        icon: 'history'
      },
      {
        name: 'Payment',
        imageUrl: require('../../../assets/images/png/free-charge-2x.png'),
        icon: 'credit-card'
      },
      {
        name: 'Settings',
        imageUrl: require('../../../assets/images/png/free-charge-2x.png'),
        icon: 'settings'
      },
      {
        name: 'About us',
        imageUrl: require('../../../assets/images/png/free-charge-2x.png'),
        icon: 'details'
      },
      {
        name: 'Need help?',
        imageUrl: require('../../../assets/images/png/free-charge-2x.png'),
        icon: 'help'
      },
    ]
  };

  setModalVisible= (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const { _t } = this.props.appActions;
    const { modalVisible, menuList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {_t('Theo Rouilly')}
          </Text>
          <View style={styles.listContainer}>              
            <List>
              <ListItem
                thumbnail 
                onPress={() => {console.log('...')}} 
              >
                <TouchableScale style={styles.listItemContainer}>
                  <LinearGradient colors={['#07E28E', '#36F7AD']} style={styles.linearGradient}>
                    <Left>
                      <MaterialIcon name="flash-on" style={styles.linearImage} />
                    </Left>
                    <Body>
                      <Text style={styles.linearTitle}>
                        {_t('Charge Free')}
                      </Text>
                    </Body>
                    <Right>
                      <MaterialIcon name="chevron-right" style={styles.linearImage} />
                    </Right>
                  </LinearGradient>
                </TouchableScale>
              </ListItem>
              {
                menuList.map((item, i) => (
                  <ListItem 
                    key={i} 
                    thumbnail 
                    onPress={() => {console.log('...')}} 
                  >
                    <Left>
                      <MaterialIcon name={item.icon} style={styles.listItemLeftImage} />
                    </Left>
                    <Body>
                      <Text style={styles.listItemTitle}>
                        {_t(item.name)}
                      </Text>
                    </Body>
                    <Right>
                      {item.subTitle && (
                        <Text style={styles.listItemSubTitle}>{item.subTitle}</Text>
                      )}
                    </Right>
                  </ListItem>
                ))
              }
            </List>
          </View>
        </View>
      </View>
    );
  }
}