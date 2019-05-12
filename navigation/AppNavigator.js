import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import AuthStack from './AuthNavigator'

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainTabNavigator
  },

  // TODO: Once authorization is working, change 'Main' back to 'Auth'
  {
    initialRouteName: 'Main'
  }
))
