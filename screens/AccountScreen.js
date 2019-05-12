import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'
import AccountTabNav from '../components/AccountTabNav'
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
        <AccountTabNav
          navigation={this.props.navigation}
        />
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
