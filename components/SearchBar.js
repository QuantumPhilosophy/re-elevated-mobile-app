import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Item, Input, Icon, Button, Text } from 'native-base'

export default function SearchBar (props) {
  return (
    <Header searchBar rounded hasTabs style={styles.header}>
      <Item>
        <Input bordered placeholder='Search' onChangeText={props.handleInputChange} placeholderTextColor='#463B2F' style={styles.input} />
      </Item>
      <Button transparent iconLeft title='search' onPress={props.search}>
        <Icon name='ios-search' style={styles.icon}/>
        {/*<Text>Search</Text>*/}
      </Button>
    </Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000'
  },
  icon: {
    backgroundColor: '#000',
    color: '#aaa',
    marginRight: 5
  },
  input: {
    height: 35,
    backgroundColor: '#191919',
  },
  style: {
    backgroundColor: '#000'
  }
})
