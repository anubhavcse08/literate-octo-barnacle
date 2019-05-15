import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config';

class App extends Component {
  constructor() {
    super()
    this.state = {
      roomId: null,
      messages : [],
      jionableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.createRoom = this.createRoom.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Anubhav',
      tokenProvider : new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })
    chatManager.connect()
    .then(currentUser =>{
      this.currentUser= currentUser

      this.getRooms()
    })
    .catch(err=> console.log('Error in Connecting: ', err))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
      .then(jionableRooms =>{
        this.setState({
          jionableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err=> console.log('Error in joinableRooms: ', err))
  }

  subscribeToRoom(roomId) {
    this.setState({ messages:[]})
    this.currentUser.subscribeToRoom({
      roomId : roomId,
      hooks: {
        onNewMessage: message => {
            console.log('message.text: ', message.text);
            this.setState({
              messages : [...this.state.messages, message]
            })
        }
      }
    })
    .then(room=> {
      this.setState({
        roomId:room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('error in subscribing to room ',err))
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  createRoom(name) {
    this.currentUser.createRoom({
      name
    })
    .then(room =>this.subscribeToRoom(room.id))
    .catch(err => console.log('Error from createRoom: ',err))
  }

  render() {
    console.log('this.state.messages:',this.state.messages);
    return (
      <div className="app">
        <RoomList 
          roomId ={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.jionableRooms, ...this.state.joinedRooms]} 
        />
        <MessageList 
          roomId={this.state.roomId}
          messages={this.state.messages} 
        />
        <SendMessageForm 
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage}
        />
        <NewRoomForm createRoom={this.createRoom} />
      </div>
    );
  }
}

export default App;
