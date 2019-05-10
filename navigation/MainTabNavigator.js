import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MyFavorites from '../screens/MyFavorites'
import StrainDetail from '../screens/StrainDetail'
import Chat from '../screens/Chat'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  StrainDetail: {
    screen: StrainDetail,
    path: '/detail'
  }
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const MyFavoritesStack = createStackNavigator({
  MyFavorites: MyFavorites,
  StrainDetail: {
    screen: StrainDetail,
    path: '/detail'
  }
})

MyFavoritesStack.navigationOptions = {
  tabBarLabel: 'MyFavorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
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
  HomeStack,
  MyFavoritesStack
  // ChatStack
})
