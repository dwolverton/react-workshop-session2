import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <li className={"Message" + (this.props.message.read ? " Message--read" : "")}>
        {this.props.message.read && 
          <span className="Message__read">&#10004;</span> }
        <span className="Message__text">{this.props.message.text}</span>
        <button onClick={() => this.props.onMark(!this.props.message.read)}>Mark {this.props.message.read ? "Read" : "Unread"}</button>
        <button onClick={this.props.onDelete} >Delete</button>
      </li>
    );
  }
}

export default Message;