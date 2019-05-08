import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

// Basic card for strain and label information. The data expected for each is of the same format, so feeding it the correct props will show the correct data in the correct view.
export default class CardTransparentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}