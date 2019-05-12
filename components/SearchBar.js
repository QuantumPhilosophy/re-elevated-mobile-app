import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Item, Input, Icon, Button, Text } from 'native-base'

export default function SearchBar (props) {
  return (
    <Header searchBar rounded hasTabs
            style={styles.header}
    >
      <Item>
        <Icon name='ios-search'/>
        <Input placeholder='Search' onChangeText={props.handleInputChange}/>
      </Item>
      <Button transparent title='search' onPress={props.search}>
        <Text>Search</Text>
      </Button>
    </Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000'
  }
})
