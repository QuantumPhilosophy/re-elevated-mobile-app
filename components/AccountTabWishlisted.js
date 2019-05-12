import React from 'react'
import { StyleSheet } from 'react-native'
import { View, H1, H2 } from 'native-base'

export default function AccountTabWishlisted (props) {
  console.log('AccountTabWishlisted props', props)
  return (
    <View style={styles.view}>
      <View>
        <H1 style={styles.text}>Elevated</H1>
      </View>
      <View>
        <H2 style={styles.text}>{props.props} Page</H2>
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
