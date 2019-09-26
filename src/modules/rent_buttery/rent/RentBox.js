import React from 'react';
import styles from '../styles';
import { W, H, em } from '~/constants/Layout';
import { View, Text } from 'react-native';
import RentBoxWrapper from './RentBoxWrapper';
import { Button } from '~/components'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RentBox extends React.Component {
  render = () => {
    return (
      <RentBoxWrapper>
        <Text 
          style={[
            styles.rentBox.text, 
            {marginVertical: 10}
          ]}
        >
          Durée de location
        </Text>
        <Text 
          style={[
            styles.rentBox.text,
            {marginVertical: 10, fontSize: 34, fontWeight: 'bold'}
          ]}
        >
          00:02
        </Text>
        <View style={styles.rentBox.row}>
          <Text style={styles.rentBox.leftCol}>
            Prix de location
          </Text>
          <Text style={styles.rentBox.rightCol}>
            0,50 €/ 30mn
          </Text>          
        </View>
        <View style={styles.rentBox.row}>
          <Text style={styles.rentBox.rightColSmall}>
            Tarif maximum par jour 3€
          </Text>
        </View>
        <View style={styles.rentBox.row}>
          <Text style={styles.rentBox.leftCol}>
            Crédits gratuits
          </Text>
          <Text style={styles.rentBox.rightCol}>
            0,00 €
          </Text>
        </View>
        {this.renderActions()}
      </RentBoxWrapper>
    )
  }
  renderActions = () => (
    <>
      <View 
        style={{
          flexDirection: 'row', justifyContent: 'center',
          marginVertical: 20
        }}
      >
        <TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Loue une autre batterie
          </Text>
        </TouchableOpacity>
      </View>
      <View 
        style={{
          flexDirection: 'row', justifyContent: 'space-between',
          marginTop: 10, marginBottom: 30, marginHorizontal: 25
        }}
      >
        <View style={{width: 140}}>
          <Button 
            rounded bgColor='transparent' textColor='#fff'
            caption='Acheter' 
          />
        </View>
        <View style={{width: 180}}>
          <Button 
            rounded bgColor='#fff' textColor='#ff52a8'
            caption='Déposer' 
            icon={require('images/arrow-direction.png')} iconColor='#ff52a8' rightIcon
          />
        </View>
      </View>
    </>
  )
}

/*




*/