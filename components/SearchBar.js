import React from 'react'
import { View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Left } from 'native-base'

export default SearchBar = (props) => {
  return (
    <Container>
      <Header searchBar rounded>

        <Icon style={{ padding: '2%' }}
              onPress={props.logoutUser}
              name="ios-person"/>
        <Item>
          <Icon name="ios-search"/>
          <Input
            placeholder="Search"
            onChangeText={props.handleInputChange}
          />
          {/* <Icon name="ios-people" /> */}
        </Item>
        <Button
          transparent
          onPress={props.search}
        >
          <Text>Search</Text>
        </Button>
      </Header>
    </Container>
  )
}
