import React, { Component } from 'react'
import { WebView, Text, View, ScrollView, StyleSheet, Platform } from 'react-native'
import { Container, Content, Header } from 'native-base'
import { NavigationActions } from 'react-navigation'
import SearchBar from '../components/SearchBar'
import API from '../utils/API'

export default class AccountScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    bookSearch: '',
    books: []
  }

  componentDidMount () {
    console.log('AccountScreen triggered')
    // this.props.navigation.addListener('willFocus', (route) => {
    //   // API.getUser()
    //   // .then(res => {
    //   // this.getBooks(res.data.user._id)
    //   this.getBooks()
    //   // })
    // })
  }

  handleInputChange = (search) => {
    this.setState({ bookSearch: search })
  }

  // bookDetail = (bookObj) => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: 'StrainDetail',
  //     params: { data: bookObj }
  //   })
  //   this.props.navigation.dispatch(navigateAction)
  //   // this.props.navigation.goBack();
  // }

  // getBooks = (id) => {
  //   API.getBooks()
  //     .then(res => {
  //       console.log('SAVED BOOKS: ', res.data)
  //       this.setState({ books: res.data })
  //     })
  // }

  goHome = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Auth',
    })
    this.props.navigation.dispatch(navigateAction)
    // this.props.navigation.goBack();
  }

  logout = () => {
    API.logoutUser()
      .then(res => this.goHome())
      .catch(err => console.log(err))
  }

  render () {
    return (
      <View style={styles.container}>
        <SearchBar
          handleInputChange={this.handleInputChange}
          search={this.searchBook}
          logout={this.logout}
        />
        <Text>Elevated Favorites</Text>
        {/*  <ScrollView>*/}

        {/*    {books ? books.map(book => {*/}
        {/*        return (*/}
        {/*          <BookCard*/}
        {/*            key={book.id}*/}
        {/*            data={book}*/}
        {/*            bookDetail={this.bookDetail}/>*/}
        {/*        )*/}
        {/*      }*/}
        {/*    ) : <Text>No Saved Books</Text>}*/}
        {/*  </ScrollView>*/}
        {/*</Content>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
