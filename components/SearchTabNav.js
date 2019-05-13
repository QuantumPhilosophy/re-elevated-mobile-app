import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { Content, Tab, Tabs } from 'native-base'
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
    // console.log('labelObj', labelObj)
    const navigateAction = NavigationActions.navigate({
      routeName: 'LabelDetail',
      params: { data: labelObj }
    })
    this.props.navigation.dispatch(navigateAction)
  }

  strainDetail = (strainObj) => {
    // console.log('strainObj', strainObj)
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
        <Tabs tabBarUnderlineStyle={styles.underline}>
          <Tab
            heading="Strains"
            tabStyle={styles.tab}
            textStyle={styles.text}
            activeTabStyle={styles.activeTab}
            activeTextStyle={styles.activeText}
          >
            <SearchTabStrains
              apiStrains={this.state.apiStrains}
              strainDetail={this.strainDetail}
            />
          </Tab>

          <Tab
            heading="Labels"
            tabStyle={styles.tab}
            textStyle={styles.text}
            activeTabStyle={styles.activeTab}
            activeTextStyle={styles.activeText}
          >
            <SearchTabLabels
              apiLabels={this.state.apiLabels}
              labelDetail={this.labelDetail}
            />
          </Tab>

          <Tab
            heading="Filter"
            tabStyle={styles.tab}
            textStyle={styles.text}
            activeTabStyle={styles.activeTab}
            activeTextStyle={styles.activeText}
          >
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
    backgroundColor: '#000',
    // color: 'green'
  },
  activeTab: {
    backgroundColor: '#191919'
  },
  text: {
    color: '#463B2F'
  },
  activeText: {
    color: '#73703a'
  },
  underline: {
    backgroundColor: '#66462a',
  },
  content: {
    backgroundColor: '#000'
  }
})
