import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Content, Tab, Tabs } from 'native-base'
import AccountTabAchieved from './AccountTabAchieved'
import AccountTabFriended from './AccountTabFriended'
import AccountTabTried from './AccountTabTried'
import AccountTabWishlisted from './AccountTabWishlisted'
import SearchBar from './SearchBar'
import API from '../utils/API'

export default class AccountTabNav extends Component {
  state = {
    user: null,
    apiStrains: [],
    apiLabels: []
  }

  componentDidMount () {
    API.getStrains().then(response => {
      this.setState({
        apiStrains: response.data,
      })
      // console.log('STATE', this.state)
    }).catch((error) => {
      console.log(error)
    })

    API.getLabels().then((response) => {
      this.setState({
        apiLabels: response.data,
      })
    }).catch(error => {
      console.log(error)
    })
  }

  labelDetail = (labelObj) => {
    console.log('labelObj', labelObj)
    const navigateAction = NavigationActions.navigate({
      routeName: 'LabelDetail',
      params: { data: labelObj }
    })
    this.props.navigation.dispatch(navigateAction)
  }

  strainDetail = (strainObj) => {
    console.log('strainObj', strainObj)
    const navigateAction = NavigationActions.navigate({
      routeName: 'StrainDetail',
      params: { data: strainObj }
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render () {
    return (
      <Content style={styles.content}>
        <SearchBar/>
        <Tabs>
          <Tab heading="Wishlisted" tabStyle={styles.tab} activeTabStyle={styles.activeTab}>
            <AccountTabWishlisted
              props={'Wishlisted!!'}
            />
          </Tab>

          <Tab heading="Tried" tabStyle={styles.tab} activeTabStyle={styles.activeTab}>
            <AccountTabTried
              props={'Tried!!'}
            />
          </Tab>

          <Tab heading="Friended" tabStyle={styles.tab} activeTabStyle={styles.activeTab}>
            <AccountTabFriended
              props={'Friended!!'}
            />
          </Tab>

          <Tab heading="Achieved" tabStyle={styles.tab} activeTabStyle={styles.activeTab}>
            <AccountTabAchieved
              props={'Achieved!!'}
            />
          </Tab>
        </Tabs>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#000'
  },
  activeTab: {
    backgroundColor: '#191919'
  },
  content: {
    backgroundColor: '#000'
  }
})
