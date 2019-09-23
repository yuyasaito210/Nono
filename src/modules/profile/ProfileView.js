import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from '../../styles';
import { Text } from '../../components/StyledText';
import styles from './styles';
import ProfileMenuViewContainer from './menu/ProfileMenuViewContainer';
import MapSectionContainer from '../map/map-section/MapSectionContainer';

export default class ProfileView extends Component {
  state = {
    menuVisible: true,
  }
  
  componentWillMount() {

  }
  
  setMenuVisible(visible) {
    this.setState({menuVisible: visible});
  }

  render() {
    const { menuVisible } = this.state
    return (
      <View style={styles.container}>
        <MapSectionContainer />
        <ProfileMenuViewContainer visiable={menuVisible} />
      </View>
    );
  }
}
