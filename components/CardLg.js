import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Card, Thumbnail, Left, CardItem, Text, View } from 'native-base'

// Large card for strain and label title information.
export function StrainCardLg (props) {
  // console.log('StrainCardLg props', props)
  const {
    strain_name,
    strain_flavor,
    strain_medical,
    strain_positive,
    strain_negative,
    strain_descr,
    strain_race,
    strain_avg_rating
  } = props.data
  return (
    <Card>
      <CardItem header style={styles.carditem}>
        <Left>
          <Thumbnail source={require('../assets/images/sativa.png')} style={{ marginRight: 5 }}/>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'stretch'
          }}>
            <View>
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 24, color: '#057e3a' }}>{strain_name}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
                Strain Rating: <Text style={{ fontWeight: 'normal', color: '#057e3a' }}>{strain_avg_rating}</Text>
              </Text>
            </View>
          </View>
        </Left>
      </CardItem>

      <CardItem style={styles.carditem}>
        <ScrollView height={175}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#057e3a' }}>Attributes</Text>
          <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
            Flavor notes: <Text style={{ fontWeight: 'normal', color: 'green' }}>{strain_flavor}</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
            Medical: <Text style={{ fontWeight: 'normal', color: 'green' }}>{strain_medical}</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
            Positive: <Text style={{ fontWeight: 'normal', color: 'green' }}>{strain_positive}</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
            Negative: <Text style={{ fontWeight: 'normal', color: 'red' }}>{strain_negative}</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#057e3a' }}>About </Text>
          <Text style={{ fontWeight: 'normal', color: 'green' }}>{strain_descr}</Text>
        </ScrollView>
      </CardItem>

      <CardItem footer style={styles.carditem}>
        <Left>
          <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
            Race: <Text style={{ fontWeight: 'normal', color: 'green' }}>{strain_race}</Text>
          </Text>
        </Left>
      </CardItem>
    </Card>
  )
}

export function LabelCardLg (props) {
  // console.log('LabelCardLg props', props)
  const { label_name, label_avg_rating } = props.data
  return (
    <Card style={styles.card}>
      <CardItem header style={styles.carditem}>
        <Left>
          <Thumbnail source={require('../assets/images/sativa.png')} style={{ marginRight: 5 }}/>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'stretch'
          }}>
            <View>
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 24, color: '#057e3a' }}>{label_name}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
                Label Rating: <Text style={{ fontWeight: 'normal', color: '#057e3a' }}>{label_avg_rating}</Text>
              </Text>
            </View>
          </View>
        </Left>
      </CardItem>

      <CardItem style={styles.carditem}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#057e3a' }}>Something About {label_name}</Text>
      </CardItem>
    </Card>
  )
}

export default function CardLg (props) {
  // console.log('CardLg props', props)
  const isStrain = props.strain_name
  if (isStrain) {
    return <StrainCardLg
      data={props}
    />
  }
  return <LabelCardLg
    data={props}
  />
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#000',
  },
  carditem: {
    flex: 1,
    backgroundColor: '#191919',
  },
  text: {
    color: '#057e3a',
  },
})
