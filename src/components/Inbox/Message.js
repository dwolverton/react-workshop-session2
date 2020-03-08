import React from 'react';
import './Message.css';

const Message = ({message, onMark, onDelete}) => {
  return (
    <li className={"Message" + (message.read ? " Message--read" : "")}>
      {message.read && 
        <span className="Message__read">&#10004;</span> }
      <span className="Message__text">{message.text}</span>
      <button onClick={() => onMark(!message.read)}>Mark {message.read ? "Read" : "Unread"}</button>
      <button onClick={onDelete} >Delete</button>
    </li>
  );
}

export default Message;