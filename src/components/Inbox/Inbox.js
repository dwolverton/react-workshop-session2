import React, { Component } from 'react';
import './Inbox.css';
import Message from './Message';

class Inbox extends Component {

  state = {
    messages: [
      { text: "Welcome to class!", read: false },
      { text: "Please bring donuts.", read: true },
      { text: "A square is a rhombus.", read: false }
    ]
  }

  render() {
    return (
      <div className="Inbox box">
        <h3>Messages</h3>
        <ul>
          {this.state.messages.map((message, i) => 
            <Message message={message} />
          )}
        </ul>
      </div>
    );
  }
}

export default Inbox;