import React, { Component } from 'react'
import { WebView, Text, View, ScrollView, StyleSheet, Platform } from 'react-native'
import { Container, Content, Header } from 'native-base'
import { NavigationActions } from 'react-navigation'
import SearchBar from '../components/SearchBar'
import API from '../utils/API'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    bookSearch: '',
    books: [],
    user: null,
    savingBook: false
  }

  componentDidMount () {
    console.log('HomeScreen triggered')
    // const user = this.props.navigation.state.params.data
    // console.log('user', user)
    // this.props.navigation.setParams({ user })
    // const navigateAction = NavigationActions.setParams({
    //   key: 'id-1547683730508-2',
    //   params: { user: user }
    // })

    // this.props.navigation.dispatch(navigateAction)

    // this.props.navigation.goBack();
    //
    // this.setState({ user })
  }

  // searchBook = (event) => {
  //   event.preventDefault()
  //   axios
  //     .get('https://www.googleapis.com/books/v1/volumes', { params: { q: this.state.bookSearch } })
  //     .then((results) => {
  //       // console.log(results)
  //       this.setState({ books: results.data.items })
  //     })
  //     .catch(err => console.log(err))
  // }

  handleInputChange = (search) => {
    this.setState({ bookSearch: search })
  }

  // bookDetail = (bookObj) => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: 'BookDetail',
  //     params: { data: bookObj }
  //   })
  //   this.props.navigation.dispatch(navigateAction)
  //   // this.props.navigation.goBack();
  // }

  // saveBook = (bookObj) => {
  //
  //   const { title, subtitle, description, authors, imageLinks, infoLink, googleId } = bookObj
  //
  //   const newBook = {
  //     title,
  //     subtitle,
  //     description,
  //     authors,
  //     image: imageLinks.thumbnail,
  //     infoLink,
  //     googleId
  //   }
  //   this.setState({ savingBook: true })
  //   // TODO: Add this.state.user_id as a parameter for user saved books
  //   API.saveBook(newBook)
  //     .then(res => this.setState({ savingBook: false }))
  //     .catch(err => this.setState({ savingBook: false, error: true, message }))
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

  // renderIndicator () {
  //   return (
  //     <ActivityIndicator style={{
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       position: 'absolute',
  //       left: '50%',
  //       top: '50%',
  //       zIndex: 1
  //     }} size="large" color="#0000ff"/>
  //   )
  // }

  render () {
    return (
      <View style={styles.container}>
        <SearchBar
          handleInputChange={this.handleInputChange}
          search={this.searchBook}
          logout={this.logout}
        />
        <Text>Elevated</Text>
        {/*<ScrollView*/}
        {/*  style={styles.container}*/}
        {/*  contentContainerStyle={styles.contentContainer}>*/}

        {/*  {this.state.books.map(book => {*/}
        {/*      const bookObj = {*/}
        {/*        ...book.volumeInfo,*/}
        {/*        googleId: book.id*/}
        {/*      }*/}

        {/*      return (*/}
        {/*        <BookCard*/}
        {/*          key={book.id}*/}
        {/*          data={bookObj}*/}
        {/*          bookDetail={this.bookDetail}*/}
        {/*          save={this.saveBook}/>*/}
        {/*      )*/}
        {/*    }*/}
        {/*  )}*/}
        {/*</ScrollView>*/}
        {/*{this.state.savingBook ? this.renderIndicator() : null}*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
