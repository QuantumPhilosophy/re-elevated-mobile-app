import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, H1, H2 } from 'native-base'
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
  }

  handleInputChange = (search) => {
    this.setState({ bookSearch: search })
  }

  goHome = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Auth',
    })
    this.props.navigation.dispatch(navigateAction)
  }

  logout = () => {
    API.logoutUser()
      .then(res => this.goHome())
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content>
          <SearchBar
            handleInputChange={this.handleInputChange}
            search={this.searchBook}
            logout={this.logout}
          />
          <View style={styles.view}>
            <View>
              <H1 style={styles.text}>Elevated</H1>
            </View>
            <View>
              <H2 style={styles.text}>Account Page</H2>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#000000',
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#057e3a',
  },
})
