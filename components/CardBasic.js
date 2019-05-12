import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card, CardItem, Body, Thumbnail, Left } from 'native-base'

// Basic card for strain and label information.
export default function CardBasic (props) {
  // console.log('CardBasic props', props)
  return (
    <Card>
      <CardItem
        button
        style={styles.cardItem}
        onPress={() => { props.label_name ? props.labelDetail(props) : props.strainDetail(props) }}
      >
        <Left>
          <Thumbnail source={require('../assets/images/sativa.png')}/>
        </Left>
        <Body>
          <Text style={styles.cardText}>
            Name: <Text style={styles.cardTextOverride}>{props.strain_name || props.label_name}</Text>
          </Text>
          <Text style={styles.cardText}>
            Rating: <Text
            style={{ fontWeight: 'normal' }}>{props.strain_name ? props.strain_avg_rating : props.label_avg_rating}</Text>
          </Text>
          <Text style={styles.cardText}>
            Race: <Text style={{ fontWeight: 'normal' }}>{props.strain_race}</Text>
          </Text>
        </Body>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: '#191919'
  },
  cardText: {
    color: '#057e3a',
    fontWeight: 'bold'
  },
  cardTextOverride: {
    fontWeight: 'normal'
  }
})
