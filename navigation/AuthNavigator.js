import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Login from '../screens/Auth/Login'
import SignUp from '../screens/Auth/SignUp'

export default createStackNavigator({
  Login: {
    screen: Login,
    path: '/loginUser'
  },
  SignUp: {
    screen: SignUp,
    path: '/signup'
  }
})

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };
