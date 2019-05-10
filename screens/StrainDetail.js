import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import SearchBar from '../components/SearchBar'
import CardLg from '../components/CardLg'
import CardBasic from '../components/CardBasic'
import API from '../utils/API'

export default class StrainDetail extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    // TODO: update bookSearch for strain / label searching
    // bookSearch: '',
    user: null,
    apiLabels: []
  }

  componentDidMount() {
    API.getLabels().then((response) => {
      console.log('getLabels response', JSON.stringify(response))
      this.setState({
        apiLabels: response.data,
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render () {
    console.log('-----------------------------')
    console.log('StrainDetail screen triggered', JSON.stringify(this.props.navigation.state.params.data))
    console.log('-----------------------------')
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
        <SearchBar />
        <Content>
          <CardLg
            key={id}
            id={id}
            name={strain_name}
            // img={strain_img}
            rating={strain_avg_rating}
            description={strain_descr}
            type={strain_race}
            flavor={strain_flavor}
            positive={strain_positive}
            negative={strain_negative}
            medical={strain_medical}
            race={strain_race}
          />
          {this.state.apiLabels.map((label, index) => {
            console.log('label', JSON.stringify(label))
            const labelObj = label
            // console.log('-----------------------------')
            // console.log('setting strainObj', strainObj)
            // console.log('-----------------------------')
            return (
              <CardBasic
                key={index}
                id={label.id}
                data={labelObj}
                name={label.label_name}
                img={label.label_img}
                aveRating={label.label_avg_rating}
                strainDetail={this.strainDetail}
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
    backgroundColor: '#000'
  },
})
