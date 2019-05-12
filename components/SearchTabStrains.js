import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'
import CardBasic from '../components/CardBasic'

export default function SearchTabStrains (props) {
  // console.log('SearchTabStrains props', props)
  return (
    <View style={styles.view}>
      {props.apiStrains.map((strain, index) => {
        // console.log('strain item', strain)
        return (
          <CardBasic
            key={index}
            id={strain.id}
            data={strain}
            strain_img={strain.strain_img}
            strain_name={strain.strain_name}
            strain_avg_rating={strain.strain_avg_rating}
            strain_descr={strain.strain_descr}
            strain_race={strain.strain_race}
            strain_flavor={strain.strain_flavor}
            strain_positive={strain.strain_positive}
            strain_negative={strain.strain_negative}
            strain_medical={strain.strain_medical}
            strainDetail={props.strainDetail}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: '#000'
  }
})
