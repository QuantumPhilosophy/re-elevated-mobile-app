import React, { Component } from 'react'
import { Image, Linking } from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base'

export default BookCard = (props) => {
  const { title, description, imageLinks, image, authors, subtitle } = props.data

  return (
      <Container>
    <Header />
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Thumbnail large source={{ uri: image || imageLinks.thumbnail }}/>
          <Body style={{ marginLeft: '3%' }}>
            <Text>{title}</Text>
            <Text note>{subtitle}</Text>
          </Body>
          <Right>
            <Icon
              onPress={() => {!image ? props.save(props.data) : null}}
              name={image ? 'remove' : 'heart'}/>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Author(s): {authors}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
            <Text>
              Synposis: {description ? description.slice(0, 200) : 'Not available'} ...
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Button
            transparent
            textStyle={{ color: '#87838B' }}
            onPress={() => {props.bookDetail(props.data)}}>
            <Icon name="navigate"/>
            <Text>Book Detail</Text>
          </Button>
        </CardItem>
      </Card>
    </Content>
      </Container>
  )
}
