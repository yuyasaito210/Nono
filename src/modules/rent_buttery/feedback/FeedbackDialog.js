import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  LayoutAnimation,
  Platform
} from 'react-native';
import styles from '../styles';
import { Button } from '~/components';
import StarRating from 'react-native-star-rating';
import { W, H, em } from '~/constants/Layout';

export default class FeedbackDialog extends React.Component {
  state = {
    status: 'until', rating: 0,
    isKeyboardVisible: false
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }),
      this._keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }),
      this._keyboardDidHide.bind(this),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: true });
  }

  _keyboardDidHide() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: false });
  }

  render = () => {
    const { status, rating, isKeyboardVisible } = this.state;
    keyboardStyle = isKeyboardVisible ? {bottom: 250} : {bottom: 0}

    return (
      <View style={[styles.feedbackDialog.container, keyboardStyle]}>      
        {status=='until' && 
          <>
            <View style={styles.feedbackDialog.fancyImageContainer}>
              <Image source={require('images/logo-color.png')} />
            </View>
            <View style={styles.feedbackDialog.textContainer}>
              <Text style={styles.feedbackDialog.title}>
                Tu aimes notre service ?
              </Text>
              <Text style={styles.feedbackDialog.desc}>
                Clique sur les étoiles pour noter notre application.
              </Text>              
            </View>
            <View style={styles.feedbackDialog.starContainer}>
              <StarRating 
                starSize={30}
                selectedStar={this.setRating} rating={rating}
                fullStarColor='#ffdf00' emptyStarColor='#bfbfc4'
              />
            </View>
            <View style={styles.feedbackDialog.buttonContainer}>
              <Button 
                textColor='#35cdfa' bgColor='transparent' 
                caption='Plus tard' onPress={this.onSetRating}/>
            </View>
          </>
        }
        {status=='rated' && 
          <>
            <View style={styles.feedbackDialog.fancyImageContainer}>
              {rating==5 &&
                <Image source={require('images/happy-nono.png')} />
              }
              {rating<5 &&
                <Image source={require('images/nono.sad.png')} />
              }              
            </View>
            <View style={styles.feedbackDialog.textContainer}>
              <Text style={styles.feedbackDialog.title}>
                Tu aimes notre service ?
              </Text>
            </View>
            <View style={styles.feedbackDialog.starContainer}>
              <StarRating 
                starSize={30} disabled={true}
                rating={rating}
                fullStarColor='#ffdf00' emptyStarColor='#bfbfc4'
              />
            </View>
            <View style={styles.feedbackDialog.textContainer}>
              <TouchableOpacity onPress={this.writeReview}>
                <Text style={[
                  styles.feedbackDialog.desc,
                  {color: '#35cdfa', fontSize: 12*em}
                ]}>Écrire un commentaire</Text>
              </TouchableOpacity>              
            </View>
            <View style={styles.feedbackDialog.buttonContainer}>
              <Button 
                rounded
                icon={require('images/send.png')} iconColor='#fff'
                textColor='#fff' bgColor='#35cdfa' 
                caption='Envoyer' onPress={this.onSetRating}/>
            </View>
          </>
        }
        {status=='write_review' && 
          <>
            <View style={styles.feedbackDialog.fancyImageContainer}>
              {rating==5 &&
                <Image source={require('images/happy-nono.png')} />
              }
              {rating<5 &&
                <Image source={require('images/nono.sad.png')} />
              }              
            </View>
            <View style={styles.feedbackDialog.textContainer}>
              <Text style={styles.feedbackDialog.title}>
                Nous sommes désolés.
              </Text>
            </View>
            <View style={styles.feedbackDialog.starContainer}>
              <StarRating 
                starSize={30} disabled={true}
                rating={rating}
                fullStarColor='#ffdf00' emptyStarColor='#bfbfc4'
              />
            </View>
            <View style={styles.feedbackDialog.textInputContainer}>
              <TextInput 
                multiline={true} numberOfLines={5}
                placeholder='Dites nous comment améliorer notre service'
                style={{
                  borderRadius: 10*em,
                  backgroundColor: '#f8f8f8',
                  padding: 10*em, height: 100*em
                }}
              />
            </View>
            <View style={styles.feedbackDialog.buttonContainer}>
              <Button 
                rounded
                icon={require('images/send.png')} iconColor='#fff'
                textColor='#fff' bgColor='#35cdfa' 
                caption='Envoyer' onPress={this.onSetRating}/>
            </View>
          </>
        }
      </View>
    )
  }

  setRating = (rating) => {
    this.setState({rating})
  }

  onSetRating = () => {
    const { rating } = this.state;
    this.setState({status: 'rated'}, () => {
      const { onClickRaiting } = this.props;
      onClickRaiting && onClickRaiting();
    })
  }

  writeReview = () => {
    this.setState({status: 'write_review'})
  }
}
