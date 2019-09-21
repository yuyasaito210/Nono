import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HourRangeSlider from '~/components/HourRangeSlider';
import styles from './FilterDialog.style';
import Toggle from '~/components/Toggle';
import { W, em } from '~/constants/Layout';
import { Button } from '~/components'

export default class FilterDialog extends React.Component {
  state = {
    fromHour: '12:00', toHour: '19:00',
    isOpened: false
  }
  render = () => {
    let hours = [];
    for (let i=7;i<=22;i++) {
      let hour = i+':00';
      hours.push(hour);
    }
    let { fromHour, toHour } = this.state;
    const { isOpened } = this.state;
    return (
      <>
        <Wrapper>
          <View style={{paddingHorizontal: 20*em}}>
            <OpenNow onToggle={this.onToggleOpened.bind(this)} on={isOpened} />
            <OpenHours hours={hours} onChangeHours={this.onChangeHours.bind(this)} 
              fromHour={fromHour} toHour={toHour}
            />
            <ActionBar />
          </View>          
        </Wrapper>
      </>
    )
  }

  onChangeHours(fromHour, toHour) {
    this.setState({
      ...this.state,
      fromHour, toHour
    })
  }

  onToggleOpened() {
    this.setState({
      ...this.state,
      isOpened: !this.state.isOpened
    })
  }
}

const OpenNow  = ({ on, onToggle }) => (
  <View style={styles.filterOption.container}>
    <Text style={styles.filterOption.text}>Ouvert maintenant</Text>
    <Toggle on={on} onToggle={onToggle}/>
  </View>
)

const OpenHours = ({ hours, onChangeHours, fromHour, toHour }) => {
  return (
    <>
      <View style={styles.filterOption.container}>
        <Text style={styles.filterOption.text}>Ouvert de </Text>
      </View>
      <View style={styles.filterOption.container}>
        <Text style={styles.filterOption.text}>{fromHour}</Text>
        <Text style={styles.filterOption.text}>{toHour}</Text>
      </View>
      <View style={styles.filterOption.container}>
        <HourRangeSlider hours={hours} onChangeHours={onChangeHours} 
          fromHour={fromHour} toHour={toHour}
          style={{width: W-20*em, height: 40*em, marginHorizontal: 10*em}}
        />
      </View>
    </>
  )  
}

const Wrapper = ({ children }) => (
  <View style={styles.wrapper.container}>
    <View style={styles.wrapper.headerBar}>
      <View style={styles.wrapper.filterContainer}>
        <Image source={require('images/filter.png')} style={styles.wrapper.filterImage} />
        <Text style={styles.wrapper.filterText}>Filtres</Text>
      </View>
      <View style={styles.wrapper.resetFilterButtonContainer}>
        <ResetFilterButton style={styles.wrapper.resetFilterButton}/>
      </View>
    </View>
    {children}
  </View>
)

const ResetFilterButton = ({style}) => (
  <TouchableOpacity>
    <Text style={style}>Effacer</Text>
  </TouchableOpacity>
)

const ActionBar = () => (
  <View style={styles.bottomBar.container}>
    <View style={styles.bottomBar.searchButtonContainer}>
      <Button 
        primary rounded 
        caption='Annuler' 
      />
    </View>
    <View style={styles.bottomBar.resetButtonContainer}>
      <Button 
        rounded textColor='#35CDFA' 
        bgColor='#fff'    
        caption='Voir les 7 résultats' 
      />
    </View>
  </View>
)