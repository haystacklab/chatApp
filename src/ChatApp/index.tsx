import React, { Component } from 'react';
import {Sidebar, MessageList, AddMessage} from '../components';
import './index.css'

/* main chat window and the layout */

class ChatApp extends Component {
  render() {
      return (
        <div className="mainContainer">
          <Sidebar />
          <MessageList />
          <AddMessage />
      </div>
    )
  }
}

export default ChatApp