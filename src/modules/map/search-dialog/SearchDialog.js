import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  LayoutAnimation,
  Keyboard
} from 'react-native';
import { Button } from 'native-base';
import { wrapperStyles, barStyles, resultStyles } from './SearchDialog.style'
import { em } from '~/constants/Layout';

export default class SearchDialog extends React.Component {
  // searchResults - temporary variable to hold station infos
  state = {
    dialogStatus: 'until',
    searchResults: [],
    isKeyboardVisible: false
  };

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
    console.log('==== _keyboardDidShow');
  }

  _keyboardDidHide() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: false });
    console.log('==== _keyboardDidHide');
  }

  render = () => {
    const { onCancel, appActions } = this.props;
    const { _t } = appActions;
    const { dialogStatus, searchResults, isKeyboardVisible } = this.state;
    
    return (
      <Wrapper dialogStatus={dialogStatus} isShowKeyboard={isKeyboardVisible}>
        <SearchBar
          dialogStatus={dialogStatus}
          onChangeSearch={this.onChangeSearch}
          onCancel={onCancel}
          appActions={appActions}
        />
        <SearchResultList dialogStatus={dialogStatus} searchResults={searchResults}/>
      </Wrapper>
    )
  }

  onChangeSearch = (searchText) => {
    if (searchText == '') {
      this.setState({
        ...this.state,
        dialogStatus: 'until',
        searchResults: []
      })
      return
    }
    /*
    this.setState({
      ...this.state,
      dialogStatus: 'searching'
    })    
    */   

    // after searched
    // just for test
    const searchResults = [
      {
        image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        title: 'Bar',
        openHour: 'Ferme a 22:00',
        batteries: 18,
        places: 6,
        distance: 'Go 2min-200m'
      },
      {
        image: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
        title: 'Bar',
        openHour: 'Ferme a 22:00',
        batteries: 18,
        places: 6,
        distance: 'Go 2min-200m'
      },
      {
        image: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
        title: 'Bar',
        openHour: 'Ferme a 22:00',
        batteries: 18, 
        places: 6,
        distance: 'Go 2min-200m'
      }
    ]

    this.setState({
      ...this.state,
      searchResults,
      dialogStatus: 'searched'
    })
  }
}

const Wrapper = ({ children, dialogStatus, isShowKeyboard }) => {
  keyboardStyle = isShowKeyboard ? {bottom: 100} : {bottom: 0}
  return (
  <View 
    style={
      dialogStatus=='until' 
      ? [wrapperStyles.container, keyboardStyle] 
      : [wrapperStyles.container, wrapperStyles.containerExpanded, keyboardStyle]}
    >
    <View style={wrapperStyles.bgImageContainer}>
      <Image source={require('images/slide.png')} style={wrapperStyles.bgImage}/>
    </View>
    {children}
  </View>
)}

class SearchBar extends React.Component {
  render = () => {
    const { onChangeSearch, dialogStatus, onCancel, appActions } = this.props;
    const { _t } = appActions;
    console.log('===== SearchBar: props: ', this.props);
    return (
      <>
        <View style={barStyles.container}>
          <View style={barStyles.inputContainer}>
            <Image source={require('images/search.png')} style={barStyles.searchIcon}/>
            <TextInput 
              style={barStyles.searchText}
              placeholder={_t('Rechercher')}
              onChangeText={text => onChangeSearch(text)}
            />
          </View>
          <View>
            <TouchableOpacity style={barStyles.searchButton} onPress={onCancel}>
              <Text style={dialogStatus=='until' ? barStyles.searchButtonText : barStyles.searchButtonTextOnSearched}>
                {_t('Annuler')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

class SearchResultList extends React.Component {
  render = () => {
    const { searchResults, dialogStatus } = this.props;
    return (
      <View style={resultStyles.container}>
        {searchResults.map((searchResult, key) => (
          <SearchResultItem searchResult={searchResult} key={key}/>
        ))}
      </View>
    )
  }
}

const SearchResultItem = ({searchResult}) => (
  <View style={resultStyles.itemContainer}>
    <View style={resultStyles.itemImageContainer}>
      <Image source={{uri: searchResult.image}} style={resultStyles.itemImage} />
    </View>
    <View style={resultStyles.itemDesc}>
      <Text style={resultStyles.itemTitle}>{searchResult.title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={resultStyles.itemOuvert}>Ouvert</Text>
        <Text style={{color: '#C9C9CE'}}> · Ferme à </Text>
        <Text style={{color: '#C9C9CE'}}>22:00</Text>
      </View>
      <View style={resultStyles.itemBattery}>
        <Text style={{color: '#35CDFA'}}>{searchResult.batteries} batteries</Text>
        <Text style={{left: 20, color: '#35CDFA'}}>6 places</Text>
      </View>
      <View style={resultStyles.itemGo}>
        <Image source={require('images/go.png')} style={resultStyles.goImage}/>
        <Text style={resultStyles.itemGoText}>Go 2mn - 200m</Text>
      </View>
    </View>
  </View>
)
