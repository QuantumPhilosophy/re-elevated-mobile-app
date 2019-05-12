import React from 'react'
import { View } from 'native-base'
import CardBasic from './CardBasic'

export default function SearchTabLabels (props) {
  // console.log('SearchTabLabels props', props)
  return (
    <View>
      {props.apiLabels.map((label, index) => {
        // console.log('label item', label)
        return (
          <CardBasic
            key={index}
            id={label.id}
            data={label}
            label_img={label.label_img}
            label_name={label.label_name}
            label_avg_rating={label.label_avg_rating}
            labelDetail={props.labelDetail}
          />
        )
      })}
    </View>
  )
}
