import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import SignUp from '../screens/Auth/SignUp'
import Login from '../screens/Auth/Login'

export default createStackNavigator({
  Login: Login,
  SignUp: SignUp
})
