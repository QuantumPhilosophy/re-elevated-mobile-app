import React from 'react'
import { View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Left } from 'native-base'
import TopTab from './TopTab'

export default (SearchBar = props => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon
          style={{ padding: "2%" }}
          onPress={props.logoutUser}
          name="ios-person"
        />

        <Icon name="ios-search" />
        <Input placeholder="Search" onChangeText={props.handleInputChange} />
      </Item>
      <Button transparent onPress={props.search} />
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000'
  },
})
