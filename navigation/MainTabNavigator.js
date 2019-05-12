import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import AccountScreen from '../screens/AccountScreen'
import SearchScreen from '../screens/SearchScreen'
import StrainDetail from '../screens/StrainDetail'
import LabelDetail from '../screens/LabelDetail'
import TabBarIcon from '../components/TabBarIcon'
import Chat from '../screens/Chat'

const SearchStack = createStackNavigator({
  Search: SearchScreen,
  StrainDetail: StrainDetail,
  LabelDetail: LabelDetail
})

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-search'
          // ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  )
}

const AccountsStack = createStackNavigator({
  Account: AccountScreen,
  StrainDetail: StrainDetail
})

AccountsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  )
}

// const ChatStack = createStackNavigator({
//   Chat: Chat
// })
//
// Chat.navigationOptions = {
//   tabBarLabel: 'chat',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   )
// }

export default createBottomTabNavigator({
    SearchStack,
    AccountsStack,
    // ChatStack
  },
  {
    tabBarOptions: {
      activeTintColor: '#191919',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#000000'
      },
    }
  })
