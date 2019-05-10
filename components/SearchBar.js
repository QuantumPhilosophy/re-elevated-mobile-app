import React from 'react'
import { Header, Item, Input, Icon, Button, Text, Container } from 'native-base'
import { StyleSheet } from 'react-native'

export default SearchBar = (props) => {
  return (
      <Header searchBar rounded style={styles.header}>
        <Icon style={{ padding: '2%' }}
          // onPress={props.logoutUser}
          name='ios-person' />
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Search'
            onChangeText={props.handleInputChange}
          />
          {/* <Icon name="ios-people" /> */}
        </Item>
        <Button transparent onPress={props.search}>
          <Text>Search</Text>
        </Button>
      </Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000'
  },
})
