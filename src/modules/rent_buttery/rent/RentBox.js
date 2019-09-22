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
            {marginVertical: 10*em}
          ]}
        >
          Durée de location
        </Text>
        <Text 
          style={[
            styles.rentBox.text,
            {marginVertical: 10*em, fontSize: 34*em, fontWeight: 'bold'}
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
          marginVertical: 20*em
        }}
      >
        <TouchableOpacity>
          <Text style={{fontSize: 20*em, fontWeight: 'bold', color: '#fff'}}>
            Loue une autre batterie
          </Text>
        </TouchableOpacity>
      </View>
      <View 
        style={{
          flexDirection: 'row', justifyContent: 'space-between',
          marginTop: 10*em, marginBottom: 30*em, marginHorizontal: 25*em
        }}
      >
        <View style={{width: 140*em}}>
          <Button 
            rounded bgColor='transparent' textColor='#fff'
            caption='Acheter' 
          />
        </View>
        <View style={{width: 180*em}}>
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