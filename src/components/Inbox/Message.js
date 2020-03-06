import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <li className={"Message" + (this.props.message.read ? " Message--read" : "")}>
        {this.props.message.read && 
          <span className="Message__read">&#10004;</span> }
        <span className="Message__text">{this.props.message.text}</span>
        <button>Mark {this.props.message.read ? "Read" : "Unread"}</button>
        <button>Delete</button>
      </li>
    );
  }
}

export default Message;