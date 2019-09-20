import React from 'react';
import { View, TextInput, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { wrapperStyles, barStyles, resultStyles } from './SearchDialog.style'

export default class SearchDialog extends React.Component {
  // searchResults - temporary variable to hold station infos
  state = {
    dialogStatus: 'until',
    searchResults: []
  };

  render = () => {
    const { dialogStatus } = this.state
    // just for test
    const { searchResults } = this.state
    return (
      <Wrapper dialogStatus={dialogStatus}>
        <SearchBar dialogStatus={dialogStatus} onChangeSearch={this.onChangeSearch}/>
        <SearchResultList dialogStatus={dialogStatus} searchResults={searchResults}/>
      </Wrapper>
    )
  }

  onChangeSearch = (searchText) => {
    if (searchText == '') {
      this.setState({
        ...this.state,
        dialogStatus: 'until'
      })
      return
    }
    this.setState({
      ...this.state,
      dialogStatus: 'searching'
    })

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

const Wrapper = ({ children, dialogStatus }) => (
  <View style={dialogStatus=='until'?wrapperStyles.container:[wrapperStyles.container, wrapperStyles.containerExpanded]}>
    <View style={wrapperStyles.bgImageContainer}>
      <Image source={require('images/slide.png')} style={wrapperStyles.bgImage}/>
    </View>
    {children}
  </View>
)

class SearchBar extends React.Component {
  render = () => {
    const { onChangeSearch, dialogStatus } = this.props
    return (
      <>
        <View style={barStyles.container}>
          <View style={barStyles.inputContainer}>
            <Image source={require('images/search.png')} style={barStyles.searchIcon}/>
            <TextInput style={barStyles.searchText} placeholder='Rechercher' onChangeText={text => onChangeSearch(text)}/>
          </View>
          <View>
            <TouchableOpacity style={barStyles.searchButton}>
              <Text style={dialogStatus=='until'?barStyles.searchButtonText:barStyles.searchButtonTextOnSearched}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

class SearchResultList extends React.Component {
  render = () => {
    const { searchResults } = this.props;
    console.log(searchResults)
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
        <Text style={resultStyles.itemOuvDesc}> · Ferme à </Text>
        <Text>22:00</Text>
      </View>
      <View style={resultStyles.itemBattery}>
        <Text style={{color: '#35CDFA'}}>{searchResult.batteries} batteries</Text>
        <Text style={{left: 20, color: '#35CDFA'}}>6 places</Text>
      </View>
      <View style={resultStyles.itemGo}>
        <Image source={require('images/go.png')} style={resultStyles.goImage}/>
        <Text style={{color: '#35CDFA', marginLeft: 5, fontSize: 18}}>Go 2mn - 200m</Text>
      </View>
    </View>
  </View>
)
