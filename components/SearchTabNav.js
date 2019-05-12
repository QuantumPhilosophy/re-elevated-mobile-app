import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { Container, Content, Tab, Tabs } from 'native-base'
import SearchTabStrains from './SearchTabStrains'
import SearchTabLabels from './SearchTabLabels'
import SearchTabAdv from './SearchTabAdv'
import SearchBar from './SearchBar'
import API from '../utils/API'
import { StyleSheet } from 'react-native'

export default class SearchTabNav extends Component {
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
      <Content>
        <SearchBar/>
        <Tabs>
          <Tab heading="Strains" tabStyle={styles.tab} activeTabStyle={styles.activeTab}>
            <SearchTabStrains
              apiStrains={this.state.apiStrains}
              strainDetail={this.strainDetail}
            />
          </Tab>

          <Tab heading="Labels" tabStyle={styles.tab} activeTabStyle={styles.activeTab}>
            <SearchTabLabels
              apiLabels={this.state.apiLabels}
              labelDetail={this.labelDetail}
            />
          </Tab>

          <Tab heading="Filter" tabStyle={styles.tab} activeTabStyle={styles.activeTab}>
            <SearchTabAdv
              props={'PROPS!!'}
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
  }
})
