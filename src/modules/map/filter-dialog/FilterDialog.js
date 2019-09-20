import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './FilterDialog.style';

export default class FilterDialog extends React.Component {
  render = () => {
    return (
      <>
        <Wrapper>
          <Text>asd</Text>
        </Wrapper>
      </>
    )
  }
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