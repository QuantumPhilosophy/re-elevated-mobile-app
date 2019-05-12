import React from 'react'
import { View, Text } from 'native-base'

export default function SearchTabAdv (props) {
  console.log('SearchTabAdv props', props)
  return (
    <View>
      <Text>Showing up to the party like *internal screaming* with Props {props.props}</Text>
    </View>
  )
}
