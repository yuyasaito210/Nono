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
    const { onCancel, onSee, appActions } = this.props;
    const { _t } = appActions;

    let { fromHour, toHour } = this.state;
    const { isOpened } = this.state;

    let hours = [];
    for (let i=7;i<=22;i++) {
      let hour = i+':00';
      hours.push(hour);
    }
    return (
      <>
        {/* <Wrapper> */}
        <View style={styles.wrapper.container}>
          <View style={styles.wrapper.headerBar}>
            <View style={styles.wrapper.filterContainer}>
              <Image source={require('images/filter.png')} style={styles.wrapper.filterImage} />
              <Text style={styles.wrapper.filterText}>{_t('Filtres')}</Text>
            </View>
            <View style={styles.wrapper.resetFilterButtonContainer}>
              {/* <ResetFilterButton style={styles.wrapper.resetFilterButton}/> */}
              <TouchableOpacity>
                <Text style={styles.wrapper.resetFilterButton}>{_t('Effacer')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{paddingHorizontal: 20}}>
            {/* <OpenNow onToggle={this.onToggleOpened)} on={isOpened} /> */}
            <View style={styles.filterOption.container}>
              <Text style={styles.filterOption.text}>{_t('Open now')}</Text>
              <Toggle on={isOpened} onToggle={this.onToggleOpened}/>
            </View>

            {/* <OpenHours hours={hours} onChangeHours={this.onChangeHours} 
              fromHour={fromHour} toHour={toHour}
            /> */}
            <>
              <View style={styles.filterOption.container}>
                <Text style={styles.filterOption.text}>{_t('Open from')}</Text>
              </View>
              <View style={styles.filterOption.container}>
                <Text style={styles.filterOption.text}>{fromHour}</Text>
                <Text style={styles.filterOption.text}>{toHour}</Text>
              </View>
              <View style={styles.filterOption.container}>
                <HourRangeSlider hours={hours} onChangeHours={this.onChangeHours} 
                  fromHour={fromHour} toHour={toHour}
                  style={{width: W-20, height: 40, marginHorizontal: 10}}
                />
              </View>
            </>


            {/* <ActionBar onCancel={onCancel} onSee={onSee}/> */}
            <View style={styles.bottomBar.container}>
              <View style={styles.bottomBar.searchButtonContainer}>
                <Button 
                  primary rounded 
                  caption={_t('Cancel')}
                  onPress={() => onCancel()}
                />
              </View>
              <View style={styles.bottomBar.resetButtonContainer}>
                <Button 
                  rounded textColor='#35CDFA' 
                  bgColor='#fff'    
                  caption='Voir les 7 résultats' 
                  onPress={() => onSee()}
                />
              </View>
            </View>
          </View>          
        {/* </Wrapper> */}
        </View>
      </>
    )
  }

  onChangeHours = (fromHour, toHour) => {
    this.setState({
      ...this.state,
      fromHour, toHour
    })
  };

  onToggleOpened = () => {
    this.setState({
      ...this.state,
      isOpened: !this.state.isOpened
    })
  }
};

// const OpenNow  = ({ on, onToggle }) => (
//   <View style={styles.filterOption.container}>
//     <Text style={styles.filterOption.text}>{_t('Open now')}</Text>
//     <Toggle on={on} onToggle={onToggle}/>
//   </View>
// )

// const OpenHours = ({ hours, onChangeHours, fromHour, toHour }) => {
//   return (
//     <>
//       <View style={styles.filterOption.container}>
//         <Text style={styles.filterOption.text}>{_t('Open from')}</Text>
//       </View>
//       <View style={styles.filterOption.container}>
//         <Text style={styles.filterOption.text}>{fromHour}</Text>
//         <Text style={styles.filterOption.text}>{toHour}</Text>
//       </View>
//       <View style={styles.filterOption.container}>
//         <HourRangeSlider hours={hours} onChangeHours={onChangeHours} 
//           fromHour={fromHour} toHour={toHour}
//           style={{width: W-20, height: 40, marginHorizontal: 10}}
//         />
//       </View>
//     </>
//   )  
// }

// const Wrapper = (props, { children }) => (
//   <View style={styles.wrapper.container}>
//     <View style={styles.wrapper.headerBar}>
//       <View style={styles.wrapper.filterContainer}>
//         <Image source={require('images/filter.png')} style={styles.wrapper.filterImage} />
//         <Text style={styles.wrapper.filterText}>{_t('Filtres')}</Text>
//       </View>
//       <View style={styles.wrapper.resetFilterButtonContainer}>
//         {/* <ResetFilterButton style={styles.wrapper.resetFilterButton}/> */}
//         <TouchableOpacity>
//           <Text style={styles.wrapper.resetFilterButtonContainer}>{_t('Effacer')}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//     {children}
//   </View>
// )

// const ResetFilterButton = ({style}) => (
//   <TouchableOpacity>
//     <Text style={style}>Effacer</Text>
//   </TouchableOpacity>
// )

// const ActionBar = () => (
//   <View style={styles.bottomBar.container}>
//     <View style={styles.bottomBar.searchButtonContainer}>
//       <Button 
//         primary rounded 
//         caption={_t('Cancel')}
//         onPress={() => props.onCancel()}
//       />
//     </View>
//     <View style={styles.bottomBar.resetButtonContainer}>
//       <Button 
//         rounded textColor='#35CDFA' 
//         bgColor='#fff'    
//         caption='Voir les 7 résultats' 
//         onPress={() => props.onSee()}
//       />
//     </View>
//   </View>
// )