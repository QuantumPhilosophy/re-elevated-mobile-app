import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, H1, H2 } from 'native-base'

export default function SearchTabAdv (props) {
  console.log('SearchTabAdv props', props)
  return (
    <View style={styles.view}>
      <View>
        <H1 style={styles.text}>Showing up to the party like</H1>
      </View>
      <View>
        <Text style={styles.text}>*internal screaming* with Props</Text>
      </View>
      <View>
        <H2 style={styles.text}>{props.props}</H2>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: '#000',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#057e3a',
  },
})
