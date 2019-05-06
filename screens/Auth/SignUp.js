import React, { Component } from 'react'
import { Button, Image, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Text, Thumbnail } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { ImagePicker, Permissions } from 'expo'
import API from '../../utils/API'

export default class SignUp extends Component {
  state = {
    user_name: '',
    user_email: '',
    user_img: '',
    user_password: '',
    confirm_user_password: '',
    dob: ''
  }

  signUp = () => {
    // deconstruct state object
    const { user_name, user_email, user_img, user_password, dob } = this.state

    // create createNewUser object to be sent to database
    const newUser = { user_name, user_email, user_img, user_password, dob }

    console.log(newUser)

    // return fetch("http://localhost:3030/auth/signup", options);
    API.createNewUser(newUser)
      .then(res => {
        console.log('SUCCESSFUL SIGNUP', JSON.stringify(res))
        this.handleLoginRedirect(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  loginNavigation = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Login',
    })
    this.props.navigation.dispatch(navigateAction)
    // this.props.navigation.goBack();
  }

  handleLoginRedirect = (userObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Home',
      params: { data: userObj }
    })
    this.props.navigation.dispatch(navigateAction)
    // this.props.navigation.goBack();
  }

  // _pickImage = async () => {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  //
  //   if (status === 'granted') {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       base64: true
  //     })
  //
  //     console.log('PHOTO AFTER IMAGE PICKER', result)
  //     if (!result.cancelled) {
  //       this.setState({ photo: result.uri })
  //     }
  //
  //   } else {
  //     throw new Error('Camera roll permission not granted')
  //   }
  // }

  // uploadPhoto = () => {
  //   const uriParts = photo.split('.');
  //   const fileType = uriParts[uriParts.length - 1];
  //
  //   const formData = new FormData();
  //
  //       formData.append('photo', {
  //         photo,
  //         name: `photo.${fileType}`,
  //         type: `image/${fileType}`,
  //       });
  //
  //       console.log('PHOTO PRE UPLOAD: ', formData)
  //       const options = {
  //         method: 'POST',
  //         body: formData,
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //         },
  //   };
  // }

  render () {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>User Name</Label>
              <Input name='username' onChangeText={(value) => this.setState({ user_name: value })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input onChangeText={(value) => this.setState({ user_email: value })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(value) => this.setState({ user_password: value })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input secureTextEntry={true} onChangeText={(value) => this.setState({ confirm_user_password: value })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Date of Birth</Label>
              <Input onChangeText={(value) => this.setState({ dob: value })}/>
            </Item>
            {/*<Item fixedLabel disabled style={{ paddingTop: '10%', justifyContent: 'flex-end' }}>*/}
            {/*  <Label>Profile Picture</Label>*/}
            {/*  <Text note style={{ marginRight: '20%' }}>{this.state.photo ? 'uploaded profile picture' : null}</Text>*/}
            {/*</Item>*/}
            {/*<Button onPress={this._pickImage} title="Upload from Photo Library"/>*/}
            {/*<View style={{ justifyContent: 'center' }}>*/}
            {/*  {this.state.image === null ? null :*/}
            {/*    <Image large source={{ uri: this.state.image }} resizeMethod='scale' resizeMode='contain' style={{width: '100%', height: 200}}/>}*/}
            {/*</View>*/}
            <View>
              <Button onPress={this.loginNavigation} title="Back to Login"/>
              <Button onPress={this.signUp} title="Signup"/>
            </View>
          </Form>
        </Content>
      </Container>
    )
  }
}
