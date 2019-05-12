import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'
import SearchTabNav from '../components/SearchTabNav'
import API from '../utils/API'

export default class SearchScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    // TODO: update bookSearch for strain / label searching
    // bookSearch: '',
    user: null
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

  render () {
    return (
      <Container style={styles.container}>
        <SearchTabNav
          navigation={this.props.navigation}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})
