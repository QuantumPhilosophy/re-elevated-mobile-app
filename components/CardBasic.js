import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card, CardItem, Thumbnail, Left, View } from 'native-base'

// Basic card for a single strain or label for showing basic information
function StrainCardBasic (props) {
  // console.log('StrainCardBasic props', props.data)
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
    <Card transparent style={{ borderWidth: 0 }}>
      <CardItem
        button
        style={styles.cardItem}
        onPress={() => { props.data.strainDetail(props) }}
      >
        <Left>
          <Thumbnail source={require('../assets/images/sativa.png')} style={{ marginRight: 15 }}/>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'stretch'
          }}>
            <View>
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20, color: '#66462a' }}>{strain_name}</Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}>
              <View>
                <Text style={{ fontWeight: 'bold', color: '#027233' }}>
                  Strain Rating: <Text style={{ fontWeight: 'normal', color: '#73703a' }}>{strain_avg_rating}</Text>
                </Text>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold', color: '#027233' }}>
                  Strain Race: <Text style={{ fontWeight: 'normal', color: '#73703a' }}>{strain_race}</Text>
                </Text>
              </View>
            </View>
          </View>
        </Left>
      </CardItem>
    </Card>
  )
}

function LabelCardBasic (props) {
  // console.log('LabelCardBasic props', props.data)
  const { label_name, label_avg_rating } = props.data
  return (
    <Card transparent style={{ borderWidth: 0, marginHorizontal: 5 }}>
      <CardItem
        button
        style={styles.cardItem}
        onPress={() => { props.data.labelDetail(props) }}
      >
        <Left>
          <Thumbnail source={require('../assets/images/sativa.png')} style={{ marginRight: 15 }}/>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'stretch'
          }}>
            <View>
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20, color: '#66462a' }}>{label_name}</Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
              <View>
                <Text style={{ fontWeight: 'bold', color: '#057e3a' }}>
                  Label Rating: <Text style={{ fontWeight: 'normal', color: '#61553b' }}>{label_avg_rating}</Text>
                </Text>
              </View>
            </View>
          </View>
        </Left>
      </CardItem>
    </Card>
  )
}

export default function CardBasic (props) {
  // console.log('-----------------------------')
  // console.log('CardBasic props', props.data)
  // console.log('-----------------------------')
  const isStrain = props.data.strain_name
  if (isStrain) {
    return <StrainCardBasic
      data={props}
    />
  }
  return <LabelCardBasic
    data={props}
  />
}

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: '#191919',
    borderWidth: 0
  },
  cardText: {
    color: '#057e3a',
    fontWeight: 'bold'
  },
  cardTextOverride: {
    fontWeight: 'normal'
  }
})
