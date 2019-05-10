import React from 'react'
import { View } from 'native-base'
import CardBasic from '../components/CardBasic'

export default (SearchTabStrains = props => {
  console.log('SearchTabStrains = props', props.apiStrains[0])
  return (
    <View>
      {props.apiStrains.map((strain, index) => {
        return (
          <CardBasic
            key={index}
            name={strain.strain_name}
            img={strain.img}
            aveRating={strain.strain_avg_rating}
            wishListed={strain.wishListed}
            tried={strain.tried}
            id={strain.id}
          />
        )
      })}
    </View>
  )
})
