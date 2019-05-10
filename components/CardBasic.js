import React from 'react'
import { Card, CardItem, Body, Button, Icon, Thumbnail, Left } from 'native-base'
import { Image, StyleSheet, Text } from 'react-native'

// Basic card for strain and label information. The data expected for each is of the same format, so feeding it the correct props will show the correct data in the correct view.
export default function CardBasic (props) {
  return (
    <Card>
      <CardItem style={styles.carditem}>
        <Left><Thumbnail source={require('../assets/images/sativa.jpg')}/></Left>
        <Body>
          <Text style={{fontWeight: 'bold'}}>Name: </Text><Text>{props.name}</Text>
          <Text style={{fontWeight: 'bold'}}>Rating:</Text><Text>{props.aveRating}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.carditem}>
        <Button
          transparent
          textStyle={{ color: 'white' }}
          onPress={() => { props.strainDetail(props.data) }}>
          <Icon name='link' />
          <Text>Strain Details</Text>
        </Button>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  carditem: {
    // backgroundColor: '#000'
  },
})
