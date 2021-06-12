import React, { Component } from 'react';
import {Sidebar, MessageList, AddMessage} from '../components';

/* main chat window and the layout */

class ChatApp extends Component {
  render() {
      return (
        <div id="container">
        <Sidebar />
        <section id="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default ChatApp