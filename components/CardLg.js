import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Card, Thumbnail, Left, Right, CardItem, Text, View, Container } from 'native-base'

// Don't forget, you can absolute re-use this for labels vs strains if the data is similar and needs to go in the same
// place. props.name will take the value of the 'name' key fed into it, and if you want something besides props.flavor,
// use a || to make JS look for one key or the other. EX: {props.flavor || props.label_address}

export default function CardLg (props) {
  return (
    <Card>
      <CardItem header style={styles.carditem}>
        <Left>
          <Thumbnail source={require('../assets/images/sativa.jpg')} />
          <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 24, color: 'white' }}>{props.name}</Text>
        </Left>
      </CardItem>
      <CardItem style={styles.carditem}>
        <View height={225}>
          <ScrollView>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>About: </Text><Text style={{ color: 'white' }}>{props.description}</Text>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Flavor notes: </Text><Text style={{ color: 'white' }}>{props.flavor}</Text>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Medical benefits: </Text><Text style={{ color: 'white' }}>{props.medical}</Text>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Positive benefits: </Text><Text style={{ color: 'white' }}>{props.positive}</Text>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Negative benefits: </Text><Text style={{ color: 'white' }}>{props.negative}</Text>
          </ScrollView>
        </View>
      </CardItem>
      <CardItem footer style={styles.carditem}>
        <Left>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Rating: </Text><Text style={{ color: 'white' }}>{props.rating} </Text>
        </Left>
        <Right>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Race: </Text><Text style={{ color: 'white' }}>{props.race}</Text>
        </Right>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  carditem: {
    flex: 1,
    backgroundColor: '#000'
  }
})
