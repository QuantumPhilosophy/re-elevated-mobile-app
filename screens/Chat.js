import React from 'react'
import { Container, Content, Card, CardItem, Text } from 'native-base'
import io from 'socket.io-client'

const socket = io()

class Chat extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      message: '',
      messages: []
    }

    this.socket = io('localhost:3001')
    // , {
    //     query: `r_var=${props.roomId}`
    // }
    // );
    //()

    socket.on('RECEIVE_MESSAGE', function (data) {
      console.log('Message Received: ', data)
      addMessage(data)
    })

    const addMessage = data => {
      console.log(data)
      this.setState({ messages: [...this.state.messages, data] })
      console.log(this.state.messages)
    }

    this.sendMessage = ev => {
      ev.preventDefault()
      // console.log(this.state.username, this.state.message)
      socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      })
      this.setState({ message: '' })
    }
  }

  render () {

    return (
      <Container>
        <Text>We Live</Text>
      </Container>
    )
  }
}

export default Chat
