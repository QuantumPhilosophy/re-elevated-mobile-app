import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container, Header, Content, Form, Item, Input, Label, Left, Icon, Body, Title, Right } from 'native-base'
import API from '../../utils/API'

export default class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    username: '',
    password: ''
  }

  componentDidMount () {
    console.log('loginUser component triggered')
  }

  goToMain = (userObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Home',
      params: { data: userObj }
    })
    this.props.navigation.dispatch(navigateAction)
    // this.props.navigation.goBack();
  }

  signUpNavigation = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'SignUp',
    })
    this.props.navigation.dispatch(navigateAction)
    // this.props.navigation.goBack();
  }

  login = () => {
    console.log(this.state)
    API.loginUser(this.state)
      .then(res => {
        this.goToMain(res)
      })
      .catch(err => {
        console.log('LOGIN ERROR: ', err)
      })
  }

  render () {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Elevated</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>User Name</Label>
              <Input onChangeText={(value) => this.setState({ username: value })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })}/>
            </Item>
            <Button
              title="Login"
              onPress={() => this.login()}
            />
            <Button
              title="Signup"
              onPress={() => this.signUpNavigation()}
            />
          </Form>
        </Content>
      </Container>
    )
  }
}
