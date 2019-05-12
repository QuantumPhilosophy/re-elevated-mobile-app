import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text } from 'native-base'
import SearchBar from '../components/SearchBar'
import CardBasic from '../components/CardBasic'
import CardLg from '../components/CardLg'
import API from '../utils/API'

export default class LabelDetail extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    // TODO: update bookSearch for strain / label searching
    // bookSearch: '',
    user: null,
    apiStrains: []
  }

  componentDidMount () {
    API.getStrains().then(response => {
      this.setState({
        apiStrains: response.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render () {
    // console.log('-----------------------------')
    // console.log('LabelDetail screen triggered', this.props.navigation.state.params.data)
    // console.log('-----------------------------')
    const {
      id,
      label_name,
      label_avg_rating
    } = this.props.navigation.state.params.data
    return (
      <Container style={styles.container}>
        <SearchBar/>
        <Content>
          <CardLg
            key={id}
            id={id}
            label_name={label_name}
            // img={label_img}
            label_avg_rating={label_avg_rating}
          />
          <Text>Strains Carried by {label_name}</Text>

          {this.state.apiStrains.map((strain, index) => {
            return (
              <CardBasic
                key={index}
                id={strain.id}
                data={strain}
                strain_name={strain.strain_name}
                strain_race={strain.strain_race}
                strain_img={strain.strain_img}
                strain_avg_rating={strain.strain_avg_rating}
                // strainDetail={this.strainDetail}
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
    flex: 1
  }
})
