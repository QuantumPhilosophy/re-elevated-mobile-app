import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text } from 'native-base'
import SearchBar from '../components/SearchBar'
import CardBasic from '../components/CardBasic'
import CardLg from '../components/CardLg'
import API from '../utils/API'

export default class StrainDetail extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    // TODO: update bookSearch for strain / label searching
    // bookSearch: '',
    user: null,
    apiLabels: []
  }

  componentDidMount () {
    API.getLabels().then((response) => {
      this.setState({
        apiLabels: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render () {
    // console.log('-----------------------------')
    // console.log('strainDetail screen triggered', this.props.navigation.state.params.data)
    // console.log('-----------------------------')
    const {
      id,
      strain_name,
      strain_avg_rating,
      strain_descr,
      strain_race,
      strain_flavor,
      strain_medical,
      strain_negative,
      strain_positive
    } = this.props.navigation.state.params.data
    return (
      <Container style={styles.container}>
        <SearchBar/>
        <Content>
          <CardLg
            key={id}
            id={id}
            strain_name={strain_name}
            // img={strain_img}
            strain_avg_rating={strain_avg_rating}
            strain_descr={strain_descr}
            strain_flavor={strain_flavor}
            strain_positive={strain_positive}
            strain_negative={strain_negative}
            strain_medical={strain_medical}
            strain_race={strain_race}
          />
          <Text style={styles.text}>Labels that carry {strain_name}</Text>

          {this.state.apiLabels.map((label, index) => {
            return (
              <CardBasic
                key={index}
                id={label.id}
                data={label}
                label_name={label.label_name}
                label_img={label.label_img}
                label_avg_rating={label.label_avg_rating}
                // labelDetail={this.labelDetail}
              />
            )
          })}
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: '#057e3a',
  },
})
