import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";
import { Image, Text } from "react-native";

// Basic card for strain and label information. The data expected for each is of the same format, so feeding it the correct props will show the correct data in the correct view.
export default function CardBasic(props) {
  return (
        <Card>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/weed-marijuana-and-pot-leaf/50/24-128.png"
                }}
                style={{ height: 25, width: 25, flex: 1 }}
              />
              <Text>
                This is just a transparent card with some text to boot.
                ID: {props.id} Name: {props.name} Rating: {props.aveRating}
              </Text>
            </Body>
          </CardItem>
        </Card>
  );
}
