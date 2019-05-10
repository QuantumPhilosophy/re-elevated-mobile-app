import React from 'react';
import {ScrollView} from 'react-native';
import { Header, Content, Card, Thumbnail, Image, Left, CardItem, Text, View, Body } from 'native-base';

// Don't forget, you can absolute re-use this for labels vs strains if the data is similar and needs to go in the same
// place. props.name will take the value of the 'name' key fed into it, and if you want something besides props.flavor,
// use a || to make JS look for one key or the other. EX: {props.flavor || props.label_address}

export default function CardLg(props) {
    return (
          <Card>
            <CardItem header>
              <Left>
                <Thumbnail source={require('../assets/images/sativa.jpg')} />
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', fontSize: 24}}>{props.name}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <View height={125}>
              <ScrollView>
                <Text style={{fontWeight: 'bold'}}>About: </Text><Text>{props.description}</Text>
                <Text style={{fontWeight: 'bold'}}>Flavor notes: </Text><Text>{props.flavor}</Text>
                <Text style={{fontWeight: 'bold'}}>Medical benefits: </Text><Text>{props.medical}</Text>
              </ScrollView>
              </View>
            </CardItem>
            <CardItem footer>
              <Text style={{fontWeight: 'bold'}}>Average Rating: </Text><Text>{props.rating}</Text>
            </CardItem>
          </Card>
    );
  }
