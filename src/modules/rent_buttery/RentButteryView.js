import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { colors } from '../../styles';
import { Text } from '../../components/StyledText';
import styles from './styles';

export default class RentButterryScreen extends Component {
  state = {

  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={styles.section}>
            <Text size={20} white>
              Home
            </Text>
          </View>
          <View style={styles.section}>
            <Text color={colors.introText} size={15}>
              The smartest Way to build your mobile app
            </Text>
            <Text size={30} bold white style={styles.title}>
              React Native Starter
            </Text>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text
              color={colors.introText}
              hCenter
              size={15}
              style={styles.description}
            >
              {' '}
              A powerful starter project that bootstraps development of your
              mobile application and saves you $20 000*
            </Text>
            <View style={styles.priceContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text white bold size={50} style={styles.price}>
                  {'$499.95'}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.priceLink}
                onPress={() =>
                  console.log('===== clicked')
                }
              >
                <Text white size={14}>
                  {'Multiple Applications License'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
