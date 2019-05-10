import React, { Component } from 'react'
import { Container, Content, Header } from 'native-base'
import { NavigationActions } from 'react-navigation'
import SearchBar from '../components/SearchBar'
import CardBasic from '../components/CardBasic'
import API from '../utils/API'
import TopTab from "../components/TopTab"

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    // TODO: update bookSearch for strain / label searching
    // bookSearch: '',
    user: null,
    apiStrains: []
  };

  // On mount, fills apiStrains[] with strain objects for card instantiation.
  componentDidMount() {
    API.getStrains().then((response) => {
      this.setState({
        apiStrains: response.data,
      })
    }).catch(error => {
      console.log(error)
    })
  }

  // TODO: update to handle strain / label search
  handleInputChange = search => {
    this.setState({ bookSearch: search })
  }

  goHome = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Auth'
    })
    this.props.navigation.dispatch(navigateAction)
  }

  logout = () => {
    API.logoutUser()
      .then(res => this.goHome())
      .catch(err => console.log(err))
  }

  strainDetail = (strainObj) => {
    // console.log('-----------------------------')
    // console.log('strainDetail strainObj', strainObj)
    // console.log('-----------------------------')
    const navigateAction = NavigationActions.navigate({
      routeName: 'StrainDetail',
      params: { data: strainObj }
    })
    this.props.navigation.dispatch(navigateAction)
    // this.props.navigation.goBack();
  }

  render () {
    return (
      <Container
        style={styles.container}
        marginTop={Platform.os === "ios" ? 0 : 24}
      >
        {/* <SearchBar
          handleInputChange={this.handleInputChange}
          search={this.searchBook}
          logout={this.logout}
        /> */}
        <TopTab />
      </Container>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000'
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center'
//   },
//   contentContainer: {
//     paddingTop: 30
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50
//   },
//   homeScreenFilename: {
//     marginVertical: 7
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)'
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center'
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3
//       },
//       android: {
//         elevation: 20
//       }
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center'
//   },
//   navigationFilename: {
//     marginTop: 5
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center'
//   },
//   helpLink: {
//     paddingVertical: 15
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7'
//   }
// })
