import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './FinishDialog.style';
import { Button } from '~/components';

export default class FinishDialog extends React.Component {
  render = () => {
    const { onLeaveStation, appActions } = this.props;
    return (
      <>
        <TopBox appActions={appActions}/>
        <BottomBox onPress={onLeaveStation} appActions={appActions}/>
      </>
    )
  }
}

const TopBox = ({appActions}) => {
  return (
    <View style={styles.topBox.container}>
      <View style={styles.topBox.topBarContainer}>
        <View style={styles.topBox.topBarImageContainer}>
          <Image source={require('images/icons8-down.png')} style={styles.topBox.topBarImage}/>
          <View style={styles.topBox.topBarDistanceContainer}>
            <Text style={styles.topBox.topBarDistance}>156</Text>
            <Text style={[styles.topBox.topBarDistance, {opacity: 0.5}]}>m</Text>
          </View>
        </View>
        <Text style={styles.topBox.topBarDesc}>{appActions._t('Go straight ahead')}</Text>
      </View>
      <View style={styles.topBox.bottomBarContainer}>
        <Text style={styles.topBox.bottomBarDesc}>{appActions._t('In later')}</Text>
        <Image source={require('images/icons8-left_up2.png')} style={styles.topBox.bottomBarImage}/>
      </View>
    </View>
  )
}

const BottomBox = ({onPress, appActions}) => {
  return (
    <View style={styles.bottomBox.container}>
      <View style={styles.bottomBox.bgImageContainer}>
        <Image source={require('images/slide.png')} style={{tintColor: '#bfbfc4'}}/>
      </View>
      <View style={styles.bottomBox.innerContainer}>
        <View>
          <Text style={styles.bottomBox.descTitle}>2 min</Text>
          <Text style={styles.bottomBox.descText}>2mn · 200m</Text>
        </View>
        <View>
          <Button 
            rounded bgColor='#FA6868' textColor='#fff'
            caption={appActions._t('Leave')}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  )
}