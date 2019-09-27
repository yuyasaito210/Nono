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
    isKeyboardVisible: false,
    score: 0,
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

  setRating = (rating) => {
    this.setState({rating, status: 'rated'})
  }

  onClickLater = () => {
    const { onClickLater } = this.props;
    onClickLater && onClickLater(this.state.score);
  };

  onSetRating = () => {
    const { rating } = this.state;
    this.setState({status: 'rated'});
  };

  writeReview = () => {
    this.setState({status: 'write_review'})
  };

  onSendRating = () => {
    const { onSendRating } = this.props;
    onSendRating && onSendRating();
  };

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
                caption='Plus tard' onPress={this.onClickLater}/>
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
                  {color: '#35cdfa', fontSize: 12}
                ]}>Écrire un commentaire</Text>
              </TouchableOpacity>              
            </View>
            <View style={styles.feedbackDialog.buttonContainer}>
              <Button 
                rounded
                icon={require('images/send.png')} iconColor='#fff'
                textColor='#fff' bgColor='#35cdfa' 
                caption='Envoyer' onPress={this.onSendRating}/>
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
                  borderRadius: 10,
                  backgroundColor: '#f8f8f8',
                  padding: 10, height: 100
                }}
              />
            </View>
            <View style={styles.feedbackDialog.buttonContainer}>
              <Button 
                rounded
                icon={require('images/send.png')} iconColor='#fff'
                textColor='#fff' bgColor='#35cdfa' 
                caption='Envoyer' onPress={this.onSendRating}/>
            </View>
          </>
        }
      </View>
    )
  }
}
