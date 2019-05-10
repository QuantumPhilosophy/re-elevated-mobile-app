import React from 'react'
import { Header, Item, Input, Icon, Button } from 'native-base'

export default (SearchBar = props => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon
          style={{ padding: '2%' }}
          onPress={props.logoutUser}
          name='ios-person'
        />

        <Icon name='ios-search' />
        <Input placeholder='Search' onChangeText={props.handleInputChange} />
      </Item>
      <Button transparent onPress={props.search} />
    </Header>
  )
})

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#000'
//   },
// })
